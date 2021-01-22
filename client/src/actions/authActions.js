import firebase from '../config/firebase';
const SIGN_IN_USER = 'SIGN_IN_USER';
const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const signInUser = (creds) => {
  return async (dispatch) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch({ type: SIGN_IN_USER, payload: response.user });
    } catch (error) {
      throw error;
    }
  };
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
