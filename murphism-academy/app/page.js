import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import HomeClientWrapper from '@/components/HomeClientWrapper';
import dynamic from 'next/dynamic';

const ForeignExposure = dynamic(() => import('@/components/ForeignExposure'), { ssr: true });
const CoursesSection = dynamic(() => import('@/components/CoursesSection'), { ssr: true });
const AICoursesSection = dynamic(() => import('@/components/AICoursesSection'), { ssr: true });
const DegreeSection = dynamic(() => import('@/components/DegreeSection'), { ssr: true });
const CertificateSection = dynamic(() => import('@/components/CertificateSection'), { ssr: true });
const ComparisonSection = dynamic(() => import('@/components/ComparisonSection'), { ssr: true });
const WhyMurphism = dynamic(() => import('@/components/WhyMurphism'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/FAQSection'), { ssr: true });
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });




export const metadata = {
  title: 'MURPHISM Academy | We Morph You Into Industry-Ready Creators',
  description:
    'Join Murphism — the premium creative & tech academy. Graphic Design, Web Dev, Video Editing, 3D Modelling, AI Courses & Diploma in Animations. 100% Job Assistance.',
  keywords: ['Murphism Academy', 'Graphic Design Course', 'Website Development', 'Video Editing', '3D Modelling', 'Diploma Animation', 'AI Courses'],
  openGraph: {
    title: 'MURPHISM Academy | Industry-Ready Creators & Innovators',
    description: 'We Morph You to Become Industry Ready Creators/Innovators. 100% Job Assistance.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#050505',
};

export default function Home() {
  return (
    <main>
      <HomeClientWrapper>
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ForeignExposure />
        <CoursesSection />
        <AICoursesSection />
        <DegreeSection />
        <CertificateSection />
        <ComparisonSection />
        <WhyMurphism />
        <FAQSection />
        <CTASection />
        <Footer />
      </HomeClientWrapper>
    </main>
  );
}
