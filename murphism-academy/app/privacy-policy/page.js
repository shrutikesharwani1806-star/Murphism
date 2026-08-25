import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Privacy Policy | Murphism Academy",
  description: "Read the Privacy Policy of Murphism Academy. Learn how we collect, protect, and use your personal information.",
};

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-[#c9a227]">Policy</span>
            </h1>
            <p className="text-[#6b6459] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Last updated: August 25, 2026. Your privacy and trust are our priorities.
            </p>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mt-6" />
          </div>

          {/* Policy Content */}
          <div className="space-y-10 text-sm md:text-base leading-relaxed text-[#b8b099]">
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                1. Overview
              </h2>
              <p>
                Welcome to Murphism Academy. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this policy or our practices with regard to your personal info, please contact us at info@murphism.com.
              </p>
              <p>
                When you visit our website and use our services (such as submitting an inquiry or enrolling in a course), you trust us with your personal data. We take your privacy very seriously and seek to explain in this document what information we collect, how we use it, and what rights you have in relation to it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                2. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when enrolling, registering interest, or contacting us. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and physical mailing address.</li>
                <li><strong>Academic & Professional Details:</strong> Current education level, previous experience, interest area (e.g. Video Editing, Graphic Design, AI Content Creation).</li>
                <li><strong>Payment Information:</strong> When you purchase or pay course tuition, we collect details necessary to process payment securely (e.g. transaction logs, though credit card details are handled via secure third-party payment gateways).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                3. How We Use Your Information
              </h2>
              <p>
                We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate the course enrollment process and manage student accounts.</li>
                <li>To send administrative information, course updates, timetables, and related announcements.</li>
                <li>To respond to user inquiries and solve any potential issues you might have with our academy services.</li>
                <li>To deliver target advertising, student showcases, and newsletters (which you can opt-out of at any time).</li>
                <li>To evaluate student demographics, website usage patterns, and improve overall UX/UI using analytical tools (like Google Analytics).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                4. Data Sharing and Third-Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share data with third-party vendors, host providers, payment processors, or analytical platforms (like Google Analytics) who perform services on our behalf.</li>
                <li><strong>Affiliates:</strong> If necessary, we may share information with our educational affiliates (such as Renaissance University) to coordinate degree enrollment processes.</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, or judicial proceedings.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                5. Security of Your Information
              </h2>
              <p>
                We use organizational and technical security measures designed to protect your personal information from unauthorized access, loss, destruction, alteration, or disclosure. However, please remember that no transmission over the internet is completely secure. While we do our best to protect your information, transmission of personal details to and from our website is at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                6. Cookies and Tracking Technologies
              </h2>
              <p>
                We may use cookies and similar tracking technologies to access or store information. You can configure your browser to refuse all cookies or notify you when a cookie is sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                7. Your Rights
              </h2>
              <p>
                Depending on your location, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request to info@murphism.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                8. Contact Us
              </h2>
              <p>
                If you have questions or comments about this policy, you may email us at <strong>info@murphism.com</strong> or contact us via physical mail at our primary Indore studio location.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
