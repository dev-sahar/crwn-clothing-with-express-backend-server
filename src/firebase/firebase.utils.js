import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCkaLQW8zPHGHwdeIzonEWnKKTyZ-J5h5w",
    authDomain: "crwn-db-7b6ab.firebaseapp.com",
    databaseURL: "https://crwn-db-7b6ab.firebaseio.com",
    projectId: "crwn-db-7b6ab",
    storageBucket: "crwn-db-7b6ab.appspot.com",
    messagingSenderId: "973443321034",
    appId: "1:973443321034:web:5ffd6cde5090d962e53833",
    measurementId: "G-7MYCSGVZ5X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;