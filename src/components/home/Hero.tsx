"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, Star } from "@phosphor-icons/react";
import { STATS } from "@/lib/data";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=85"
          alt="African safari landscape at golden sunset"
          fill
          priority
          style={{ animation: "slowZoom 14s ease-out forwards", transform: "scale(1.04)" }}
          className="object-cover object-center"
        />
        {/* Layered gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
      </div>

      {/* Decorative ring */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5 hidden xl:block" />
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-white/8 hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-gold-300 text-[12px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} weight="fill" className="text-gold-400" />
                ))}
              </div>
              East Africa&apos;s Premier Safari Company
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(40px,6.5vw,84px)] font-black text-white leading-[1.06] mb-7"
          >
            Discover the
            <br />
            <span className="text-gold-400">Wild Heart</span>
            <br />
            of Africa
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-white/75 text-[clamp(16px,1.8vw,19px)] leading-relaxed mb-10 max-w-[520px]"
          >
            From misty gorilla jungles to sun-soaked savanna plains — we craft
            extraordinary safari journeys tailored to your dreams, delivered
            with genuine local expertise.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="flex items-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-[15px] px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/30"
            >
              Explore Packages
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/gallery"
              className="flex items-center gap-2.5 bg-white/10 hover:bg-white/18 backdrop-blur-sm border border-white/20 text-white font-semibold text-[15px] px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
            >
              <PlayCircle size={20} weight="fill" className="text-gold-400" />
              View Gallery
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <span className="block font-display text-[clamp(26px,3.5vw,38px)] font-bold text-gold-400 leading-none mb-1">
                  {stat.number}
                </span>
                <span className="text-white/55 text-[12.5px] uppercase tracking-[0.1em] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.18em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

      {/* Slide-in floating card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute bottom-24 right-6 lg:right-16 z-10 hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-2xl">
          <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center text-lg flex-shrink-0">
            🦁
          </div>
          <div>
            <span className="block text-white font-semibold text-[13px]">
              Next gorilla trek available
            </span>
            <span className="text-gold-400 text-[12px] font-bold">Limited permits — book today</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
