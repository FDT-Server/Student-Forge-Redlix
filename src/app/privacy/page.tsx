import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Bell, HardDrive, Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Student Forge',
  description: 'Learn how Student Forge collects, uses, protects, and manages your personal information across our platform, services, and career programs.',
  openGraph: {
    title: 'Privacy Policy | Student Forge',
    description: 'Comprehensive Privacy Policy governing Student Forge websites, student platform, and career acceleration programs.',
    url: 'https://studentforge.in/privacy',
    siteName: 'Student Forge',
    type: 'website',
  },
};

export default function PrivacyPage() {
  const lastUpdated = "July 26, 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Overview",
      icon: ShieldCheck,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Welcome to <strong className="text-[#1a3646]">Student Forge</strong> ("we," "our," or "us"). Student Forge is a national student innovation and career acceleration platform affiliated with the <strong className="text-[#1a3646]">Ministry of Micro, Small & Medium Enterprises (MSME)</strong> and the <strong className="text-[#1a3646]">Ministry of Corporate Affairs (MCA)</strong>, India.
          </p>
          <p className="leading-relaxed mb-4">
            This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of information obtained through our website (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#1a3646]">studentforge.in</code>), student portal (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#1a3646]">platform.studentforge.in</code>), merchandise store (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#1a3646]">store.studentforge.in</code>), career portal, workshops, and associated digital services (collectively, the "Platform").
          </p>
          <p className="leading-relaxed">
            By accessing or using our Platform, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Platform.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      icon: Eye,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            We collect several types of information from and about users of our Platform to deliver tailored educational, mentorship, and career acceleration services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <h4 className="font-semibold text-[#1a3646] text-sm mb-2 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#fbb03b]" /> Personal Identification Data
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full name, email address, mobile phone number, WhatsApp contact number, postal address, profile photograph, and government/institutional identity proof when requested for program verification.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <h4 className="font-semibold text-[#1a3646] text-sm mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#6fb9a5]" /> Academic & Professional Data
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                University/College name, degree, branch of study, graduation year, academic performance, uploaded resume/CV files, portfolio links, GitHub profiles, LinkedIn URLs, and job application responses.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <h4 className="font-semibold text-[#1a3646] text-sm mb-2 flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#6fb9a5]" /> Technical & Device Information
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                IP address, browser specification, device type, operating system details, access timestamps, referring URLs, clickstream data, and page view metrics collected via system logs.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <h4 className="font-semibold text-[#1a3646] text-sm mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#fbb03b]" /> Payment & Transaction Details
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Payment confirmation status, transaction reference numbers, and order histories for paid events or merchandise. We do not store raw credit card numbers or UPI PINs; transactions are processed securely via PCI-DSS compliant payment gateways.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      icon: FileText,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Student Forge processes your data for legitimate educational, operational, and career-enabling purposes, including:
          </p>
          <ul className="space-y-3 text-slate-600 text-sm list-disc pl-5 mb-4">
            <li><strong className="text-[#1a3646]">Career Matchmaking & Recruitment:</strong> Sharing applicant profiles and resumes with hiring partners, recruiters, and corporate partners when candidates apply for open roles or internship tracks.</li>
            <li><strong className="text-[#1a3646]">Program Administration:</strong> Enrolling students into workshops, bootcamps, hackathons, mentorship cohorts, and institutional learning programs.</li>
            <li><strong className="text-[#1a3646]">Communication & Notifications:</strong> Sending critical updates regarding application statuses, event schedules, platform announcements, transaction receipts, and customer support responses.</li>
            <li><strong className="text-[#1a3646]">Platform Optimization & Security:</strong> Monitoring website performance, troubleshooting technical errors, preventing fraudulent activities, and safeguarding user data integrity.</li>
            <li><strong className="text-[#1a3646]">Regulatory Compliance:</strong> Fulfilling reporting and compliance mandates under Indian statutory bodies (including MSME and MCA directives).</li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "4. Data Sharing & Disclosure",
      icon: UserCheck,
      content: (
        <>
          <div className="p-4 bg-emerald-50 border border-emerald-200/80 rounded-2xl mb-5 text-xs text-emerald-900 font-medium">
            🛡️ <strong>Zero Data Selling Guarantee:</strong> Student Forge strictly DOES NOT sell, rent, or trade your personal information to third-party advertisers or data brokers.
          </div>
          <p className="leading-relaxed mb-4">
            We may share your data only under the following limited circumstances:
          </p>
          <ul className="space-y-3 text-slate-600 text-sm list-disc pl-5 mb-4">
            <li><strong className="text-[#1a3646]">Verified Corporate & Hiring Partners:</strong> When you submit job or internship applications on our Platform, relevant applicant data (resumes, contact info, assessment scores) is shared with the corresponding recruiter/employer.</li>
            <li><strong className="text-[#1a3646]">Partner Universities & Colleges:</strong> Aggregated or individual student performance and participation metrics may be shared with affiliated institution administrators for official academic evaluation.</li>
            <li><strong className="text-[#1a3646]">Third-Party Infrastructure Providers:</strong> Trusted vendors who provide database hosting, email delivery, SMS gateways, and analytics services under strict confidentiality and non-disclosure agreements.</li>
            <li><strong className="text-[#1a3646]">Legal & Statutory Mandates:</strong> Disclosure to law enforcement or regulatory bodies when required by applicable laws, court orders, or government regulations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies-tracking",
      title: "5. Cookies & Tracking Technologies",
      icon: Bell,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Our Platform uses cookies, local storage objects, and similar tracking technologies to enhance user navigation and maintain authentication state across sessions.
          </p>
          <div className="space-y-3 text-slate-600 text-sm mb-4">
            <p>
              • <strong className="text-[#1a3646]">Essential Cookies:</strong> Required for secure login, navigation between platform pages, and session preservation.
            </p>
            <p>
              • <strong className="text-[#1a3646]">Analytics Cookies:</strong> Help us measure visitor interaction, identify popular feature tracks, and optimize overall site loading speeds.
            </p>
          </div>
          <p className="leading-relaxed text-xs text-slate-500">
            You can configure your browser settings to refuse cookies or alert you when cookies are being sent. However, disabling essential cookies may impact certain interactive features on our Platform.
          </p>
        </>
      ),
    },
    {
      id: "data-security",
      title: "6. Data Security & Storage",
      icon: Lock,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            We employ robust physical, administrative, and technological security controls to safeguard your data from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5 mb-4">
            <li>End-to-end Transport Layer Security (TLS/SSL encryption) for all data transmitted via the Platform.</li>
            <li>Restricted database access limited strictly to authorized Student Forge personnel and system processes.</li>
            <li>Routine security reviews, automated vulnerability scans, and secure backup routines.</li>
          </ul>
          <p className="leading-relaxed text-xs text-slate-500">
            While we take all industry-standard precautions, no method of electronic storage or internet transmission can guarantee absolute security. Users are encouraged to maintain unique passwords and safeguard their account login credentials.
          </p>
        </>
      ),
    },
    {
      id: "user-rights",
      title: "7. Your Rights & Choices",
      icon: ShieldCheck,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Subject to applicable Indian laws, users of Student Forge possess the following rights regarding their personal data:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium mb-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              ✏️ <strong>Access & Rectification:</strong> Request a copy of your personal data or request corrections to inaccurate details.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              🗑️ <strong>Data Erasure:</strong> Request deletion of your candidate profile, application records, or account.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              🔕 <strong>Opt-Out of Communications:</strong> Unsubscribe from marketing or promotional communications at any time via footer links or email preferences.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              🛡️ <strong>Withdrawal of Consent:</strong> Revoke consent for data processing where processing is based on prior consent.
            </div>
          </div>
          <p className="leading-relaxed text-xs text-slate-500">
            To exercise any of these rights, please contact our privacy desk at <a href="mailto:info@studentforge.in" className="text-[#1a3646] font-semibold underline">info@studentforge.in</a>. Requests are typically processed within 7 business days.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "8. Contact & Grievance Redressal",
      icon: Mail,
      content: (
        <>
          <p className="leading-relaxed mb-6">
            If you have questions, concerns, or grievances regarding this Privacy Policy or our data handling practices, you may reach out to our team or designated Grievance Officer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 border border-slate-200/80 p-6 rounded-3xl">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#1a3646] text-sm uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#fbb03b]" /> Headquarters (Hyderabad)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Student Forge HQ<br />
                HF2R+CCV, Devender Colony,<br />
                Kompally, Hyderabad, Telangana 500100
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#1a3646] text-sm uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#6fb9a5]" /> Regional Office (Khammam)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Student Forge Regional Office<br />
                H.no 10-11-860/5, Bypass Road,<br />
                Raparthi Nagar, Khammam, Telangana 507003
              </p>
            </div>
            <div className="md:col-span-2 pt-4 border-t border-slate-200 flex flex-wrap gap-6 items-center text-xs font-semibold text-[#1a3646]">
              <a href="mailto:info@studentforge.in" className="flex items-center gap-2 hover:text-[#fbb03b] transition-colors">
                <Mail className="w-4 h-4 text-[#6fb9a5]" /> info@studentforge.in
              </a>
              <a href="tel:+916304218064" className="flex items-center gap-2 hover:text-[#fbb03b] transition-colors">
                <Phone className="w-4 h-4 text-[#fbb03b]" /> +91 6304218064
              </a>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="flex-1 bg-white font-sans">
      {/* Hero Banner Header */}
      <section className="relative pt-20 pb-16 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-left">
            <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1a3646]" /> Legal & Compliance
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-4 tracking-tight leading-tight">
              Privacy <span className="text-white">Policy</span>.
            </h1>

            <p className="text-base text-[#1a3646] opacity-85 max-w-xl leading-relaxed mb-4 font-normal">
              Your trust is our foundation. Learn how Student Forge protects, manages, and respects your personal data across all our platforms.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1a3646]/70 bg-white/40 px-3 py-1 rounded-lg">
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Right Icon Illustration */}
          <div className="hidden md:flex items-center justify-center p-6 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30">
            <ShieldCheck className="w-24 h-24 text-[#1a3646]" />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar - Quick Navigation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a3646]/60 mb-2 px-2">
              Policy Sections
            </h3>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-[#1a3646] transition-colors"
                >
                  <sec.icon className="w-4 h-4 text-[#fbb03b] shrink-0" />
                  <span>{sec.title}</span>
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <span className="text-[11px] text-slate-500 font-medium px-2">Related Document</span>
              <Link
                href="/terms"
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#1a3646] bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60 transition-colors"
              >
                <span>Terms of Service</span>
                <span>→</span>
              </Link>
            </div>
          </aside>

          {/* Right Main Policy Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {sections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-[#fbb03b]/15 flex items-center justify-center text-[#1a3646]">
                    <sec.icon className="w-5 h-5 text-[#1a3646]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#1a3646] tracking-tight">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {sec.content}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
