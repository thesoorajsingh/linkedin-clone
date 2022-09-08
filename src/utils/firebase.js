import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBhbeOV5DXkB6N4Qe5jJByMSlaC-SWgL_U",
	authDomain: "thesoorajsingh-linkedin-clone.firebaseapp.com",
	projectId: "thesoorajsingh-linkedin-clone",
	storageBucket: "thesoorajsingh-linkedin-clone.appspot.com",
	messagingSenderId: "720732157354",
	appId: "1:720732157354:web:e73cb966434aacb71027d3",
	measurementId: "G-485JST07KB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
