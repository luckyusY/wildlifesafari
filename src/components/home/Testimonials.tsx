import Image from "next/image";
import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Guest Reviews"
          title="What Our Travellers Say"
          subtitle="Real stories from guests who made their dream safari happen with us."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <div className="bg-cream rounded-2xl p-6 flex flex-col h-full border border-gray-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300 group">
                {/* Quote icon */}
                <Quotes
                  size={32}
                  weight="fill"
                  className="text-forest-200 mb-3 group-hover:text-forest-300 transition-colors"
                />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={14} weight="fill" className="text-gold-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-[14px] leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Service tag */}
                <div className="mt-4 mb-4">
                  <span className="inline-block bg-forest-100 text-forest-700 text-[11px] font-semibold px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="block text-[13.5px] font-semibold text-gray-800">{t.name}</span>
                    <span className="text-[12px] text-gray-400">
                      {t.flag} {t.country} · {t.date}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
