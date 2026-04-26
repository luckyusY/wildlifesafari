import Image from "next/image";
import { Globe, Shield, Users, Headset, Leaf, Trophy } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const REASONS = [
  {
    Icon: Globe,
    title: "Deep Local Knowledge",
    desc: "Born and raised across East Africa, our guides reveal trails, behaviours, and hidden gems that most travellers never encounter.",
  },
  {
    Icon: Shield,
    title: "Safe & Fully Insured",
    desc: "Every vehicle is maintained to international safety standards. All trips are fully insured for complete peace of mind.",
  },
  {
    Icon: Users,
    title: "Community-First Tourism",
    desc: "We partner with local communities so that tourism genuinely benefits the people and places you visit.",
  },
  {
    Icon: Headset,
    title: "24/7 Guest Support",
    desc: "From your first enquiry to your return home, our team is always reachable and ready to assist.",
  },
  {
    Icon: Leaf,
    title: "Eco-Responsible Travel",
    desc: "We minimise our footprint, support conservation programmes, and follow strict wildlife-disturbance guidelines.",
  },
  {
    Icon: Trophy,
    title: "5-Star Rated Experiences",
    desc: "Consistently rated 5 stars by guests from over 30 countries — quality and satisfaction are non-negotiable.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <FadeIn direction="left" className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80"
                alt="Elephant herd on the savanna at sunset"
                fill
                className="object-cover"
              />
              {/* Inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/30 to-transparent" />
            </div>

            {/* Floating review card */}
            <div className="absolute -bottom-5 left-4 lg:-left-8 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 max-w-[260px] border border-gray-100">
              <div className="text-3xl">⭐</div>
              <div>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-[12px] text-gray-500 leading-snug">
                  <strong className="text-gray-800">500+ travellers</strong><br />from 30+ countries
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              tag="Why Choose Us"
              title="We Go Beyond the Ordinary Safari"
              subtitle="Our commitment to excellence, genuine local expertise, and deep care for guests and environment sets us apart."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={0.08 * i}>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-forest-50 transition-colors group cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-200 transition-colors">
                      <r.Icon size={20} weight="duotone" className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-forest-900 mb-1">{r.title}</h4>
                      <p className="text-[13px] text-gray-400 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
