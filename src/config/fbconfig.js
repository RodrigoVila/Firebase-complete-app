import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDh91lZZ_zEB0JSFdFYpWZdxeBsce-rnDQ",
  authDomain: "marioplan-7bec2.firebaseapp.com",
  databaseURL: "https://marioplan-7bec2.firebaseio.com",
  projectId: "marioplan-7bec2",
  storageBucket: "marioplan-7bec2.appspot.com",
  messagingSenderId: "653132059391",
  appId: "1:653132059391:web:04cfbc7936d82b89f072ca",
  measurementId: "G-RPX74REE0K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export default firebase;