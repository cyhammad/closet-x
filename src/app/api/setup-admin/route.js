import { NextResponse } from "next/server";
import { auth } from "@/lib/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// One-time setup route — DELETE after running
// Visit: /api/setup-admin
export async function GET() {
  try {
    const cred = await createUserWithEmailAndPassword(
      auth,
      "admin@closetx.com",
      "password",
    );
    return NextResponse.json({
      ok: true,
      message: `Admin account created: ${cred.user.email}`,
    });
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      return NextResponse.json({
        ok: true,
        message: "Admin account already exists.",
      });
    }
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 },
    );
  }
}
