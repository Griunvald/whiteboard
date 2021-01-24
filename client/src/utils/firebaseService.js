import firebase from '../config/firebase';

export const logInWithEmail = (creds) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
};

export const logOutFirebase = () => {
  return firebase.auth().signOut();
};

export const signInFirebase = async (creds) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);
    return await response.user.updateProfile({
      displayName: creds.displayName,
    });
  } catch (error) {
    throw error;
  }
};
