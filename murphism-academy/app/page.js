import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import HomeClientWrapper from '@/components/HomeClientWrapper';
import BelowFoldSections from '@/components/BelowFoldSections';

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
      <h1 className="sr-only">Animation &amp; Multimedia Institute in Indore</h1>
      <HomeClientWrapper>
        {/* Above fold — statically imported, renders on first paint */}
        <Navbar />
        <HeroSection />
        <StatsSection />

        {/* Below fold — client-side lazy loaded in BelowFoldSections */}
        <BelowFoldSections />
      </HomeClientWrapper>
    </main>
  );
}
