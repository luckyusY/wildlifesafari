"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MagnifyingGlassPlus } from "@phosphor-icons/react";
import FadeIn from "@/components/ui/FadeIn";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/lib/data";

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active);

  const current = lightbox !== null ? GALLERY_IMAGES.find((img) => img.id === lightbox) : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1920&q=60"
            alt="Gallery hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 to-forest-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <span className="inline-block bg-white/10 border border-white/15 text-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-5">
              Photo Gallery
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-[clamp(34px,5.5vw,68px)] font-black text-white leading-tight mb-5">
              Moments That<br />
              <span className="text-gold-400">Last Forever</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-[clamp(15px,1.8vw,18px)] leading-relaxed">
              A glimpse into the extraordinary experiences awaiting you across East Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-forest-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <FadeIn className="flex flex-wrap justify-center gap-2.5 mb-12">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-200 ${
                  active === cat
                    ? "bg-gold-500 text-forest-950"
                    : "bg-white/8 text-white/65 hover:bg-white/15 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {/* Masonry grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer mb-4"
                  onClick={() => setLightbox(img.id)}
                >
                  <div className="relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/50 transition-colors duration-300 flex items-center justify-center">
                      <MagnifyingGlassPlus
                        size={36}
                        weight="bold"
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 transition-transform"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-gold-400 text-[10.5px] font-bold uppercase tracking-wider">
                        {img.category}
                      </span>
                      <p className="text-white text-[12.5px] mt-0.5 leading-snug">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src.replace("w=900", "w=1400")}
                alt={current.alt}
                width={1400}
                height={900}
                className="rounded-2xl object-contain max-h-[85vh] w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <span className="text-gold-400 text-[11px] font-bold uppercase tracking-wider">
                  {current.category}
                </span>
                <p className="text-white text-[14px] mt-1">{current.alt}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X size={18} weight="bold" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
