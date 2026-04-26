import Hero from "@/components/home/Hero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUs from "@/components/home/WhyUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import Destinations from "@/components/home/Destinations";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <GalleryPreview />
      <Destinations />
      <Testimonials />
      <CTABanner />
    </>
  );
}
