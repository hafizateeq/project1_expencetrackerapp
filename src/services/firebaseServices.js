import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCNzu5qhByyLWQO48G-QYg-CGy2GSFDRp8",
  authDomain: "expense-tracker-app-cdbbd.firebaseapp.com",
  projectId: "expense-tracker-app-cdbbd",
  storageBucket: "expense-tracker-app-cdbbd.appspot.com",
  messagingSenderId: "106457304775",
  appId: "1:106457304775:web:47402728d54d4fbabd38e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
