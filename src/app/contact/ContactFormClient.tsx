"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, Phone, Tag, MessageSquare } from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "General Inquiry";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: initialCategory,
    message: "",
  });

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setFormData((prev) => ({ ...prev, category: cat }));
    }
  }, [searchParams]);

  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit contact form");
      }

      setSubmittedSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: initialCategory,
        message: "",
      });
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-100 relative overflow-hidden">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#fbb03b] bg-[#fbb03b]/10 px-3 py-1 rounded-full inline-block mb-3">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3646] tracking-tight">
          Send Us a Message
        </h2>
        <p className="text-sm text-slate-600 font-normal mt-2">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      {submittedSuccess ? (
        <div className="py-12 px-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-emerald-950">Message Sent Successfully!</h3>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Student Forge. Our team has received your message and sent a confirmation to your email.
          </p>
          <button
            onClick={() => setSubmittedSuccess(false)}
            className="mt-4 px-6 py-2.5 bg-[#1a3646] hover:bg-[#2d414e] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs font-medium flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-[#1a3646] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#fbb03b]" /> Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:bg-white focus:border-[#1a3646] focus:ring-2 focus:ring-[#1a3646]/10 outline-none transition-all"
            />
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#1a3646] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#fbb03b]" /> Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="rahul@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:bg-white focus:border-[#1a3646] focus:ring-2 focus:ring-[#1a3646]/10 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1a3646] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#fbb03b]" /> Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:bg-white focus:border-[#1a3646] focus:ring-2 focus:ring-[#1a3646]/10 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-xs font-bold text-[#1a3646] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#fbb03b]" /> Category / Purpose *
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:bg-white focus:border-[#1a3646] focus:ring-2 focus:ring-[#1a3646]/10 outline-none transition-all"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Startup">Startup / Founder Collaboration</option>
              <option value="Institution">College / Institution Partnership</option>
              <option value="Student">Student / Aspirant Support</option>
              <option value="Strategic Partnership">Strategic Partnership</option>
              <option value="Careers">Careers / Hiring</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message Area */}
          <div>
            <label className="block text-xs font-bold text-[#1a3646] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#fbb03b]" /> Message *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us how we can assist you..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:bg-white focus:border-[#1a3646] focus:ring-2 focus:ring-[#1a3646]/10 outline-none transition-all resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 px-6 bg-[#1a3646] hover:bg-[#112430] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-70 cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#fbb03b]" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#fbb03b]" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactFormClient() {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-3xl border border-slate-200/90 p-8 text-center text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#1a3646]" />
        <p className="text-sm font-medium mt-2">Loading contact form...</p>
      </div>
    }>
      <ContactFormInner />
    </Suspense>
  );
}
