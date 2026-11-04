'use client';
import dynamic from 'next/dynamic';

// Minimal shimmer placeholder — prevents layout shift while chunks load
function SectionSkeleton({ h = '320px' }) {
  return (
    <div
      style={{
        height: h,
        background: 'linear-gradient(90deg, #0a0907 25%, #111008 50%, #0a0907 75%)',
        backgroundSize: '200% 100%',
        animation: 'skeletonShimmer 1.6s ease infinite',
      }}
    />
  );
}

// All below-fold sections — lazy loaded, client-side only
const PortfolioVideoSection      = dynamic(() => import('@/components/PortfolioVideoSection'),      { ssr: false, loading: () => <SectionSkeleton /> });
const ForeignExposure            = dynamic(() => import('@/components/ForeignExposure'),            { ssr: false, loading: () => <SectionSkeleton /> });
const CoursesSection             = dynamic(() => import('@/components/CoursesSection'),             { ssr: false, loading: () => <SectionSkeleton /> });
const StudentTestimonialsSection = dynamic(() => import('@/components/StudentTestimonialsSection'), { ssr: false, loading: () => <SectionSkeleton /> });
const AICoursesSection           = dynamic(() => import('@/components/AICoursesSection'),           { ssr: false, loading: () => <SectionSkeleton /> });
const DegreeSection              = dynamic(() => import('@/components/DegreeSection'),              { ssr: false, loading: () => <SectionSkeleton /> });
const CertificateSection         = dynamic(() => import('@/components/CertificateSection'),         { ssr: false, loading: () => <SectionSkeleton /> });
const ComparisonSection          = dynamic(() => import('@/components/ComparisonSection'),          { ssr: false, loading: () => <SectionSkeleton /> });
const WhyMurphism                = dynamic(() => import('@/components/WhyMurphism'),                { ssr: false, loading: () => <SectionSkeleton /> });
const FAQSection                 = dynamic(() => import('@/components/FAQSection'),                 { ssr: false, loading: () => <SectionSkeleton /> });
const CTASection                 = dynamic(() => import('@/components/CTASection'),                 { ssr: false, loading: () => <SectionSkeleton /> });
const Footer                     = dynamic(() => import('@/components/Footer'),                     { ssr: false, loading: () => <SectionSkeleton h="120px" /> });

export default function BelowFoldSections() {
  return (
    <>
      <style>{`
        @keyframes skeletonShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <PortfolioVideoSection />
      <ForeignExposure />
      <CoursesSection />
      <StudentTestimonialsSection />
      <AICoursesSection />
      <DegreeSection />
      <CertificateSection />
      <ComparisonSection />
      <WhyMurphism />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
