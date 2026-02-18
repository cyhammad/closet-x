"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminSignIn } from "@/lib/firebase/auth";
import { Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await adminSignIn(email, password);
      router.push("/admin/dashboard");
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF7F5] via-[#F4EDE6] to-[#F5E7E0] px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#0F172A] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Admin
          </span>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            MyClosetX
          </h1>
          <p className="text-[#8C7B73] text-sm mt-2">
            Sign in to access the admin dashboard
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-[#e8d9cc]/40 p-8">
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#5e5448] uppercase tracking-widest">
                Email
              </label>
              <div className="flex items-center gap-3 bg-[#FAF7F5] rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#F3E6D5] transition-all">
                <Mail className="w-4 h-4 text-[#A8A29E] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@closetx.com"
                  required
                  className="flex-1 bg-transparent text-[#0F172A] text-sm outline-none placeholder:text-[#C4B8B0]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#5e5448] uppercase tracking-widest">
                Password
              </label>
              <div className="flex items-center gap-3 bg-[#FAF7F5] rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#F3E6D5] transition-all">
                <Lock className="w-4 h-4 text-[#A8A29E] shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="flex-1 bg-transparent text-[#0F172A] text-sm outline-none placeholder:text-[#C4B8B0]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-[#A8A29E] hover:text-[#5e5448] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-[#0F172A] hover:bg-[#1e293b] text-white font-bold text-sm py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
