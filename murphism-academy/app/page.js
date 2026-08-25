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
  title: "Animation & Video Editing Institute in Indore | Murphism",
  description:
    "Learn Video Editing, Graphic Design, AI Content Creation, VFX, 3D Animation and B.Sc. Animation & Multimedia at Murphism in Indore.",
  keywords: ['Murphism Academy', 'Graphic Design Course', 'Website Development', 'Video Editing', '3D Modelling', 'Diploma Animation', 'AI Courses'],
  openGraph: {
    title: "Animation & Video Editing Institute in Indore | Murphism",
    description:
      "Learn Video Editing, Graphic Design, AI Content Creation, VFX, 3D Animation and B.Sc. Animation & Multimedia at Murphism in Indore.",
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#050505',
};

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Animation & Multimedia Institute in Indore</h1>
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
