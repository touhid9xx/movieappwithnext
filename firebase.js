import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA2_NAWxlX9txEQDDMZ_T89FzFZ0Ltckw0',
  authDomain: 'disney-43742.firebaseapp.com',
  projectId: 'disney-43742',
  storageBucket: 'disney-43742.appspot.com',
  messagingSenderId: '129709810323',
  appId: '1:129709810323:web:954be61e437b3072d06366',
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
