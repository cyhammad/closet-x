import { db } from "./config";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

/**
 * Saves an email to the Firestore 'waitlist' collection.
 * Uses the email as the document ID to enforce uniqueness at the DB level.
 * Returns { success, alreadyExists }
 */
export async function saveToWaitlist(email) {
  const normalised = email.trim().toLowerCase();
  const docRef = doc(db, "waitlist", normalised);

  // Check if this specific doc already exists
  const existing = await getDoc(docRef);
  if (existing.exists()) {
    return { success: true, alreadyExists: true };
  }

  await setDoc(docRef, {
    email: normalised,
    createdAt: serverTimestamp(),
    source: "landing",
  });

  return { success: true, alreadyExists: false };
}
