import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Pricing and Refund Policy | Murphism Academy",
  description: "Read about the pricing structure and refund policy of Murphism Academy. Note that all fees are non-refundable.",
};

export default function RefundPolicyPage() {
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
              Terms of Payment
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Pricing & <span className="text-[#c9a227]">Refund Policy</span>
            </h1>
            <p className="text-[#6b6459] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Last updated: August 25, 2026. Standard policies concerning course fees, enrollment charges, and refunds.
            </p>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mt-6" />
          </div>

          {/* Policy Content */}
          <div className="space-y-10 text-sm md:text-base leading-relaxed text-[#b8b099]">
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                1. General Course Pricing
              </h2>
              <p>
                Murphism Academy provides premium professional training in design, technology, animation, and AI. The pricing for our individual programs, combo structures, and degree courses is determined based on the specific curriculum, duration, and facilities provided:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Short-Term Courses (e.g. 6-Month Programs):</strong> Pricing is detailed during the student enrollment and counseling sessions. Installment options are available to ensure flexible payment schedules.</li>
                <li><strong>Promo Offers:</strong> Periodically, short-term courses are offered under fixed promotional rates (e.g., our special ₹6,999 promotional course rate). These promotional prices are only applicable within the designated timeframe.</li>
                <li><strong>B.Sc. Degree Program:</strong> Degree fees are set in accordance with the academic structure of our university partner, Renaissance University. Details on semesters, exam fees, and registration costs are detailed during university enrollment.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                2. Installment Plans & Payments
              </h2>
              <p>
                To support students, Murphism Academy offers custom monthly installment plans:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Installments must be paid on or before the designated due date each month.</li>
                <li>Delays of more than 7 days in installment payments may result in temporary lockout from online student systems and physical studio resources.</li>
                <li>Receipts are generated for all transactions. Please ensure you secure your official receipt copy from the accounts desk for your records.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                3. Strict No-Refund Policy
              </h2>
              <p>
                Please read this section carefully before completing your enrollment payment:
              </p>
              <div className="p-5 rounded-xl border border-red-950/40 bg-red-950/10 text-[#d48c8c] space-y-3">
                <p className="font-bold uppercase tracking-wider text-sm text-red-400">Important Notice:</p>
                <p>
                  <strong>All payments made to Murphism Academy (including registration deposits, full tuition payments, and monthly installments) are strictly non-refundable under any circumstances.</strong>
                </p>
                <p>
                  Once a student completes registration, a physical seat is reserved in our Indore batch, class schedules are locked, digital software resources are allocated, and mentors are assigned. Thus, we cannot offer refunds for cancellations, withdrawals, or change of mind.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                4. Course Postponement & Batches
              </h2>
              <p>
                We understand that emergencies occur. While refunds are not available, students may request to pause their learning or transfer to a future batch:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Postponement Request:</strong> If a student is unable to attend classes due to medical reasons, family emergencies, or employment changes, they must submit a written request to the academic coordinator.</li>
                <li><strong>Batch Shift:</strong> Upon approval, the academy will allow the student to join a subsequent batch of the same course within a 12-month period, subject to seat availability. Any fees paid will be credited toward the new batch.</li>
                <li><strong>Non-Transferable:</strong> Paused courses and credit balances cannot be transferred to another individual.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                5. Technical & Connectivity Issues
              </h2>
              <p>
                For online classes, it is the student's responsibility to maintain a stable internet connection and compatible computing device. Murphism Academy is not responsible for class disruptions due to local user hardware or connection issues, and such issues do not constitute grounds for refund or credit adjustments.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                6. Contact Billing Support
              </h2>
              <p>
                If you have questions regarding payment installments, invoices, or billing queries, please contact our accounts department directly at <strong>accounts@murphism.com</strong>.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
