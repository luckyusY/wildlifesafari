import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { DESTINATIONS } from "@/lib/data";

export default function Destinations() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Top Destinations"
          title="Places We'll Take You"
          subtitle="Six extraordinary countries. One expert team. Infinite unforgettable moments."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DESTINATIONS.map((dest, i) => (
            <FadeIn key={dest.slug} delay={i * 0.08}>
              <Link
                href={`/destinations#${dest.slug}`}
                className="block relative rounded-2xl overflow-hidden group h-72 shadow-md hover:shadow-xl transition-shadow duration-350"
              >
                <Image
                  src={dest.image}
                  alt={`${dest.name} safari destination`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-1.5 text-gold-400 text-[11px] font-semibold uppercase tracking-[0.12em] mb-2">
                    <MapPin size={12} weight="fill" />
                    {dest.region}
                  </div>
                  <h3 className="font-display text-white text-2xl font-bold mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-white/60 text-[13px] leading-snug line-clamp-2">
                    {dest.description}
                  </p>

                  {/* Hover reveal */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 text-gold-400 text-[13px] font-semibold">
                    Explore destination
                    <ArrowRight size={13} weight="bold" />
                  </div>
                </div>

                {/* Best time badge */}
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/15 text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
                  Best: {dest.bestTime.split(" – ")[0]}–{dest.bestTime.split(" – ")[1]}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
