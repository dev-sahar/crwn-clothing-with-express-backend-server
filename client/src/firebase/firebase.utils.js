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

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();

      objectToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });

      return await batch.commit();
  }

  export const getUserCartRef = async userId => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const snapShot = await cartsRef.get();
  
    if (snapShot.empty) {
      const cartDocRef = firestore.collection('carts').doc();
      await cartDocRef.set({ userId, cartItems: [] });
      return cartDocRef;
    } else {
      return snapShot.docs[0].ref;
    }
  }

  export const convertCollectinsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      });

      return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {});
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
  };

  export default firebase;