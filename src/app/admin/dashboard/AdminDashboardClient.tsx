"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  LogOut,
  Plus,
  Briefcase,
  Trash2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  FileText,
  Calendar,
  Image as ImageIcon,
  Users,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  GraduationCap,
  Globe,
  FileCheck,
  Award,
} from "lucide-react";

interface AdminDashboardClientProps {
  adminEmail: string;
}

export default function AdminDashboardClient({ adminEmail }: AdminDashboardClientProps) {
  const [loggingOut, setLoggingOut] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "create" | "contact">("list");
  const [jobs, setJobs] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Accordion state for job details and applications
  const [expandedJobDetailsId, setExpandedJobDetailsId] = useState<string | null>(null);
  const [expandedApplicationsJobId, setExpandedApplicationsJobId] = useState<string | null>(null);

  // Form State matching all 6 Sections
  const [formData, setFormData] = useState({
    // Section 1: Basic Information
    title: "",
    department: "",
    team: "",
    employmentType: "Full-time",
    workplaceType: "Remote",
    location: "India / Remote",
    openings: 1,

    // Section 2: Job Description
    shortDescription: "",
    detailedDescription: "",
    responsibilities: "",
    requiredSkills: "",
    preferredSkills: "",

    // Section 3: Eligibility
    qualification: "B.Tech Students (3rd & 4th Year)",
    experience: "",
    languages: "English",

    // Section 4: Compensation
    salary: "",
    benefits: "",

    // Section 5: Application
    deadline: "",
    joiningDate: "",
    resumeRequired: true,
    portfolioRequired: false,
    customQuestions: "",

    // Section 6: Publishing
    bannerImage: "",
    featured: false,
    status: "Published",
  });

  const fetchData = async () => {
    setLoadingData(true);
    try {
      const [jobsRes, appsRes, contactRes] = await Promise.all([
        fetch("/api/jobs"),
        fetch("/api/applications"),
        fetch("/api/contact"),
      ]);

      const jobsData = await jobsRes.json();
      const appsData = await appsRes.json();
      const contactData = await contactRes.json();

      if (jobsData.jobs) setJobs(jobsData.jobs);
      if (appsData.applications) setApplications(appsData.applications);
      if (contactData.submissions) setContactSubmissions(contactData.submissions);
    } catch (err) {
      console.error("Failed to load dashboard data", err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.href = "/admin/login";
    } catch {
      window.location.href = "/admin/login";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmitJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to publish job");
      }

      setMessage({ type: "success", text: "Job position created and published successfully!" });
      setViewMode("list");
      fetchData();

      // Reset Form
      setFormData({
        title: "",
        department: "",
        team: "",
        employmentType: "Full-time",
        workplaceType: "Remote",
        location: "India / Remote",
        openings: 1,
        shortDescription: "",
        detailedDescription: "",
        responsibilities: "",
        requiredSkills: "",
        preferredSkills: "",
        qualification: "B.Tech Students (3rd & 4th Year)",
        experience: "",
        languages: "English",
        salary: "",
        benefits: "",
        deadline: "",
        joiningDate: "",
        resumeRequired: true,
        portfolioRequired: false,
        customQuestions: "",
        bannerImage: "",
        featured: false,
        status: "Published",
      });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Something went wrong" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteJob = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job position?")) return;

    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setMessage({ type: "success", text: "Job deleted successfully." });
        fetchData();
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.error || "Failed to delete job." });
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to delete job." });
    }
  };

  const getApplicationsForJob = (jobId: string) => {
    return applications.filter((app) => app.jobId === jobId);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* ─── ADMIN HEADER BAR ────────────────────────────────────── */}
      <header className="bg-[#fbb03b] border-b border-[#1a3646]/10 px-6 py-4 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#1a3646] text-white">
              <ShieldCheck className="w-5 h-5 text-[#fbb03b]" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#1a3646] tracking-tight">
                Student Forge Admin Panel
              </h1>
              <p className="text-xs text-[#1a3646]/80 font-medium">
                Logged in as: <span className="font-bold">{adminEmail}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setMessage(null);
                setViewMode("list");
              }}
              className={`px-4 py-2 font-bold text-xs rounded-xl flex items-center gap-2 transition-all ${
                viewMode === "list"
                  ? "bg-[#1a3646] text-white shadow-md"
                  : "bg-white/40 text-[#1a3646] hover:bg-white/80"
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#fbb03b]" />
              <span>Jobs ({jobs.length})</span>
            </button>

            <button
              onClick={() => {
                setMessage(null);
                setViewMode("contact");
              }}
              className={`px-4 py-2 font-bold text-xs rounded-xl flex items-center gap-2 transition-all ${
                viewMode === "contact"
                  ? "bg-[#1a3646] text-white shadow-md"
                  : "bg-white/40 text-[#1a3646] hover:bg-white/80"
              }`}
            >
              <Mail className="w-4 h-4 text-[#fbb03b]" />
              <span>Inquiries ({contactSubmissions.length})</span>
            </button>

            <button
              onClick={() => {
                setMessage(null);
                setViewMode(viewMode === "create" ? "list" : "create");
              }}
              className="px-4 py-2 bg-white text-[#1a3646] hover:bg-slate-50 font-bold text-xs rounded-xl flex items-center gap-2 shadow-md transition-all border border-[#1a3646]/20"
            >
              {viewMode === "create" ? (
                <>
                  <Briefcase className="w-4 h-4 text-[#1a3646]" />
                  <span>View Jobs</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-[#1a3646]" />
                  <span>Post Job</span>
                </>
              )}
            </button>

            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="p-2 rounded-xl bg-white/40 hover:bg-white/80 text-[#1a3646] transition-colors"
              title="Logout"
            >
              {loggingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : <LogOut className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── MAIN DASHBOARD CONTENT ──────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        
        {/* Status Messages */}
        {message && (
          <div
            className={`p-4 rounded-xl text-sm font-medium flex items-center gap-3 ${
              message.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* OVERALL METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => setViewMode("list")}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:border-[#1a3646]/40 transition-all"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Positions</p>
              <h2 className="text-3xl font-extrabold text-[#1a3646] mt-1">{jobs.length}</h2>
            </div>
            <div className="p-3 bg-[#1a3646]/10 text-[#1a3646] rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>

          <div
            onClick={() => setViewMode("list")}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:border-emerald-300 transition-all"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Job Applications</p>
              <h2 className="text-3xl font-extrabold text-emerald-600 mt-1">{applications.length}</h2>
            </div>
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div
            onClick={() => setViewMode("contact")}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:border-blue-300 transition-all"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Inquiries</p>
              <h2 className="text-3xl font-extrabold text-blue-600 mt-1">{contactSubmissions.length}</h2>
            </div>
            <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
              <Mail className="w-6 h-6" />
            </div>
          </div>

          <div
            onClick={() => setViewMode("list")}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:border-amber-300 transition-all"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Featured Openings</p>
              <h2 className="text-3xl font-extrabold text-amber-600 mt-1">
                {jobs.filter((j) => j.featured).length}
              </h2>
            </div>
            <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* VIEW 1: JOB LIST & CANDIDATE APPLICATIONS */}
        {viewMode === "list" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-[#1a3646]">Published Job Openings & Submissions</h2>
                <p className="text-xs text-slate-500 font-normal">
                  Manage active listings and inspect candidate applications.
                </p>
              </div>

              <button
                onClick={() => setViewMode("create")}
                className="px-4 py-2 bg-[#1a3646] hover:bg-[#112430] text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Plus className="w-4 h-4 text-[#fbb03b]" />
                <span>Add Position</span>
              </button>
            </div>

            {loadingData ? (
              <div className="py-12 text-center text-slate-400 font-medium space-y-2">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#1a3646]" />
                <p className="text-sm">Loading jobs and applications...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="py-12 text-center text-slate-500 font-medium space-y-3">
                <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-base font-bold text-slate-700">No job openings created yet.</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Click &quot;Add Position&quot; above to create your first job posting.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => {
                  const jobApps = getApplicationsForJob(job.id);
                  const isDetailsExpanded = expandedJobDetailsId === job.id;
                  const isAppsExpanded = expandedApplicationsJobId === job.id;

                  return (
                    <div
                      key={job.id}
                      className="border border-slate-200/90 rounded-2xl bg-white shadow-xs overflow-hidden transition-all"
                    >
                      {/* Job Header Row */}
                      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-[#1a3646]">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                                Featured
                              </span>
                            )}
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                job.status === "Published"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-slate-200 text-slate-700"
                              }`}
                            >
                              {job.status}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-normal">
                            <span><strong className="text-slate-700">Dept:</strong> {job.department}</span>
                            <span>•</span>
                            <span><strong className="text-slate-700">Type:</strong> {job.employmentType} ({job.workplaceType})</span>
                            <span>•</span>
                            <span><strong className="text-slate-700">Location:</strong> {job.location}</span>
                            <span>•</span>
                            <span><strong className="text-slate-700">Salary:</strong> {job.salary}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 flex-wrap shrink-0">
                          {/* Submissions Badge Button */}
                          <button
                            onClick={() =>
                              setExpandedApplicationsJobId(
                                isAppsExpanded ? null : job.id
                              )
                            }
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                              jobApps.length > 0
                                ? "bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300"
                                : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                            }`}
                          >
                            <Users className="w-3.5 h-3.5" />
                            <span>{jobApps.length} Applications</span>
                            {isAppsExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Full Data Toggle Button */}
                          <button
                            onClick={() =>
                              setExpandedJobDetailsId(
                                isDetailsExpanded ? null : job.id
                              )
                            }
                            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-all"
                          >
                            <span>Full Data</span>
                            {isDetailsExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Public Detail Link */}
                          <a
                            href={`/careers/${job.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                            title="View Public Page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>

                          {/* Delete Job */}
                          <button
                            onClick={() => handleDeleteJob(job.id)}
                            className="p-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                            title="Delete Job"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* ─── EXPANDABLE CANDIDATE APPLICATIONS DRAWER ──────── */}
                      {isAppsExpanded && (
                        <div className="p-5 bg-emerald-50/40 border-t border-slate-200 space-y-4 animate-in fade-in duration-200">
                          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2">
                            <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                              <Users className="w-4 h-4 text-emerald-700" />
                              Received Candidate Applications ({jobApps.length})
                            </h4>
                          </div>

                          {jobApps.length === 0 ? (
                            <p className="text-xs text-slate-500 italic py-2">
                              No candidates have submitted applications for this job position yet.
                            </p>
                          ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {jobApps.map((app) => (
                                <div
                                  key={app.id}
                                  className="p-4 rounded-xl bg-white border border-emerald-200 shadow-xs space-y-3"
                                >
                                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <span className="font-bold text-sm text-[#1a3646]">
                                      {app.fullName}
                                    </span>
                                    <span className="text-[11px] text-slate-400 font-normal">
                                      {new Date(app.createdAt).toLocaleDateString()} {new Date(app.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                  </div>

                                  <div className="space-y-1.5 text-xs text-slate-700 font-normal">
                                    <div className="flex items-center gap-2">
                                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                      <a href={`mailto:${app.email}`} className="text-slate-800 hover:underline truncate">
                                        {app.email}
                                      </a>
                                    </div>

                                    <div className="flex items-center gap-2">
                                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                      <a href={`tel:${app.phone}`} className="text-slate-800 hover:underline">
                                        {app.phone}
                                      </a>
                                    </div>

                                    <div className="flex items-center gap-2">
                                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                      <span>
                                        <strong>{app.college}</strong> ({app.yearOfStudy})
                                      </span>
                                    </div>

                                    {app.portfolioUrl && (
                                      <div className="flex items-center gap-2">
                                        <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                        <a
                                          href={app.portfolioUrl}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-blue-600 hover:underline truncate flex items-center gap-1 font-semibold"
                                        >
                                          <span>Portfolio Link</span>
                                          <ExternalLink className="w-3 h-3" />
                                        </a>
                                      </div>
                                    )}

                                    {/* College Club Details */}
                                    {app.inCollegeClub && app.clubName && (
                                      <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 font-medium">
                                        <span className="font-bold block text-[11px]">College Club / Organization:</span>
                                        <span>{app.clubName} — <strong className="text-amber-900">{app.clubPosition}</strong></span>
                                      </div>
                                    )}

                                    {/* Resume File & Drive Link */}
                                    <div className="space-y-1 pt-1">
                                      {app.resumeName && (
                                        <div className="flex items-center gap-2">
                                          <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                          <span className="bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-md border border-emerald-200">
                                            Resume File: {app.resumeName}
                                          </span>
                                        </div>
                                      )}

                                      {app.resumeLink && (
                                        <div className="flex items-center gap-2">
                                          <ExternalLink className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                          <a
                                            href={app.resumeLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600 hover:underline font-semibold flex items-center gap-1"
                                          >
                                            <span>Drive Resume Link</span>
                                            <ExternalLink className="w-3 h-3" />
                                          </a>
                                        </div>
                                      )}
                                    </div>

                                    {app.coverNote && (
                                      <div className="pt-2 border-t border-slate-100">
                                        <span className="text-[11px] font-bold text-slate-500 block">Candidate Note:</span>
                                        <p className="text-xs text-slate-600 italic bg-slate-50 p-2 rounded-lg mt-0.5">
                                          &quot;{app.coverNote}&quot;
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* ─── EXPANDABLE FULL FILLED JOB DATA DRAWER ────────── */}
                      {isDetailsExpanded && (
                        <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-6 text-xs text-slate-700 animate-in fade-in duration-200">
                          <h4 className="text-sm font-bold text-[#1a3646] border-b border-slate-200 pb-2">
                            Complete Job Details & Filled Specs
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                              <span className="font-bold text-slate-900 block text-xs">Section 1: Basic Info</span>
                              <p>Department: {job.department}</p>
                              <p>Team: {job.team || "N/A"}</p>
                              <p>Type: {job.employmentType} ({job.workplaceType})</p>
                              <p>Location: {job.location}</p>
                              <p>Openings: {job.openings}</p>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                              <span className="font-bold text-slate-900 block text-xs">Section 3: Eligibility</span>
                              <p>Qualification: {job.qualification}</p>
                              <p>Experience: {job.experience}</p>
                              <p>Languages: {job.languages}</p>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                              <span className="font-bold text-slate-900 block text-xs">Section 4 & 5: Compensation & Dates</span>
                              <p>Salary: {job.salary}</p>
                              <p>Benefits: {job.benefits || "N/A"}</p>
                              <p>Deadline: {job.deadline || "Open"}</p>
                              <p>Joining: {job.joiningDate || "Immediate"}</p>
                            </div>
                          </div>

                          <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200">
                            <div>
                              <span className="font-bold text-slate-900 block mb-1">Responsibilities:</span>
                              <p className="whitespace-pre-line text-slate-600">{job.responsibilities}</p>
                            </div>
                            <div>
                              <span className="font-bold text-slate-900 block mb-1">Required Skills:</span>
                              <p className="whitespace-pre-line text-slate-600">{job.requiredSkills}</p>
                            </div>
                            {job.preferredSkills && (
                              <div>
                                <span className="font-bold text-slate-900 block mb-1">Preferred Skills:</span>
                                <p className="whitespace-pre-line text-slate-600">{job.preferredSkills}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: 6-SECTION JOB CREATION FORM */}
        {viewMode === "create" && (
          <form onSubmit={handleSubmitJob} className="space-y-8">
            
            {/* SECTION 1: BASIC INFORMATION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Building2 className="w-5 h-5 text-[#fbb03b]" />
                <h3 className="text-base font-bold text-slate-900">Section 1: Basic Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Fullstack Engineer"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Department *
                  </label>
                  <input
                    type="text"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="e.g. Engineering & Technology"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Team / Wing
                  </label>
                  <input
                    type="text"
                    name="team"
                    value={formData.team}
                    onChange={handleInputChange}
                    placeholder="e.g. Product Innovation Wing"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Employment Type *
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Workplace Type *
                  </label>
                  <select
                    name="workplaceType"
                    value={formData.workplaceType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Bengaluru, India / Remote"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Openings
                  </label>
                  <input
                    type="number"
                    name="openings"
                    min="1"
                    value={formData.openings}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: JOB DESCRIPTION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileText className="w-5 h-5 text-[#fbb03b]" />
                <h3 className="text-base font-bold text-slate-900">Section 2: Job Description</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Short Description *
                  </label>
                  <textarea
                    name="shortDescription"
                    required
                    rows={2}
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    placeholder="Brief 1-2 sentence overview shown on candidate cards..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Detailed Description *
                  </label>
                  <textarea
                    name="detailedDescription"
                    required
                    rows={4}
                    value={formData.detailedDescription}
                    onChange={handleInputChange}
                    placeholder="Full explanation of the role, impact, and team context..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Responsibilities *
                  </label>
                  <textarea
                    name="responsibilities"
                    required
                    rows={3}
                    value={formData.responsibilities}
                    onChange={handleInputChange}
                    placeholder="List core duties (one per line or bullet)..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Required Skills *
                    </label>
                    <textarea
                      name="requiredSkills"
                      required
                      rows={3}
                      value={formData.requiredSkills}
                      onChange={handleInputChange}
                      placeholder="e.g. React, Next.js, Node.js, TypeScript..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Skills
                    </label>
                    <textarea
                      name="preferredSkills"
                      rows={3}
                      value={formData.preferredSkills}
                      onChange={handleInputChange}
                      placeholder="e.g. GraphQL, AWS, Docker..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: ELIGIBILITY */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="w-5 h-5 text-[#fbb03b]" />
                <h3 className="text-base font-bold text-slate-900">Section 3: Eligibility</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    placeholder="e.g. B.Tech / B.E. in CS or relevant experience"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g. 1-3 Years / Freshers Welcome"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Languages
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleInputChange}
                    placeholder="e.g. English, Hindi"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 4: COMPENSATION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <DollarSign className="w-5 h-5 text-[#fbb03b]" />
                <h3 className="text-base font-bold text-slate-900">Section 4: Compensation</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Salary / Stipend
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g. ₹6,00,000 - ₹9,00,000 LPA / Competitive"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Benefits
                  </label>
                  <input
                    type="text"
                    name="benefits"
                    value={formData.benefits}
                    onChange={handleInputChange}
                    placeholder="e.g. Health Insurance, Learning Budget, Flexible Hours"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 5: APPLICATION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Calendar className="w-5 h-5 text-[#fbb03b]" />
                <h3 className="text-base font-bold text-slate-900">Section 5: Application Requirements</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Joining Date
                  </label>
                  <input
                    type="text"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    placeholder="e.g. Immediate / Next Month"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-800">
                    <input
                      type="checkbox"
                      name="resumeRequired"
                      checked={formData.resumeRequired}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-[#1a3646]"
                    />
                    Resume Required
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-800">
                    <input
                      type="checkbox"
                      name="portfolioRequired"
                      checked={formData.portfolioRequired}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-[#1a3646]"
                    />
                    Portfolio Required
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Custom Questions
                  </label>
                  <input
                    type="text"
                    name="customQuestions"
                    value={formData.customQuestions}
                    onChange={handleInputChange}
                    placeholder="e.g. GitHub profile link, project highlights..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 6: PUBLISHING */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <ImageIcon className="w-5 h-5 text-[#fbb03b]" />
                <h3 className="text-base font-bold text-slate-900">Section 6: Publishing Controls</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Banner Image URL
                  </label>
                  <input
                    type="url"
                    name="bannerImage"
                    value={formData.bannerImage}
                    onChange={handleInputChange}
                    placeholder="https://ik.imagekit.io/..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Publishing Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:border-[#1a3646] outline-none"
                  >
                    <option value="Published">Published (Visible on Careers Page)</option>
                    <option value="Draft">Draft (Hidden)</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-slate-800">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-[#1a3646]"
                    />
                    Mark as Featured Job
                  </label>
                </div>
              </div>
            </div>

            {/* Form Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-sm transition-all"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 rounded-xl bg-[#1a3646] hover:bg-[#112430] text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Publishing Position...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-[#fbb03b]" />
                    <span>Publish Job Opening</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* VIEW 3: CONTACT SUBMISSIONS & INQUIRIES */}
        {viewMode === "contact" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-[#1a3646] flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#fbb03b]" />
                  Contact Form Submissions ({contactSubmissions.length})
                </h2>
                <p className="text-xs text-slate-500 font-normal">
                  View and manage incoming inquiries sent via the Contact Us form.
                </p>
              </div>
            </div>

            {loadingData ? (
              <div className="py-12 text-center text-slate-400 font-medium space-y-2">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#1a3646]" />
                <p className="text-sm">Loading contact inquiries...</p>
              </div>
            ) : contactSubmissions.length === 0 ? (
              <div className="py-12 text-center text-slate-500 font-medium space-y-3">
                <Mail className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-base font-bold text-slate-700">No contact inquiries received yet.</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Messages submitted through the /contact page will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:border-[#1a3646]/30 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                        <div>
                          <h3 className="font-bold text-base text-[#1a3646]">
                            {submission.name}
                          </h3>
                          <span className="text-[11px] text-slate-400 font-normal block mt-0.5">
                            {new Date(submission.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-[#fbb03b]/20 text-[#1a3646] text-xs font-bold shrink-0">
                          {submission.category}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-normal text-slate-700">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a href={`mailto:${submission.email}`} className="text-[#1a3646] font-medium hover:underline truncate">
                            {submission.email}
                          </a>
                        </div>

                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a href={`tel:${submission.phone}`} className="text-[#1a3646] font-medium hover:underline">
                            {submission.phone}
                          </a>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 leading-relaxed space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Message:</span>
                        <p className="whitespace-pre-line text-slate-800 font-normal">{submission.message}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2 justify-end">
                      <a
                        href={`mailto:${submission.email}?subject=Re: ${encodeURIComponent(submission.category)} inquiry on Student Forge`}
                        className="px-3.5 py-1.5 rounded-xl bg-[#1a3646] hover:bg-[#112430] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#fbb03b]" />
                        <span>Reply via Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
