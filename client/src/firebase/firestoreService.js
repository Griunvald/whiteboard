import firebase from '../config/firebase';
import randomNumber from '../utils/randomNumber';

const db = firebase.firestore();

export const setUserProfile = (user) => {
  return db
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      boardId: randomNumber(),
    });
};
