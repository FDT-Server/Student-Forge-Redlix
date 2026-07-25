import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Student Forge Technologies Private Limited',
  description: 'Terms of Service and User Agreement governing Student Forge Technologies Private Limited websites, student platforms, e-commerce, and recruitment services in compliance with Indian laws.',
  openGraph: {
    title: 'Terms of Service | Student Forge Technologies Private Limited',
    description: 'Statutory User Agreement and Terms of Service for Student Forge Technologies Private Limited.',
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
      title: "1. Acceptance of Terms & Legal Entity",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            These Terms of Service ("Terms" or "Agreement") constitute a legally binding contract between you ("User," "Student," "Recruiter," "Institution," or "You") and <strong>Student Forge Technologies Private Limited</strong> ("Company," "we," "us," or "our"), a company incorporated under the Companies Act, 2013, with its registered office in Telangana, India.
          </p>
          <p className="leading-relaxed mb-4">
            This Agreement governs your access to and use of our primary website (<code>studentforge.in</code>), student platform (<code>platform.studentforge.in</code>), store portal (<code>store.studentforge.in</code>), job board, recruitment portals, and associated educational services (collectively, the "Platform").
          </p>
          <p className="leading-relaxed">
            By accessing, registering, browsing, or using any part of the Platform, you acknowledge that you have read, understood, and agreed to be legally bound by this Agreement, executed pursuant to the provisions of the <strong>Indian Contract Act, 1872</strong>, the <strong>Information Technology Act, 2000</strong>, and the <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>. If you do not agree to these Terms, you must refrain from using the Platform.
          </p>
        </>
      ),
    },
    {
      id: "eligibility-account",
      title: "2. Eligibility & Account Security",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Pursuant to Section 11 of the Indian Contract Act, 1872, you represent and warrant that you are competent to enter into a legally binding contract.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Age Eligibility:</strong> You must be at least 18 years of age, or if between 16 and 18 years of age, possess explicit consent from a parent or legal guardian who agrees to be bound by these Terms on your behalf.</li>
            <li><strong>Accuracy of Information:</strong> You agree to provide true, accurate, current, and complete credentials, academic histories, resumes, and contact details during account registration or program application.</li>
            <li><strong>Account Integrity & Confidentiality:</strong> You are solely responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account. You agree to notify Student Forge Technologies Private Limited immediately of any unauthorized account access.</li>
            <li><strong>Single Account Policy:</strong> Users are prohibited from creating multiple accounts, submitting falsified educational credentials, or impersonating another person. Violation of account integrity shall result in immediate termination without notice.</li>
          </ul>
        </>
      ),
    },
    {
      id: "career-applications",
      title: "3. Recruitment & Job Application Terms",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Student Forge Technologies Private Limited facilitates career acceleration, internship tracks, and employment opportunities connecting candidate students with participating corporate partners and recruiters:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Candidate Responsibility:</strong> Candidates warrant that all resumes, experience certificates, technical portfolios, GitHub repositories, and skill representations submitted through the Platform are accurate and genuine.</li>
            <li><strong>Intermediary Status:</strong> Pursuant to Section 79 of the Information Technology Act, 2000, Student Forge Technologies Private Limited acts as an intermediary providing access to a communication system over which information provided by third parties is made available. We do not independently verify every claim made by recruiting entities or applicants.</li>
            <li><strong>No Employment Guarantee:</strong> While the Company facilitates job matching and career preparation, we do not guarantee employment, selection, or specific compensation outcomes for any candidate. Selection and employment contracts remain exclusively between the applicant and the corporate employer.</li>
          </ul>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property Rights",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            All proprietary rights, title, and interest in and to the Platform, including but not limited to trade name "Student Forge," trademarks, service marks, platform design, software source code, databases, learning modules, curriculum content, graphics, and branding are the exclusive intellectual property of Student Forge Technologies Private Limited, protected under the <strong>Copyright Act, 1957</strong>, and the <strong>Trademarks Act, 1999</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Limited License:</strong> Subject to compliance with these Terms, Users are granted a limited, revocable, non-exclusive, non-transferable license to access and view platform content solely for personal, non-commercial educational purposes.</li>
            <li><strong>Prohibited Uses:</strong> Users shall not copy, reproduce, modify, distribute, sell, license, reverse-engineer, decompile, or extract source code from any portion of the Platform without prior written authorization from Student Forge Technologies Private Limited.</li>
          </ul>
        </>
      ),
    },
    {
      id: "ecommerce-payments",
      title: "5. E-Commerce & Service Payments",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Transactions conducted via <code>store.studentforge.in</code> or paid workshop enrollments are governed under the Consumer Protection Act, 2019, and the Consumer Protection (E-Commerce) Rules, 2020:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Pricing & Taxes:</strong> All prices displayed on our store or enrollment portals are listed in Indian Rupees (INR) and include applicable Goods and Services Tax (GST) unless explicitly stated otherwise.</li>
            <li><strong>Payment Aggregation:</strong> Payments are processed through secure, RBI-authorized payment gateways. Student Forge Technologies Private Limited is not liable for transaction failures caused by intermediary banking networks or authorized payment gateways.</li>
            <li><strong>Cancellations & Refunds:</strong> Refund requests for merchandise or fee-based training programs are subject to the specific refund and cancellation policy communicated during order checkout or program registration.</li>
          </ul>
        </>
      ),
    },
    {
      id: "code-of-conduct",
      title: "6. User Code of Conduct & Prohibited Actions",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            In compliance with Rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Users shall not host, display, upload, modify, publish, transmit, store, update, or share any information that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Belongs to another person and to which the User does not have any right.</li>
            <li>Is defamatory, obscene, pornographic, pedophilic, invasive of another's privacy, insulting, or harassing.</li>
            <li>Deceives or misleads the addressee about the origin of the message or knowingly communicates false or misleading information.</li>
            <li>Contains software viruses, trojan horses, or any computer code designed to interrupt, destroy, or limit the functionality of any computer resource.</li>
            <li>Threatens the unity, integrity, defense, security, or sovereignty of India, friendly relations with foreign States, or public order.</li>
            <li>Uses automated software, bots, scrapers, or crawlers to extract candidate data, employer records, or platform content.</li>
          </ul>
        </>
      ),
    },
    {
      id: "limitation-liability",
      title: "7. Disclaimer of Warranties & Limitation of Liability",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            The Platform and all services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, implied, or statutory.
          </p>
          <p className="leading-relaxed mb-4">
            To the maximum extent permitted by applicable Indian law, Student Forge Technologies Private Limited, its directors, officers, employees, agents, or affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, employment opportunities, or business interruption arising out of or related to your use of or inability to use the Platform.
          </p>
        </>
      ),
    },
    {
      id: "governing-law-jurisdiction",
      title: "8. Governing Law & Dispute Resolution",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            This Agreement and any dispute, controversy, or claim arising out of or in connection with it shall be governed by, interpreted, and construed in accordance with the laws of the Republic of India, without reference to its conflict-of-law principles.
          </p>
          <p className="leading-relaxed">
            The parties irrevocably agree that the courts located in <strong>Hyderabad, Telangana, India</strong>, shall have exclusive jurisdiction to settle any legal dispute or claim arising out of or in connection with these Terms or platform operations.
          </p>
        </>
      ),
    },
    {
      id: "contact-legal",
      title: "9. Contact & Statutory Notices",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            For formal legal notices, queries, or complaints regarding these Terms of Service, please contact Student Forge Technologies Private Limited at:
          </p>
          <p className="font-semibold text-[#1a3646] mb-1">Student Forge Technologies Private Limited</p>
          <p className="leading-relaxed mb-1">Email: info@studentforge.in</p>
          <p className="leading-relaxed mb-4">Telephone: +91 6304218064</p>

          <p className="font-semibold text-[#1a3646] mb-1">Headquarters (Hyderabad)</p>
          <p className="leading-relaxed mb-4">
            Student Forge Technologies Private Limited<br />
            HF2R+CCV, Devender Colony, Kompally, Hyderabad, Telangana - 500100, India.
          </p>

          <p className="font-semibold text-[#1a3646] mb-1">Regional Office (Khammam)</p>
          <p className="leading-relaxed">
            Student Forge Technologies Private Limited<br />
            H.no 10-11-860/5, Bypass Road, Raparthi Nagar, Khammam, Telangana - 507003, India.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="flex-1 bg-white font-sans">
      {/* Header Banner */}
      <section className="pt-20 pb-16 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="w-full max-w-[1200px] mx-auto text-left">
          <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
            Statutory Agreement
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-3 tracking-tight leading-tight">
            Terms of Service
          </h1>

          <p className="text-base text-[#1a3646] opacity-90 max-w-2xl leading-relaxed mb-3">
            Student Forge Technologies Private Limited — User Agreement & Governance Framework
          </p>

          <div className="text-xs font-medium text-[#1a3646]/80">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar - Quick Navigation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a3646]/60 mb-2 px-2">
              Document Index
            </h3>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-[#1a3646] transition-colors"
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
              <span className="text-[11px] text-slate-500 font-medium px-2">Related Statutory Policy</span>
              <Link
                href="/privacy"
                className="px-3 py-2 rounded-lg text-xs font-semibold text-[#1a3646] bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60 transition-colors"
              >
                Privacy Policy →
              </Link>
            </div>
          </aside>

          {/* Right Main Policy Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {sections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm scroll-mt-28"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-[#1a3646] mb-6 pb-3 border-b border-slate-200">
                  {sec.title}
                </h2>
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed">
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
