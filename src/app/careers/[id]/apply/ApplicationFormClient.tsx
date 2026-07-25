"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  UploadCloud,
  FileCheck,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";

interface ApplicationFormClientProps {
  jobId: string;
  jobTitle: string;
}

export default function ApplicationFormClient({
  jobId,
  jobTitle,
}: ApplicationFormClientProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("3rd Year");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Resume File & Drive Link State
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeLink, setResumeLink] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // College Club Involvement State
  const [inCollegeClub, setInCollegeClub] = useState<boolean>(false);
  const [clubName, setClubName] = useState("");
  const [clubPosition, setClubPosition] = useState("");

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Drag & Drop Handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndSetFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit. Please upload a smaller file.");
      return;
    }
    setError(null);
    setResumeFile(file);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!acceptedTerms) {
      setError("Please check the acceptance box to proceed.");
      return;
    }

    if (!resumeFile && !resumeLink) {
      setError("Please attach your resume by uploading a file or providing a Google Drive / cloud link.");
      return;
    }

    if (inCollegeClub && (!clubName.trim() || !clubPosition.trim())) {
      setError("Please fill in your College Club Name and Position Held.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        jobId,
        jobTitle,
        fullName,
        email,
        phone,
        college,
        yearOfStudy,
        portfolioUrl: portfolioUrl || null,
        resumeName: resumeFile ? resumeFile.name : null,
        resumeLink: resumeLink ? resumeLink : null,
        inCollegeClub,
        clubName: inCollegeClub ? clubName : null,
        clubPosition: inCollegeClub ? clubPosition : null,
        coverNote: coverNote || null,
      };

      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="max-w-md mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-[#1a3646]">
            Application Submitted
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Your application for <span className="font-semibold text-[#1a3646]">{jobTitle}</span> has been received successfully.
          </p>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/careers"
            className="px-6 py-2.5 bg-[#1a3646] hover:bg-[#112430] text-white font-semibold text-xs rounded-xl shadow transition-all"
          >
            Explore Other Roles
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in duration-200">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1 font-medium">{error}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Full Name */}
        <div>
          <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            id="full-name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Aarav Sharma"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="applicant-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              id="applicant-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="aarav@example.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
            />
          </div>

          <div>
            <label htmlFor="applicant-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              id="applicant-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
            />
          </div>
        </div>

        {/* College & Year of Study Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="college-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              College / University Name *
            </label>
            <input
              id="college-name"
              type="text"
              required
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="IIT Bombay / BITS Pilani"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
            />
          </div>

          <div>
            <label htmlFor="year-of-study" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Year of Study *
            </label>
            <select
              id="year-of-study"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
            >
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year / Final Year">4th Year / Final Year</option>
              <option value="Postgraduate (PG)">Postgraduate (PG)</option>
              <option value="Recent Graduate">Recent Graduate</option>
            </select>
          </div>
        </div>

        {/* College Club Involvement Question */}
        <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Are you currently or previously part of any college club or student organization? *
          </label>

          <div className="flex items-center gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-800">
              <input
                type="radio"
                name="inCollegeClub"
                checked={inCollegeClub === true}
                onChange={() => setInCollegeClub(true)}
                className="w-4 h-4 accent-[#1a3646]"
              />
              Yes
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-800">
              <input
                type="radio"
                name="inCollegeClub"
                checked={inCollegeClub === false}
                onChange={() => {
                  setInCollegeClub(false);
                  setClubName("");
                  setClubPosition("");
                }}
                className="w-4 h-4 accent-[#1a3646]"
              />
              No
            </label>
          </div>

          {/* Conditional Club Fields */}
          {inCollegeClub && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/80 animate-in fade-in duration-200">
              <div>
                <label htmlFor="club-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Club / Organization Name *
                </label>
                <input
                  id="club-name"
                  type="text"
                  required={inCollegeClub}
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  placeholder="e.g. Rotaract Club / E-Cell / IEEE"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:border-[#1a3646]"
                />
              </div>

              <div>
                <label htmlFor="club-position" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Position / Role Held *
                </label>
                <input
                  id="club-position"
                  type="text"
                  required={inCollegeClub}
                  value={clubPosition}
                  onChange={(e) => setClubPosition(e.target.value)}
                  placeholder="e.g. Lead / Vice President / Member"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:border-[#1a3646]"
                />
              </div>

              {/* Green Plus Point Encouragement Message */}
              {clubName.trim().length > 0 && clubPosition.trim().length > 0 && (
                <div className="col-span-1 sm:col-span-2 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wow! That is a plus point for us. Thank you, please continue with the application process.</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Portfolio Link (Optional) */}
        <div>
          <label htmlFor="portfolio-url" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Portfolio / GitHub Link <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
          </label>
          <input
            id="portfolio-url"
            type="url"
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            placeholder="https://github.com/username"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
          />
        </div>

        {/* RESUME DRAG & DROP MODE OR GOOGLE DRIVE LINK */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Resume / CV * <span className="text-slate-500 font-normal text-[11px]">(Upload PDF or provide Drive link below)</span>
          </label>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />

          {!resumeFile ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
                isDragging
                  ? "border-[#1a3646] bg-[#1a3646]/5"
                  : "border-slate-300 bg-slate-50 hover:bg-slate-100/80 hover:border-slate-400"
              }`}
            >
              <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-bold text-[#1a3646]">
                Drag and drop your resume file here, or <span className="underline text-orange-600">browse file</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                PDF, DOC, DOCX up to 10MB
              </p>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 truncate">
                <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    {resumeFile.name}
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    {formatFileSize(resumeFile.size)} • File attached
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setResumeFile(null)}
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:text-red-600 text-slate-400 transition-colors"
                title="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* OR Google Drive / Cloud Link */}
          <div className="pt-1 space-y-1.5">
            <label htmlFor="resume-link" className="block text-xs font-semibold text-slate-700">
              Or Google Drive / Cloud Resume Link <span className="text-slate-400 font-normal text-[11px]">(If no PDF file uploaded)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <LinkIcon className="w-4 h-4" />
              </div>
              <input
                id="resume-link"
                type="url"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
                placeholder="https://drive.google.com/file/d/..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
              />
            </div>
            
            {/* Red Notice for View Permissions */}
            <p className="text-xs font-semibold text-red-600 flex items-start gap-1.5 pt-0.5">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Please ensure you allow view access (&quot;Anyone with the link can view&quot;) for your Google Drive or cloud resume link.</span>
            </p>
          </div>
        </div>

        {/* Cover Note (Optional) */}
        <div>
          <label htmlFor="cover-note" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Brief Note / Proposal <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
          </label>
          <textarea
            id="cover-note"
            rows={2}
            value={coverNote}
            onChange={(e) => setCoverNote(e.target.value)}
            placeholder="Why do you want to join Student Forge?"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1a3646] text-sm font-medium transition-all"
          />
        </div>

        {/* Acceptance Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-relaxed font-normal">
            <input
              type="checkbox"
              required
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 accent-[#1a3646]"
            />
            <span>
              I confirm that all information provided is accurate and I consent to Student Forge processing my application data for recruitment. *
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting || !acceptedTerms}
          className="w-full py-3.5 px-6 bg-[#1a3646] hover:bg-[#112430] text-white font-bold rounded-xl shadow-md active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 text-sm"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4 text-[#fbb03b]" />
            </>
          )}
        </button>
      </form>
    </>
  );
}
