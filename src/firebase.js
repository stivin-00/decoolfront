import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBbII_g7y_THr57ehQ_lXd0HzF_jZrwb_g",
  authDomain: "mern-ecommerce-e0582.firebaseapp.com",
  projectId: "mern-ecommerce-e0582",
  storageBucket: "mern-ecommerce-e0582.appspot.com",
  messagingSenderId: "665432417756",
  appId: "1:665432417756:web:ce84fd2ae46f5948721b19"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
