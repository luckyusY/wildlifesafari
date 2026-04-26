import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const FEATURES = [
  { icon: "🦒", title: "Wildlife Experts", desc: "Certified guides with deep bush knowledge" },
  { icon: "🌿", title: "Eco-Friendly", desc: "Committed to conservation & community" },
  { icon: "✈️", title: "Custom Itineraries", desc: "Tailored trips to match your dream" },
  { icon: "🛡️", title: "Safe & Reliable", desc: "Licensed, insured, guest-focused" },
];

const ACHIEVEMENTS = [
  "Official member of Rwanda Tourism Board",
  "Certified eco-tourism operator",
  "Gorilla trekking permit specialists",
  "Cross-border multi-country specialists",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images column */}
          <FadeIn direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80"
                alt="Safari guide with tourists on a game drive"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:right-6 bg-forest-700 text-white rounded-2xl px-6 py-5 shadow-xl shadow-forest-900/40">
              <span className="block font-display text-4xl font-bold leading-none text-gold-300">10+</span>
              <span className="text-[12px] text-white/70 mt-1 block leading-snug">
                Years of<br />Experience
              </span>
            </div>

            {/* Small floating photo */}
            <div className="absolute top-6 -right-4 lg:right-6 w-28 h-28 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=300&q=80"
                alt="Elephant at sunset"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text column */}
          <div>
            <SectionHeader
              tag="About Us"
              title="Your Trusted Safari Partners in East Africa"
            />

            <FadeIn delay={0.2}>
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-7">
                Wildlife Friendly Safari Ltd is a premier eco-tourism company born from a deep
                love of Africa&apos;s wild places and a commitment to sharing them responsibly.
                For over a decade we have guided travellers from every corner of the globe
                through breathtaking landscapes, rare wildlife encounters, and authentic
                cultural experiences.
              </p>
            </FadeIn>

            {/* Achievement list */}
            <FadeIn delay={0.3}>
              <ul className="space-y-2.5 mb-8">
                {ACHIEVEMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-600">
                    <CheckCircle
                      size={17}
                      weight="fill"
                      className="text-forest-600 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Feature grid */}
            <FadeIn delay={0.35}>
              <div className="grid grid-cols-2 gap-4 mb-9">
                {FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-forest-50 hover:bg-forest-100 transition-colors"
                  >
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <span className="block text-[13.5px] font-semibold text-forest-900">{f.title}</span>
                      <span className="text-[12.5px] text-gray-400 mt-0.5 block">{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-semibold text-[14.5px] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest-900/25"
              >
                Our Full Story
                <ArrowRight size={15} weight="bold" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
