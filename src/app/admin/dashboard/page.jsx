"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthChange, adminSignOut } from "@/lib/firebase/auth";
import { db } from "@/lib/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {
  LogOut,
  Mail,
  Users,
  RefreshCw,
  Loader2,
  Copy,
  Check,
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(undefined); // undefined = loading
  const [emails, setEmails] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Auth guard
  useEffect(() => {
    const unsub = onAuthChange((u) => {
      if (u === null) router.replace("/admin");
      else setUser(u);
    });
    return unsub;
  }, [router]);

  // Fetch waitlist
  const fetchEmails = async () => {
    setFetching(true);
    try {
      const q = query(collection(db, "waitlist"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setEmails(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (user) fetchEmails();
  }, [user]);

  const handleSignOut = async () => {
    await adminSignOut();
    router.replace("/admin");
  };

  const copyEmail = (id, email) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAll = () => {
    const all = emails.map((e) => e.email).join("\n");
    navigator.clipboard.writeText(all);
  };

  // Loading auth state
  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F5]">
        <Loader2 className="w-6 h-6 animate-spin text-[#8C7B73]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF7F5] via-[#F4EDE6] to-[#F5E7E0]">
      {/* Top bar */}
      <header className="bg-white/70 backdrop-blur-md border-b border-[#ede3da] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#0F172A] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Admin
            </span>
            <span className="text-[#0F172A] font-bold text-lg">MyClosetX</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#8C7B73] hidden sm:block">
              {user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-sm text-[#5e5448] hover:text-[#0F172A] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-sm shadow-[#e8d9cc]/40 flex items-center gap-4">
            <div className="bg-[#F3E6D5] rounded-2xl p-3">
              <Users className="w-6 h-6 text-[#5e5448]" />
            </div>
            <div>
              <p className="text-xs text-[#8C7B73] uppercase tracking-widest font-semibold">
                Total Signups
              </p>
              <p className="text-3xl font-extrabold text-[#0F172A]">
                {fetching ? "—" : emails.length}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm shadow-[#e8d9cc]/40 flex items-center gap-4">
            <div className="bg-[#F3E6D5] rounded-2xl p-3">
              <Mail className="w-6 h-6 text-[#5e5448]" />
            </div>
            <div>
              <p className="text-xs text-[#8C7B73] uppercase tracking-widest font-semibold">
                Collection
              </p>
              <p className="text-lg font-bold text-[#0F172A]">waitlist</p>
            </div>
          </div>
        </div>

        {/* Table card */}
        <div className="bg-white rounded-3xl shadow-sm shadow-[#e8d9cc]/40 overflow-hidden">
          {/* Table header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0e8e0]">
            <h2 className="font-bold text-[#0F172A] text-lg">
              Waitlist Emails
            </h2>
            <div className="flex items-center gap-3">
              {emails.length > 0 && (
                <button
                  onClick={copyAll}
                  className="text-xs text-[#5e5448] hover:text-[#0F172A] border border-[#e8d9cc] rounded-full px-4 py-2 transition-colors"
                >
                  Copy all
                </button>
              )}
              <button
                onClick={fetchEmails}
                disabled={fetching}
                className="flex items-center gap-2 text-xs text-[#5e5448] hover:text-[#0F172A] border border-[#e8d9cc] rounded-full px-4 py-2 transition-colors disabled:opacity-50"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${fetching ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
            </div>
          </div>

          {/* Table body */}
          {fetching && emails.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-6 h-6 animate-spin text-[#8C7B73]" />
            </div>
          ) : emails.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-[#A8A29E]">
              <Mail className="w-10 h-10 mb-3 opacity-40" />
              <p className="text-sm">No signups yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-[#f0e8e0]">
              {/* Column labels */}
              <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-6 py-3 bg-[#FAF7F5]">
                <span className="text-xs font-semibold text-[#A8A29E] uppercase tracking-widest w-8">
                  #
                </span>
                <span className="text-xs font-semibold text-[#A8A29E] uppercase tracking-widest">
                  Email
                </span>
                <span className="text-xs font-semibold text-[#A8A29E] uppercase tracking-widest">
                  Joined
                </span>
              </div>

              {emails.map((entry, idx) => (
                <div
                  key={entry.id}
                  className="grid grid-cols-[auto_1fr_auto] gap-4 items-center px-6 py-4 hover:bg-[#FAF7F5] transition-colors group"
                >
                  <span className="text-sm text-[#A8A29E] w-8 font-mono">
                    {idx + 1}
                  </span>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm text-[#0F172A] font-medium truncate">
                      {entry.email}
                    </span>
                    <button
                      onClick={() => copyEmail(entry.id, entry.email)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#A8A29E] hover:text-[#5e5448] shrink-0"
                    >
                      {copiedId === entry.id ? (
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <span className="text-xs text-[#A8A29E] whitespace-nowrap">
                    {entry.createdAt?.toDate
                      ? entry.createdAt.toDate().toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "—"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
