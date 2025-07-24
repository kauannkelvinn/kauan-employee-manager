import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export function getFirebaseApp() {
    return app;
}

const firebaseConfig = {
    apiKey: "AIzaSyAjANjJccKZgSrt5ePqMw5icDY-LPy-LfY",
    authDomain: "crud-dashboard-5d03b.firebaseapp.com",
    projectId: "crud-dashboard-5d03b",
    storageBucket: "crud-dashboard-5d03b.firebasestorage.app",
    messagingSenderId: "725830894112",
    appId: "1:725830894112:web:59ba58b4bd176fb49ff245"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, app, db };