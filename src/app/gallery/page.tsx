"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MagnifyingGlassPlus,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import FadeIn from "@/components/ui/FadeIn";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/lib/data";

const FEATURED = GALLERY_IMAGES.filter((img) => img.featured);
const CAROUSEL_INTERVAL = 5000;

/* ─── Hero Carousel ─────────────────────────────────────────────────────── */
function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number, direction: number) => {
      setDir(direction);
      setIndex((next + FEATURED.length) % FEATURED.length);
    },
    []
  );

  const prev = useCallback(() => go(index - 1, -1), [index, go]);
  const next = useCallback(() => go(index + 1, 1), [index, go]);

  useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(() => go(index + 1, 1), CAROUSEL_INTERVAL);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [index, playing, go]);

  const current = FEATURED[index];

  return (
    <section className="relative h-[92vh] min-h-[560px] overflow-hidden bg-forest-950">
      {/* Slides */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current.id}
          custom={dir}
          variants={{
            enter: (d: number) => ({ x: d * 60, opacity: 0, scale: 1.04 }),
            center: { x: 0, opacity: 1, scale: 1 },
            exit: (d: number) => ({ x: d * -60, opacity: 0, scale: 0.97 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute inset-0"
        >
          <Image
            src={current.src.replace("w=1200", "w=1920")}
            alt={current.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-forest-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 sm:px-12 lg:px-20 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id + "-text"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="inline-block text-gold-400 text-[11px] font-bold uppercase tracking-[0.16em] mb-3 bg-white/8 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {current.category}
            </span>
            <h2 className="font-display text-white text-[clamp(22px,3.5vw,52px)] font-bold leading-tight max-w-2xl mb-2">
              {current.alt}
            </h2>
            <p className="text-white/45 text-[13px]">
              {index + 1} / {FEATURED.length}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
      >
        <CaretLeft size={20} weight="bold" />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
      >
        <CaretRight size={20} weight="bold" />
      </button>

      {/* Play / Pause */}
      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur border border-white/20 text-white/70 flex items-center justify-center hover:text-white transition-colors"
      >
        {playing ? <Pause size={15} weight="fill" /> : <Play size={15} weight="fill" />}
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {FEATURED.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > index ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "bg-gold-400 w-7 h-2"
                : "bg-white/30 hover:bg-white/60 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {playing && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <motion.div
            key={index + "-progress"}
            className="h-full bg-gold-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: CAROUSEL_INTERVAL / 1000, ease: "linear" }}
          />
        </div>
      )}

      {/* Header text */}
      <div className="absolute top-0 left-0 right-0 pt-32 px-6 sm:px-12 lg:px-20 z-10">
        <FadeIn>
          <span className="inline-block bg-white/10 border border-white/15 text-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-4">
            Photo Gallery
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-[clamp(32px,5vw,64px)] font-black text-white leading-tight max-w-xl">
            Moments That<br />
            <span className="text-gold-400">Last Forever</span>
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Lightbox ───────────────────────────────────────────────────────────── */
interface LightboxProps {
  images: typeof GALLERY_IMAGES;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[300] bg-black/97 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative w-full max-w-6xl max-h-[90vh] mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden bg-forest-950 flex-1">
          <Image
            src={current.src.replace("w=1200", "w=1600")}
            alt={current.alt}
            width={1600}
            height={1000}
            className="object-contain max-h-[78vh] w-full"
            priority
          />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-gold-400 text-[10.5px] font-bold uppercase tracking-wider block mb-1">
              {current.category}
            </span>
            <p className="text-white text-[14.5px] font-medium leading-snug">{current.alt}</p>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="text-white/40 text-[13px]">
            {index + 1} <span className="mx-1 text-white/20">/</span> {images.length}
          </span>
        </div>
      </motion.div>

      {/* Nav arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-colors"
      >
        <ArrowLeft size={20} weight="bold" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-colors"
      >
        <ArrowRight size={20} weight="bold" />
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-colors"
      >
        <X size={18} weight="bold" />
      </button>
    </motion.div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────── */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, 20);

  const openLightbox = (imgId: number) => {
    const idx = filtered.findIndex((img) => img.id === imgId);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => ((i ?? 0) - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => ((i ?? 0) + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Reset showAll when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  // Category counts
  const counts: Record<string, number> = { All: GALLERY_IMAGES.length };
  for (const img of GALLERY_IMAGES) {
    counts[img.category] = (counts[img.category] ?? 0) + 1;
  }

  return (
    <>
      <HeroCarousel />

      {/* Browse section */}
      <section className="bg-forest-950 pb-24">
        {/* Sticky filter bar */}
        <div className="sticky top-[68px] z-30 bg-forest-950/95 backdrop-blur-xl border-b border-white/8 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
              {GALLERY_CATEGORIES.map((cat) => {
                const count = counts[cat] ?? 0;
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                      active
                        ? "bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/25"
                        : "bg-white/8 text-white/65 hover:bg-white/15 hover:text-white border border-white/10"
                    }`}
                  >
                    {cat}
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        active ? "bg-forest-950/20 text-forest-900" : "bg-white/10 text-white/40"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.035, 0.4) }}
                  className="break-inside-avoid mb-4 rounded-2xl overflow-hidden relative group cursor-pointer ring-2 ring-transparent hover:ring-gold-500/40 transition-all duration-300"
                  onClick={() => openLightbox(img.id)}
                >
                  <div className="relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="w-full h-auto object-cover group-hover:scale-[1.04] transition-transform duration-600"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/55 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                        <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center">
                          <MagnifyingGlassPlus size={22} weight="bold" className="text-white" />
                        </div>
                      </div>
                    </div>
                    {/* Caption bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-gold-400 text-[10px] font-bold uppercase tracking-wider block mb-0.5">
                        {img.category}
                      </span>
                      <p className="text-white text-[12px] leading-snug line-clamp-2">{img.alt}</p>
                    </div>
                    {/* Featured badge */}
                    {img.featured && (
                      <div className="absolute top-3 right-3 bg-gold-500/90 backdrop-blur text-forest-950 text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-full">
                        ★ Featured
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load more */}
          {!showAll && filtered.length > 20 && (
            <FadeIn className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-3 bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
              >
                Load More Photos
                <span className="text-white/45 text-[13px]">
                  ({filtered.length - visible.length} remaining)
                </span>
              </button>
            </FadeIn>
          )}

          {/* All loaded indicator */}
          {(showAll || filtered.length <= 20) && filtered.length > 0 && (
            <FadeIn className="text-center mt-10">
              <p className="text-white/25 text-[13px]">
                All {filtered.length} photos displayed
              </p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
