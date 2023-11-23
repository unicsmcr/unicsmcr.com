// Import the functions we need from the Firebase SDK
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Our Firebase configuration - Keep this private -> this should be in .env
const firebaseConfig = {
  apiKey: "AIzaSyBjJwQb2U_vey814MgFPFr9m3gjN0eJBIU",
  authDomain: "unicssponsorpage.firebaseapp.com",
  projectId: "unicssponsorpage",
  storageBucket: "unicssponsorpage.appspot.com",
  messagingSenderId: "743867196579",
  appId: "1:743867196579:web:1737518e98a1301f7f0b16",
  measurementId: "G-EGJD821DWL"
};

// Initialise Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);