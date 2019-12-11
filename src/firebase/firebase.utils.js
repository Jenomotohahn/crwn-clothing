import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnZu0x_SDsBZL93HLeUK-qP4axJ1jvoyc",
  authDomain: "crwn-db-5c98a.firebaseapp.com",
  databaseURL: "https://crwn-db-5c98a.firebaseio.com",
  projectId: "crwn-db-5c98a",
  storageBucket: "crwn-db-5c98a.appspot.com",
  messagingSenderId: "392220084167",
  appId: "1:392220084167:web:8e6a2eea236fe31b797be2",
  measurementId: "G-Q2PRC5CR8J"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
