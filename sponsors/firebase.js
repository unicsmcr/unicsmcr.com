// Import the functions we need from the Firebase SDK
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Our Firebase configuration - Keep this private -> this should be in .env
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID"
};

// Initialise Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);