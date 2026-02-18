/**
 * Run this ONCE to create the admin account in Firebase Auth:
 *   node src/scripts/createAdmin.mjs
 *
 * After running, you can delete this file.
 */

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWrf06kn57iD-0WoXAKuNcL1vIGniv2qE",
  authDomain: "myclosetx.firebaseapp.com",
  projectId: "myclosetx",
  storageBucket: "myclosetx.firebasestorage.app",
  messagingSenderId: "20425021326",
  appId: "1:20425021326:web:663f52d2f21d1b428a76df",
  measurementId: "G-RD664P1DYL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

try {
  const cred = await createUserWithEmailAndPassword(
    auth,
    "admin@closetx.com",
    "password",
  );
  console.log("✅ Admin account created:", cred.user.email);
} catch (err) {
  if (err.code === "auth/email-already-in-use") {
    console.log("ℹ️  Admin account already exists — nothing to do.");
  } else {
    console.error("❌ Error:", err.message);
  }
}

process.exit(0);
