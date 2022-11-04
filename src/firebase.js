import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDLfwB3DkvRvbQGO5UT5vLDbJpnYdXYuBw",
  authDomain: "semicolony-57d04.firebaseapp.com",
  projectId: "semicolony-57d04",
  storageBucket: "semicolony-57d04.appspot.com",
  messagingSenderId: "165773548739",
  appId: "1:165773548739:web:f08fc2aef631e631101676"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
