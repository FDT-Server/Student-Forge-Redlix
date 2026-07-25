import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Student Forge Technologies Private Limited',
  description: 'Privacy Policy for Student Forge Technologies Private Limited governing the collection, processing, and protection of personal data in compliance with Indian laws including the DPDP Act 2023 and IT Act 2000.',
  openGraph: {
    title: 'Privacy Policy | Student Forge Technologies Private Limited',
    description: 'Privacy Policy governing Student Forge Technologies Private Limited platforms, websites, and services.',
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
      title: "1. Introduction & Legal Framework",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            This Privacy Policy ("Policy") governs the collection, storage, processing, transfer, and protection of personal data by <strong>Student Forge Technologies Private Limited</strong> ("Company," "we," "us," or "our"), a company incorporated under the Companies Act, 2013, with its registered office in Telangana, India.
          </p>
          <p className="leading-relaxed mb-4">
            This Policy applies to all individuals ("Data Principals," "Users," "Students," "Recruiters," or "You") who access or use our primary website (<code>studentforge.in</code>), student portal (<code>platform.studentforge.in</code>), store portal (<code>store.studentforge.in</code>), recruitment portals, mobile applications, and offline educational or career cohorts (collectively, the "Platform").
          </p>
          <p className="leading-relaxed">
            We are committed to processing your personal data in full compliance with the statutory legal requirements of India, including the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act 2023)</strong>, the <strong>Information Technology Act, 2000 (IT Act 2000)</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules)</strong>, and the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "2. Categories of Data Collected",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            In accordance with the principle of data minimization, Student Forge Technologies Private Limited collects only such personal data as is necessary to fulfill the specific purposes outlined in this Policy:
          </p>
          <p className="font-semibold text-[#1a3646] mb-2">A. Personal Identification & Contact Data</p>
          <p className="leading-relaxed mb-4">
            Full name, primary email address, mobile phone number, WhatsApp contact number, residential address, emergency contact details, date of birth, gender, and government-issued identity documents (such as Aadhaar or PAN) where mandatory for identity verification, internship onboarding, or compliance reporting.
          </p>
          <p className="font-semibold text-[#1a3646] mb-2">B. Educational & Professional Information</p>
          <p className="leading-relaxed mb-4">
            Academic institute/college name, degree, field of specialization, year of graduation, roll number/registration number, cumulative grade point average (CGPA/marks), uploaded curriculum vitae (CV)/resumes, work history, skill certificates, project portfolios, GitHub links, and LinkedIn profiles.
          </p>
          <p className="font-semibold text-[#1a3646] mb-2">C. Technical, Log & Device Data</p>
          <p className="leading-relaxed mb-4">
            Internet Protocol (IP) address, operating system, browser type and version, device identifier, access timestamps, page views, clickstream navigation, duration of visits, and referring URL parameters automatically captured by our web servers.
          </p>
          <p className="font-semibold text-[#1a3646] mb-2">D. Financial & Transactional Data</p>
          <p className="leading-relaxed">
            Order reference IDs, payment status confirmations, invoice details, and billing addresses related to purchases made on our Platform. All financial card credentials, UPI details, and banking information are processed directly by RBI-regulated payment aggregators; Student Forge Technologies Private Limited does not store sensitive cardholder data or UPI PINs.
          </p>
        </>
      ),
    },
    {
      id: "lawful-basis-usage",
      title: "3. Lawful Purpose & Usage of Personal Data",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Under Section 4 and Section 7 of the Digital Personal Data Protection Act, 2023, personal data is processed solely for lawful purposes based on your explicit consent or for legitimate uses as prescribed by law. These purposes include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Career Matchmaking & Recruitment Services:</strong> Sharing job candidate resumes, technical profiles, and assessment results with verified corporate hiring partners, recruiters, and prospective employers when candidates apply for listed positions.</li>
            <li><strong>Program Delivery & Academic Management:</strong> Managing student enrollments in mentorship tracks, technical bootcamps, workshops, hackathons, and institutional programs.</li>
            <li><strong>Transactional & Operational Communications:</strong> Issuing enrollment confirmations, application progress updates, administrative alerts, fee receipts, and responding to customer support inquiries.</li>
            <li><strong>Platform Safety & Cyber Security:</strong> Authenticating user accounts, preventing identity fraud, detecting cyber security incidents, and ensuring compliance with our Terms of Service.</li>
            <li><strong>Statutory & Regulatory Obligations:</strong> Complying with directions, notices, or filing requirements mandated by the Ministry of Corporate Affairs (MCA), Ministry of Micro, Small & Medium Enterprises (MSME), law enforcement agencies, or Indian courts of law.</li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "4. Data Sharing, Disclosures & Non-Sale Commitment",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Student Forge Technologies Private Limited strictly operates under a zero-sale policy: we do not sell, rent, lease, or trade personal data to third-party advertising networks, data brokers, or marketing agencies.
          </p>
          <p className="leading-relaxed mb-4">
            Personal data may be shared only under the following strictly defined conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Authorized Employers & Hiring Partners:</strong> When you voluntarily submit job or internship applications, your application materials are shared with the specified recruiting entity for evaluation.</li>
            <li><strong>Affiliated Universities & Partner Institutions:</strong> Performance summaries, attendance records, and verified project outcomes may be shared with your parent institution for official academic credit or placement tracking.</li>
            <li><strong>Data Processors & Service Providers:</strong> Encrypted data may be stored or processed by cloud infrastructure providers, SMS/email gateway services, and database management vendors who operate under non-disclosure obligations and strict data protection agreements.</li>
            <li><strong>Legal & Regulatory Mandates:</strong> Disclosure of personal data to government authorities, tax departments, statutory officers, or law enforcement agencies when compelled by valid legal process, judicial order, or Indian statutory mandate.</li>
          </ul>
        </>
      ),
    },
    {
      id: "data-protection-security",
      title: "5. Reasonable Security Practices & Data Storage",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            In compliance with Rule 8 of the IT (SPDI) Rules, 2011, and Section 8 of the DPDP Act, 2023, Student Forge Technologies Private Limited implements reasonable security practices and procedures to protect personal data against loss, misuse, unauthorized access, disclosure, alteration, or destruction.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Data in transit is encrypted using standard Transport Layer Security (TLS 1.2/1.3) protocols.</li>
            <li>Database systems are hosted in secure data centers operating with physical access controls, firewall protection, and regular vulnerability assessments.</li>
            <li>Access to personal data is restricted on a strict need-to-know basis to authorized employees and contractors bound by statutory confidentiality duties.</li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Personal data is retained only for as long as necessary to fulfill the specified purpose for which it was collected or to satisfy statutory retention obligations under Indian revenue, corporate, and employment laws.
          </p>
        </>
      ),
    },
    {
      id: "data-principal-rights",
      title: "6. Rights of Data Principals",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Under Chapter III of the Digital Personal Data Protection Act, 2023, Users (Data Principals) possess statutory rights regarding their personal data processed by Student Forge Technologies Private Limited:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Right to Access Information:</strong> The right to obtain a summary of personal data being processed and the identities of data fiduciaries with whom data has been shared.</li>
            <li><strong>Right to Correction & Erasure:</strong> The right to request correction of inaccurate or misleading data, completion of incomplete data, or erasure of personal data that is no longer necessary for the specified purpose.</li>
            <li><strong>Right to Withdraw Consent:</strong> The right to withdraw consent previously given for data processing at any time. Withdrawal of consent does not affect the legality of processing conducted prior to such withdrawal.</li>
            <li><strong>Right of Grievance Redressal:</strong> The right to have grievances addressed promptly by our designated Grievance Officer.</li>
            <li><strong>Right to Nominate:</strong> The right to nominate another individual to exercise data principal rights in the event of death or incapacity.</li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies-analytics",
      title: "7. Cookies & Digital Tracking Technologies",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Our Platform uses essential session cookies and performance analytics cookies to enable core site functionalities, preserve login states, and analyze web traffic patterns.
          </p>
          <p className="leading-relaxed">
            Users may manage or disable cookies through browser preference settings. Please note that disabling essential cookies may impact authentication and functional performance on certain portals of Student Forge Technologies Private Limited.
          </p>
        </>
      ),
    },
    {
      id: "children-data",
      title: "8. Processing of Personal Data of Children",
      content: (
        <>
          <p className="leading-relaxed">
            Pursuant to Section 9 of the DPDP Act, 2023, Student Forge Technologies Private Limited does not knowingly collect or process personal data of minors under 18 years of age without verifiable parental or lawful guardian consent. If we discover that personal data of an unverified minor has been collected without lawful consent, we will take immediate steps to delete such data from our databases.
          </p>
        </>
      ),
    },
    {
      id: "grievance-contact",
      title: "9. Grievance Officer & Contact Information",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            In accordance with Rule 5(9) of the IT (SPDI) Rules, 2011, and Rule 3(2) of the IT (Intermediary Guidelines) Rules, 2021, and the DPDP Act, 2023, the contact details of the Grievance Officer for Student Forge Technologies Private Limited are provided below:
          </p>
          <p className="font-semibold text-[#1a3646] mb-1">Grievance Officer</p>
          <p className="leading-relaxed mb-1">Student Forge Technologies Private Limited</p>
          <p className="leading-relaxed mb-1">Email: info@studentforge.in</p>
          <p className="leading-relaxed mb-1">Telephone: +91 6304218064</p>
          <p className="leading-relaxed mb-4">Response Time: Within 15 calendar days of receipt of formal grievance.</p>

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
            Statutory Document
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-3 tracking-tight leading-tight">
            Privacy Policy
          </h1>

          <p className="text-base text-[#1a3646] opacity-90 max-w-2xl leading-relaxed mb-3">
            Student Forge Technologies Private Limited — Privacy Framework & Data Protection Terms
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
              <span className="text-[11px] text-slate-500 font-medium px-2">Related Statutory Agreement</span>
              <Link
                href="/terms"
                className="px-3 py-2 rounded-lg text-xs font-semibold text-[#1a3646] bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60 transition-colors"
              >
                Terms of Service →
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
