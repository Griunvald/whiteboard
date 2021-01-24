import firebase from '../config/firebase';

export const logInWithEmail = (creds) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
};

export const logOutFirebase = () => {
  return firebase.auth().signOut();
};