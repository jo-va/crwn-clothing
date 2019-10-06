import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDjbjs_AtUSCmb8TQZ9zd1PewKwxMtYcSk',
  authDomain: 'crwn-db-3bf9c.firebaseapp.com',
  databaseURL: 'https://crwn-db-3bf9c.firebaseio.com',
  projectId: 'crwn-db-3bf9c',
  storageBucket: '',
  messagingSenderId: '234496641102',
  appId: '1:234496641102:web:7863b96f9525c190bd5b1f',
  measurementId: 'G-YZ7WYPV19R'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
