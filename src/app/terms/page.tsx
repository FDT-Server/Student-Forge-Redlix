import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileCheck, Shield, Users, Briefcase, ShoppingBag, Scale, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Student Forge',
  description: 'Review the Terms of Service and user agreement governing your use of Student Forge platforms, student portals, and career programs.',
  openGraph: {
    title: 'Terms of Service | Student Forge',
    description: 'User Agreement and Terms of Service for Student Forge web applications, student platform, and services.',
    url: 'https://studentforge.in/terms',
    siteName: 'Student Forge',
    type: 'website',
  },
};

export default function TermsPage() {
  const lastUpdated = "July 26, 2026";

  const sections = [
    {
      id: "agreement",
      title: "1. Acceptance of Terms",
      icon: FileCheck,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Student," "Partner," or "You") and <strong className="text-[#1a3646]">Student Forge</strong> ("we," "our," or "us"), an organization recognized under the <strong className="text-[#1a3646]">MSME</strong> and <strong className="text-[#1a3646]">Ministry of Corporate Affairs (MCA)</strong> frameworks in India.
          </p>
          <p className="leading-relaxed mb-4">
            By accessing or using our websites (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#1a3646]">studentforge.in</code>), student portal (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#1a3646]">platform.studentforge.in</code>), store (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#1a3646]">store.studentforge.in</code>), or participating in our career initiatives, hackathons, and corporate programs, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <p className="leading-relaxed text-xs text-slate-500">
            If you do not agree to these Terms, you must immediately discontinue all use of our Platform and services.
          </p>
        </>
      ),
    },
    {
      id: "eligibility-account",
      title: "2. User Eligibility & Accounts",
      icon: Users,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            To register an account or participate in Student Forge programs, you must satisfy the following criteria:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5 mb-4">
            <li>Be at least 16 years of age or possess legal parental/guardian consent if under 18.</li>
            <li>Provide true, accurate, current, and complete personal and academic information during registration or job applications.</li>
            <li>Maintain the confidentiality of your account credentials and accept full responsibility for all activities that occur under your account.</li>
          </ul>
          <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-2xl text-xs text-amber-900 font-medium">
            ⚠️ <strong>Account Integrity:</strong> Creation of duplicate accounts, submitting fraudulent academic credentials, or impersonating another individual will result in immediate suspension and permanent platform ban.
          </div>
        </>
      ),
    },
    {
      id: "career-applications",
      title: "3. Job & Internship Applications",
      icon: Briefcase,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Student Forge provides career acceleration tools and connects candidates with hiring partners, recruiters, and corporate organizations:
          </p>
          <div className="space-y-3 text-slate-600 text-sm mb-4">
            <p>
              • <strong className="text-[#1a3646]">Applicant Responsibility:</strong> You warrant that all resumes, experience statements, portfolio links, and skill assessments submitted through the Platform are genuine and accurate.
            </p>
            <p>
              • <strong className="text-[#1a3646]">Platform Role:</strong> Student Forge acts as a facilitator connecting students with potential employers. While we actively vet listings, Student Forge does not guarantee employment or selection for any specific role.
            </p>
            <p>
              • <strong className="text-[#1a3646]">Hiring Decisions:</strong> Ultimate hiring decisions, interview scheduling, compensation terms, and employment contracts rest solely between the applicant and the respective hiring partner.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property Rights",
      icon: Shield,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            All content, graphics, logos, software, website designs, video materials, curriculum tracks, and trademarks displayed on the Platform are the exclusive property of Student Forge or its licensors.
          </p>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5 mb-4">
            <li>You are granted a limited, non-exclusive, non-transferable license to access platform resources for personal, non-commercial educational use.</li>
            <li>You may not copy, modify, distribute, sell, reverse-engineer, or create derivative works from any platform content without prior written permission from Student Forge.</li>
          </ul>
        </>
      ),
    },
    {
      id: "store-payments",
      title: "5. E-Commerce & Workshop Fees",
      icon: ShoppingBag,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            For paid events, workshops, certification programs, or merchandise purchased via <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#1a3646]">store.studentforge.in</code>:
          </p>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5 mb-4">
            <li><strong className="text-[#1a3646]">Pricing & Taxes:</strong> All prices are displayed in Indian Rupees (INR) and include applicable taxes unless specified otherwise.</li>
            <li><strong className="text-[#1a3646]">Payment Gateways:</strong> Payments are processed via secure third-party payment gateways. Student Forge is not responsible for failed transactions caused by banking network errors.</li>
            <li><strong className="text-[#1a3646]">Refunds & Cancellations:</strong> Refund requests for events or learning kits are governed by the specific cancellation terms communicated at the time of purchase.</li>
          </ul>
        </>
      ),
    },
    {
      id: "prohibited-activities",
      title: "6. Prohibited Code of Conduct",
      icon: AlertCircle,
      content: (
        <>
          <p className="leading-relaxed mb-4"> Users are strictly prohibited from engaging in any of the following activities on the Platform: </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-normal mb-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              ❌ Automated data scraping, bot access, or bulk harvesting of candidate/employer data.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              ❌ Uploading malicious code, viruses, trojans, or attempting unauthorized system access.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              ❌ Posting offensive, defamatory, harassing, or unlawful content in community forums or chat channels.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              ❌ Submitting fake job opportunities, spam messages, or unauthorized commercial promotions.
            </div>
          </div>
        </>
      ),
    },
    {
      id: "limitation-liability",
      title: "7. Disclaimer & Limitation of Liability",
      icon: Scale,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            The Platform and all associated services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
          </p>
          <p className="leading-relaxed mb-4">
            To the maximum extent permitted by applicable Indian law, Student Forge, its directors, officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits/data arising out of or related to your use of the Platform.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "8. Governing Law & Dispute Resolution",
      icon: Scale,
      content: (
        <>
          <p className="leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the Republic of India.
          </p>
          <p className="leading-relaxed mb-4">
            In the event of any legal dispute, controversy, or claim arising under these Terms or platform usage, the parties agree that exclusive jurisdiction shall rest with the competent courts located in <strong className="text-[#1a3646]">Hyderabad, Telangana, India</strong>.
          </p>
        </>
      ),
    },
    {
      id: "contact-terms",
      title: "9. Contact Information",
      icon: Mail,
      content: (
        <>
          <p className="leading-relaxed mb-6">
            For any queries or formal legal notices regarding these Terms of Service, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 border border-slate-200/80 p-6 rounded-3xl">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#1a3646] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#fbb03b]" /> Headquarters
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Student Forge HQ<br />
                HF2R+CCV, Devender Colony, Kompally, Hyderabad, 500100
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#1a3646] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#6fb9a5]" /> Regional Office
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Student Forge Regional Office<br />
                H.no 10-11-860/5, Bypass Road, Raparthi Nagar, Khammam, 507003
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
              <FileCheck className="w-3.5 h-3.5 text-[#1a3646]" /> Legal Agreement
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-4 tracking-tight leading-tight">
              Terms of <span className="text-white">Service</span>.
            </h1>

            <p className="text-base text-[#1a3646] opacity-85 max-w-xl leading-relaxed mb-4 font-normal">
              These terms govern your access to Student Forge platforms, candidate portals, mentorship cohorts, and services.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1a3646]/70 bg-white/40 px-3 py-1 rounded-lg">
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center p-6 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30">
            <FileCheck className="w-24 h-24 text-[#1a3646]" />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar - Quick Navigation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a3646]/60 mb-2 px-2">
              Terms Sections
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
                href="/privacy"
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#1a3646] bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60 transition-colors"
              >
                <span>Privacy Policy</span>
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
