// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';






// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5FtrZS53enWbmAosIRi_cV3kSfVZtOEA",
  authDomain: "project-listing-70b7d.firebaseapp.com",
  projectId: "project-listing-70b7d",
  storageBucket: "project-listing-70b7d.appspot.com",
  messagingSenderId: "672692395444",
  appId: "1:672692395444:web:57b4ef6fc615f6b3eaa6e1",
  measurementId: "G-XCRNE31C7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);
export const storage = getStorage(app);
export default app;
