import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { GALLERY_IMAGES } from "@/lib/data";

export default function GalleryPreview() {
  const preview = GALLERY_IMAGES.slice(0, 7);

  return (
    <section className="py-24 bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeader
            tag="Photo Gallery"
            title={"Moments That\nLast Forever"}
            light
          />
          <FadeIn delay={0.3}>
            <Link
              href="/gallery"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold text-[14px] px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shrink-0"
            >
              Full Gallery
              <ArrowRight size={14} weight="bold" />
            </Link>
          </FadeIn>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[480px]">
          {/* Large left cell spanning 2 rows */}
          <FadeIn className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
            <Image
              src={preview[0].src}
              alt={preview[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[11px] uppercase tracking-wider text-gold-300 font-semibold">
                {preview[0].category}
              </span>
              <p className="text-[13px] mt-0.5 font-medium">{preview[0].alt}</p>
            </div>
          </FadeIn>

          {/* Right cells */}
          {preview.slice(1, 7).map((img, i) => (
            <FadeIn key={img.id} delay={0.08 * i} className="rounded-2xl overflow-hidden relative group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2.5 left-2.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase tracking-wider text-gold-300 font-semibold">
                  {img.category}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
