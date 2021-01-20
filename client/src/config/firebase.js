import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCD6p6d245BaUHvWawO8mD4-YLYa7F3phA',
  authDomain: 'whiteboard-v2.firebaseapp.com',
  projectId: 'whiteboard-v2',
  storageBucket: 'whiteboard-v2.appspot.com',
  messagingSenderId: '253544553674',
  appId: '1:253544553674:web:511001c90fc8b688f46833',
  measurementId: 'G-JV03DZJE27',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
