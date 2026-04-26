import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Globe, Leaf, Trophy, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/home/CTABanner";
import { STATS, TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Wildlife Friendly Safari Ltd — our story, mission, values, and the passionate team behind East Africa's premier safari experiences.",
};

const VALUES = [
  { Icon: Users, title: "Guest-First Always", desc: "Every decision is guided by what creates the best, safest, most memorable experience for our guests." },
  { Icon: Globe, title: "Local at Heart", desc: "We are East Africans sharing our home — no one understands these landscapes and cultures better." },
  { Icon: Leaf, title: "Conservation Driven", desc: "A portion of every booking goes directly to wildlife conservation and community development projects." },
  { Icon: Trophy, title: "Excellence Without Compromise", desc: "From the quality of our vehicles to the depth of our guides' knowledge — we never cut corners." },
];

const TIMELINE = [
  { year: "2014", event: "Founded in Kigali by Emmanuel Nkurunziza with one vehicle and a vision." },
  { year: "2016", event: "Expanded to gorilla trekking and chimp tracking — our most beloved service." },
  { year: "2018", event: "Became an official member of the Rwanda Tourism Board." },
  { year: "2020", event: "Launched investor tours and cross-border packages to Uganda, Kenya, Tanzania." },
  { year: "2022", event: "Surpassed 300 guests hosted from 30+ countries worldwide." },
  { year: "2024", event: "Expanded to 10 full safari services including adventure tours and road trips." },
  { year: "2026", event: "500+ happy travellers and growing — the journey continues." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=70"
            alt="Safari guide in the field"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 to-forest-950" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block bg-white/10 border border-white/15 text-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-5">
              Our Story
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-[clamp(36px,6vw,72px)] font-black text-white leading-tight mb-6">
              Passionate About Africa.<br />
              <span className="text-gold-400">Dedicated to You.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/65 text-[clamp(15px,1.8vw,18px)] leading-relaxed max-w-2xl mx-auto">
              Wildlife Friendly Safari Ltd was born from a simple belief: Africa&apos;s wild places deserve to be shared responsibly, authentically, and with genuine joy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-forest-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <FadeIn key={s.label}>
              <div className="font-display text-4xl font-bold text-gold-400 mb-1">{s.number}</div>
              <div className="text-white/55 text-[12.5px] uppercase tracking-[0.1em]">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left" className="relative">
              <div className="relative rounded-2xl overflow-hidden h-[480px] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80"
                  alt="African savanna at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <SectionHeader
                tag="Our Mission"
                title="Why We Do What We Do"
              />
              <FadeIn delay={0.15}>
                <p className="text-gray-500 text-[15.5px] leading-relaxed mb-5">
                  We exist to create life-changing journeys that connect people deeply with Africa&apos;s extraordinary wildlife, landscapes, and cultures — while giving back to the communities and ecosystems that make these experiences possible.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-500 text-[15.5px] leading-relaxed mb-8">
                  Every safari we plan is guided by three principles: genuine local expertise, complete guest satisfaction, and responsible tourism that leaves places better than we found them.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VALUES.map((v, i) => (
                  <FadeIn key={v.title} delay={0.1 * i}>
                    <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-forest-50 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0">
                        <v.Icon size={18} weight="duotone" className="text-forest-700" />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-semibold text-forest-900 mb-1">{v.title}</h4>
                        <p className="text-[13px] text-gray-400">{v.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Our Journey" title="How We Got Here" centered />
          <div className="relative">
            {/* Line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-forest-200 hidden sm:block" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <FadeIn key={t.year} delay={i * 0.06}>
                  <div className="flex gap-6 items-start">
                    <div className="w-[68px] shrink-0 text-right sm:text-right">
                      <span className="font-display text-[15px] font-bold text-forest-700">{t.year}</span>
                    </div>
                    <div className="hidden sm:flex w-px relative items-start justify-center pt-1 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-forest-600 border-2 border-white ring-2 ring-forest-200 relative z-10" />
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-gray-600 text-[14.5px] leading-relaxed">{t.event}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="The Team"
            title="The People Behind Your Safari"
            subtitle="Passionate East Africans who live and breathe the wild places they share with you."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.12}>
                <div className="text-center group">
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-5 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Image src={member.avatar} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-display text-[18px] font-bold text-forest-900 mb-1">{member.name}</h3>
                  <p className="text-forest-600 text-[13px] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="font-display text-2xl text-white font-bold mb-8">
              Certifications & Affiliations
            </h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "🏛️ Rwanda Tourism Board Member",
              "🌿 Certified Eco-Tourism Operator",
              "🦍 Gorilla Permit Specialist",
              "🚗 Licensed Safari Operator",
              "⭐ 5-Star Guest Rated",
            ].map((badge) => (
              <FadeIn key={badge}>
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-[13px] font-medium px-4 py-2 rounded-full">
                  {badge}
                </span>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Start Planning Your Trip
              <ArrowRight size={15} weight="bold" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
