import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// intialize firebase
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
