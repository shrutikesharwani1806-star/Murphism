import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Terms and Conditions | Murphism Academy",
  description: "Read the Terms and Conditions of Murphism Academy. Learn about student guidelines, admission rules, and payments.",
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-[#d4cebe] font-sans selection:bg-[#c9a227]/30 selection:text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow layers */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(201, 162, 39, 0.05) 0%, transparent 70%)' }} 
        />
        <div 
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, transparent 70%)' }} 
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              Legal Information
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Terms & <span className="text-[#c9a227]">Conditions</span>
            </h1>
            <p className="text-[#6b6459] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Last updated: August 25, 2026. Please read these terms carefully before enrolling.
            </p>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mt-6" />
          </div>

          {/* Terms Content */}
          <div className="space-y-10 text-sm md:text-base leading-relaxed text-[#b8b099]">
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                1. Agreement to Terms
              </h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Murphism Academy (“we,” “us” or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website, or studio location related, linked, or otherwise connected thereto.
              </p>
              <p>
                By accessing the site and/or enrolling in our courses, you agree that you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these terms, you are prohibited from using the site and our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                2. Admission & Eligibility
              </h2>
              <p>
                Admissions to the courses offered by Murphism Academy are subject to the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Age Requirement:</strong> Students must be at least 16 years of age (or have explicit parental/guardian consent if younger).</li>
                <li><strong>Academic Requirements:</strong> Admission to short-term/diploma courses requires basic computer literacy. Admission to the B.Sc. Animation & Multimedia degree program is subject to secondary board results (10+2 eligibility) and university guidelines.</li>
                <li><strong>Accuracy of Information:</strong> You agree to provide true, accurate, and current registration and profile details. Providing false information may lead to termination of your enrollment without a refund.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                3. Code of Conduct
              </h2>
              <p>
                We expect a professional standard of behavior from all our students, both in online lectures and offline studio spaces:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students must respect mentors, fellow peers, and academy property. Abuse, harassment, or disruption will lead to immediate expulsion.</li>
                <li>Sharing course login credentials, class recordings, software licenses, or course resources with third parties is strictly prohibited.</li>
                <li>Academic integrity is mandatory. Plagiarism, representing other creators' work as your own in project deliverables, or copying code/assets without authorization is grounds for dismissal.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                4. Fees, Payments & Refunds
              </h2>
              <p>
                All fees for courses, combos, and degrees must be paid in accordance with the payment schedules provided at the time of admission:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment Schedules:</strong> Fees can be paid in full or installment plans as agreed during counseling. Delay in paying installment fees can lead to temporary suspension from classes.</li>
                <li><strong>Refund Policy:</strong> All fees paid to Murphism Academy are non-refundable, except where explicitly stated under our separate "Pricing and Refund Policy."</li>
                <li><strong>Taxes:</strong> All listed fees may be subject to government taxes (e.g. GST) as applicable.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                5. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise indicated, the Site, course syllabi, curriculum structure, presentations, video tutorials, exercises, source code, and design templates are our proprietary property and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                Students retain the copyright to portfolios, designs, animations, and websites they create individually during their study, but grant Murphism Academy a royalty-free license to exhibit their work for promotional, website showcase, and educational purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                6. Placement Assistance & Disclaimer
              </h2>
              <p>
                While Murphism Academy offers 100% placement and job assistance (including portfolio review, mock interviews, resume checking, and studio partner networking):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not guarantee a job offer to any student. Securing a job depends entirely on student performance, attendance, project quality, and interview dynamics.</li>
                <li>Our mentorship and resources are designed to prepare you for the industry, but individual success is the outcome of your own diligence and skill application.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                7. Limitation of Liability
              </h2>
              <p>
                In no event will Murphism Academy or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site or participation in our courses.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                8. Governing Law
              </h2>
              <p>
                These Terms and Conditions and your use of our site and services are governed by and construed in accordance with the laws of India. Any disputes arising in relation to these terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Indore, Madhya Pradesh, India</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms. It is your responsibility to periodically review these terms.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
