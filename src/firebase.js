import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/setup#config-object
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm7kGM6q68Uw9_tr6KIrSCFjrqNLfzOkY",
  authDomain: "loginform-bg.firebaseapp.com",
  databaseURL: "https://loginform-bg-default-rtdb.firebaseio.com",
  projectId: "loginform-bg",
  storageBucket: "loginform-bg.appspot.com",
  messagingSenderId: "32014849695",
  appId: "1:32014849695:web:d40fa675c3f1f12c18b4aa",
  measurementId: "G-C2REPG79F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);