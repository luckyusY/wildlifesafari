import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="What We Offer"
          title="Our Safari Services"
          subtitle="Handcrafted experiences that connect you with Africa's most extraordinary landscapes, wildlife, and cultures."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <FadeIn key={svc.slug} delay={i * 0.06} className="group">
              <Link href={`/services/${svc.slug}`} className="block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-forest-200 transition-all duration-350 h-full flex flex-col hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-3 left-3 bg-gold-500/90 backdrop-blur-sm text-forest-950 text-[10.5px] font-bold px-2.5 py-1 rounded-full">
                      {svc.num}
                    </div>

                    {/* Tag badge */}
                    {svc.tag && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full">
                        <Tag size={9} weight="bold" />
                        {svc.tag}
                      </div>
                    )}

                    {/* Duration */}
                    <div className="absolute bottom-3 left-3 text-white text-[11px] font-medium opacity-90">
                      ⏱ {svc.duration}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-2xl mb-2.5">{svc.icon}</div>
                    <h3 className="font-display text-[18.5px] font-bold text-forest-900 mb-2 leading-tight group-hover:text-forest-700 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-gray-400 text-[13.5px] leading-relaxed flex-1">
                      {svc.shortDesc}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-forest-700 font-bold text-[13.5px]">
                        {svc.priceFrom}
                      </span>
                      <span className="flex items-center gap-1 text-forest-600 text-[13px] font-semibold group-hover:gap-2 transition-all">
                        Book now
                        <ArrowRight size={13} weight="bold" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
