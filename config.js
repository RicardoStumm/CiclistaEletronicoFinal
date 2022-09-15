import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBeIAql7s9LhfQrhPoDKDxkKuyKhD9LhUw",
  authDomain: "ciclistaeletronico-4ead3.firebaseapp.com",
  projectId: "ciclistaeletronico-4ead3",
  storageBucket: "ciclistaeletronico-4ead3.appspot.com",
  messagingSenderId: "285161414928",
  appId: "1:285161414928:web:765da88ae0d788b1378595"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
