import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CoursesSection from '@/components/CoursesSection';
import DegreeSection from '@/components/DegreeSection';
import AICoursesSection from '@/components/AICoursesSection';
import ForeignExposure from '@/components/ForeignExposure';
import CertificateSection from '@/components/CertificateSection';
import ComparisonSection from '@/components/ComparisonSection';
import WhyMurphism from '@/components/WhyMurphism';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import HomeClientWrapper from '@/components/HomeClientWrapper';



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
        <CoursesSection />
        <AICoursesSection />
        <DegreeSection />
        <ForeignExposure />
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
