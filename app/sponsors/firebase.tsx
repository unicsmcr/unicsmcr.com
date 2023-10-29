import firebase from "firebase/app";
import "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: "AIzaSyBjJwQb2U_vey814MgFPFr9m3gjN0eJBIU",
	authDomain: "unicssponsorpage.firebaseapp.com",
	projectId: "unicssponsorpage",
	storageBucket: "unicssponsorpage.appspot.com",
	messagingSenderId: "743867196579",
	appId: "1:743867196579:web:1737518e98a1301f7f0b16",
	measurementId: "G-EGJD821DWL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;