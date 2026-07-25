"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromPath = searchParams?.get("from") || "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      router.push(fromPath);
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Error Alert */}
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in duration-200">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1 font-medium">{error}</div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="admin-email"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Admin Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-5 h-5" />
            </div>
            <input
              id="admin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@studentforge.com"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] focus:ring-2 focus:ring-[#1a3646]/20 transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="admin-password"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-5 h-5" />
            </div>
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] focus:ring-2 focus:ring-[#1a3646]/20 transition-all text-sm font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 bg-[#1a3646] hover:bg-[#112430] text-white font-semibold rounded-xl shadow-md active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 text-sm"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* 1. Yellow Header Banner */}
      <div className="w-full bg-[#fbb03b] pt-12 pb-36 px-4 text-center">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#1a3646] text-white flex items-center justify-center mb-3 shadow-md">
            <ShieldCheck className="w-6 h-6 text-[#fbb03b]" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a3646] tracking-tight">
            Student Forge Admin
          </h1>
          <p className="text-sm font-medium text-[#1a3646]/80 mt-1">
            Sign in to access your admin console
          </p>
        </div>
      </div>

      {/* 2. Overlapping Sign In Form Container (Half on Yellow Header, Half Down) */}
      <div className="w-full max-w-md mx-auto px-4 -mt-24 pb-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
          <Suspense
            fallback={
              <div className="py-12 flex items-center justify-center text-slate-500 gap-2">
                <Loader2 className="w-6 h-6 animate-spin text-[#1a3646]" />
                <span className="text-sm">Loading login...</span>
              </div>
            }
          >
            <AdminLoginForm />
          </Suspense>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
            Protected Admin Route • Secured by Env Credentials
          </div>
        </div>
      </div>
    </div>
  );
}
