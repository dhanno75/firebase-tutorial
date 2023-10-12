import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzkQB3d2mJmvZsHogtMLlWRRf9DMpygbA",
  authDomain: "fir-tutorial-173c4.firebaseapp.com",
  projectId: "fir-tutorial-173c4",
  storageBucket: "fir-tutorial-173c4.appspot.com",
  messagingSenderId: "786346266153",
  appId: "1:786346266153:web:18600f1445d2f92462d638",
  measurementId: "G-W014RH1ESQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
