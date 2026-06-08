import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpg_oaB73hqN1vP3ZJ5UuXVJ1dNeWskv4",
    authDomain: "govt-job-guidance-app.firebaseapp.com",
    projectId: "govt-job-guidance-app",
    storageBucket: "govt-job-guidance-app.firebasestorage.app",
    messagingSenderId: "945726762300",
    appId: "1:945726762300:web:8b0ba7892891eade514239",
    measurementId: "G-1WLBK9BY2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signOut, onAuthStateChanged };

console.log("Firebase Auth & Firestore initialized...");
