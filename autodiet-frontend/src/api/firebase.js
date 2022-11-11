import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzgBmbgEXgDQ4LOBusGE13V_Ra43ZlFUQ",
  authDomain: "autodiet-14730.firebaseapp.com",
  databaseURL: "https://autodiet-14730-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autodiet-14730",
  storageBucket: "autodiet-14730.appspot.com",
  messagingSenderId: "368721624789",
  appId: "1:368721624789:web:a1e2a728c625777780ac5c",
  measurementId: "G-0L87JH23XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export const db = getDatabase(app);
export const db = getFirestore(app);