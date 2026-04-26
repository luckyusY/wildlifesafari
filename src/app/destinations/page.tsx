import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Sun, Cloud, ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/home/CTABanner";
import { DESTINATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore our safari destinations across East and Central Africa — Rwanda, Uganda, Kenya, Tanzania, DR Congo, and Ethiopia. Discover what makes each country extraordinary.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=70"
            alt="African landscape destinations"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 to-forest-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <span className="inline-block bg-white/10 border border-white/15 text-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-5">
              Explore Africa
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-[clamp(34px,5.5vw,68px)] font-black text-white leading-tight mb-5">
              Six Countries.<br />
              <span className="text-gold-400">Infinite Wild Moments.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-[clamp(15px,1.8vw,18px)] leading-relaxed">
              From Rwanda&apos;s volcanic peaks to Tanzania&apos;s endless Serengeti — every destination we serve is extraordinary in its own way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {DESTINATIONS.map((dest, i) => (
            <FadeIn key={dest.slug} delay={0.05}>
              <article
                id={dest.slug}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image — alternate left/right */}
                <div className={`relative rounded-2xl overflow-hidden h-[420px] shadow-2xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent" />

                  {/* Overlay info */}
                  <div className="absolute bottom-5 left-5">
                    <div className="flex items-center gap-1.5 text-gold-400 text-[11.5px] font-bold uppercase tracking-wider mb-1">
                      <MapPin size={12} weight="fill" />
                      {dest.region}
                    </div>
                    <span className="font-display text-white text-3xl font-bold">{dest.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-forest-600 bg-forest-100 px-3 py-1 rounded-full">
                      {dest.region}
                    </span>
                  </div>

                  <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold text-forest-900 mb-4 leading-tight">
                    {dest.name}
                  </h2>

                  <p className="text-gray-500 text-[15.5px] leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <h3 className="font-semibold text-[13px] text-forest-900 uppercase tracking-wider mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {dest.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-[14px] text-gray-600">
                        <CheckCircle size={16} weight="fill" className="text-forest-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Best time / Climate */}
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    <div className="flex items-start gap-3 p-3.5 bg-amber-50 rounded-xl">
                      <Sun size={18} weight="duotone" className="text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[11.5px] font-semibold text-amber-700 mb-0.5">Best Time to Visit</span>
                        <span className="text-[13px] text-amber-600">{dest.bestTime}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 bg-blue-50 rounded-xl">
                      <Cloud size={18} weight="duotone" className="text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[11.5px] font-semibold text-blue-700 mb-0.5">Climate</span>
                        <span className="text-[13px] text-blue-600">{dest.climate}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-semibold text-[14.5px] px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest-900/20"
                  >
                    Plan a {dest.name} Safari
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </article>

              {/* Divider */}
              {i < DESTINATIONS.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-forest-200 to-transparent mt-20" />
              )}
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
