
import * as firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCsqqdbJYx5OmJm8xs63p2laKD3P62AuDI",
  authDomain: "my-app-7b678.firebaseapp.com",
  projectId: "my-app-7b678",
  storageBucket: "my-app-7b678.appspot.com",
  messagingSenderId: "400338669357",
  appId: "1:400338669357:web:a7410b681e08f3d5a70da4"
};

// init firebase

export const db = firebase.initializeApp(firebaseConfig).firestore();