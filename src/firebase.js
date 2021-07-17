import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg25u-tcdZPZFv8MVMI_0DJxa6Er26g4I",
  authDomain: "xflix-69c66.firebaseapp.com",
  projectId: "xflix-69c66",
  storageBucket: "xflix-69c66.appspot.com",
  messagingSenderId: "736333397453",
  appId: "1:736333397453:web:92a6ac3b26385ba26bd884",
  measurementId: "G-55DV12F7YQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
