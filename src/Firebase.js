import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDpsd-lxu9QW_bnUqvqNE9ZeHgz6Pp-qBQ",
	authDomain: "find-a-studio-today.firebaseapp.com",
	databaseURL: "https://find-a-studio-today-default-rtdb.firebaseio.com",
	projectId: "find-a-studio-today",
	storageBucket: "find-a-studio-today.appspot.com",
	messagingSenderId: "26613040021",
	appId: "1:26613040021:web:0e39e5769bc1ce00d02c9c",
	measurementId: "G-8KD72CY34N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
