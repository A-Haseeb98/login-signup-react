// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAVxgoCQJLZikQf5YYRogO3ZXrvKZeH7KY",
  authDomain: "login-signup-aacaf.firebaseapp.com",
  databaseURL: "https://login-signup-aacaf-default-rtdb.firebaseio.com",
  projectId: "login-signup-aacaf",
  storageBucket: "login-signup-aacaf.appspot.com",
  messagingSenderId: "46540882925",
  appId: "1:46540882925:web:3385d9db78eb58694bdde4"
};

const app = initializeApp(firebaseConfig);

export default app;