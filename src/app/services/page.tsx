import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, Clock, Users, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/home/CTABanner";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all 10 safari services offered by Wildlife Friendly Safari Ltd — from gorilla trekking and wildlife safaris to car rental, cultural tours, adventure, and road trips.",
};

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-amber-100 text-amber-700",
  Challenging: "bg-red-100 text-red-700",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-36 pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=70"
            alt="Safari services hero"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 to-forest-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <span className="inline-block bg-white/10 border border-white/15 text-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-5">
              What We Offer
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-[clamp(34px,5.5vw,66px)] font-black text-white leading-tight mb-5">
              10 Safari Experiences.<br />
              <span className="text-gold-400">One Expert Team.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-[clamp(15px,1.8vw,18px)] leading-relaxed">
              Every service is designed and guided by local East African experts who know every trail, park, and community by heart.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.slug} delay={i * 0.055}>
                <Link href={`/services/${svc.slug}`} className="group block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-forest-200 shadow-sm hover:shadow-xl transition-all duration-350 h-full flex flex-col hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-56 flex-shrink-0 overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                      {/* Overlays */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="bg-gold-500 text-forest-950 text-[10.5px] font-bold px-2.5 py-1 rounded-full">
                          {svc.num}
                        </span>
                        {svc.tag && (
                          <span className="flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full">
                            <Tag size={9} weight="bold" />
                            {svc.tag}
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-2xl">{svc.icon}</span>
                        <span
                          className={`text-[10.5px] font-semibold px-2.5 py-1 rounded-full ${
                            DIFFICULTY_COLOR[svc.difficulty]
                          }`}
                        >
                          {svc.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="font-display text-[19px] font-bold text-forest-900 mb-2 leading-tight group-hover:text-forest-700 transition-colors">
                        {svc.title}
                      </h2>
                      <p className="text-gray-400 text-[13.5px] leading-relaxed flex-1 mb-4">
                        {svc.shortDesc}
                      </p>

                      {/* Quick info */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-gray-100 mb-4">
                        <div className="text-center">
                          <Clock size={14} className="text-forest-500 mx-auto mb-1" weight="duotone" />
                          <span className="block text-[11px] text-gray-400">{svc.duration}</span>
                        </div>
                        <div className="text-center border-x border-gray-100">
                          <Users size={14} className="text-forest-500 mx-auto mb-1" weight="duotone" />
                          <span className="block text-[11px] text-gray-400">{svc.groupSize}</span>
                        </div>
                        <div className="text-center">
                          <CurrencyDollar size={14} className="text-forest-500 mx-auto mb-1" weight="duotone" />
                          <span className="block text-[11px] text-gray-400">{svc.priceFrom}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-forest-700 font-bold text-[14px]">{svc.priceFrom}</span>
                        <span className="flex items-center gap-1.5 text-forest-600 text-[13.5px] font-semibold group-hover:gap-2.5 transition-all">
                          Learn more
                          <ArrowRight size={13} weight="bold" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
