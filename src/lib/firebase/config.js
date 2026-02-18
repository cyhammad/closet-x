import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWrf06kn57iD-0WoXAKuNcL1vIGniv2qE",
  authDomain: "myclosetx.firebaseapp.com",
  projectId: "myclosetx",
  storageBucket: "myclosetx.firebasestorage.app",
  messagingSenderId: "20425021326",
  appId: "1:20425021326:web:663f52d2f21d1b428a76df",
  measurementId: "G-RD664P1DYL",
};

// Prevent re-initializing the app on hot reloads (Next.js dev mode)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Analytics is only available in the browser
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, db, storage, analytics };
