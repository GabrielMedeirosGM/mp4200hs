import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import VideoScrubSection from "@/components/VideoScrubSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <VideoScrubSection />
        <FeaturesSection />
        <SpecsSection />
        <CTASection />
      </main>
    </>
  );
}
