import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config ={

    apiKey: "AIzaSyBa_IYcxX2jupexA8CyixT-QRFEMsWyHhY",
  
    authDomain: "crwn-db-63b37.firebaseapp.com",
  
    projectId: "crwn-db-63b37",
  
    storageBucket: "crwn-db-63b37.appspot.com",
  
    messagingSenderId: "254056932298",
  
    appId: "1:254056932298:web:19e0ed80c0166b825ae533",
  
    measurementId: "G-ERSDJJ4LRZ"
  
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;