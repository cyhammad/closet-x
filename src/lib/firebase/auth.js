import { auth } from "@/lib/firebase/config";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export async function adminSignIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function adminSignOut() {
  return signOut(auth);
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}
