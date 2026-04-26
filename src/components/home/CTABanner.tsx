import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";

export default function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-forest-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=60"
          alt="Safari background"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/60 to-forest-950/80" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="inline-block bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[11.5px] font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-6">
            Ready to explore?
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-[clamp(30px,5vw,56px)] font-bold text-white leading-tight mb-6">
            Your African Adventure
            <br />
            <span className="text-gold-400">Starts Here</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-white/65 text-[clamp(15px,1.8vw,18px)] leading-relaxed mb-10">
            Tell us your travel dates, group size, and dream experiences — we&apos;ll design
            a personalised safari itinerary and reply within 24 hours.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/30"
            >
              Plan My Safari
              <ArrowRight size={16} weight="bold" />
            </Link>
            <a
              href="tel:+250700000000"
              className="flex items-center gap-2.5 bg-white/10 hover:bg-white/18 backdrop-blur-sm border border-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
            >
              <Phone size={17} weight="fill" />
              Call Us Now
            </a>
          </div>
        </FadeIn>

        {/* Trust badges */}
        <FadeIn delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-white/40 text-[12px]">
            <div className="flex items-center gap-2">
              <span className="text-forest-400">✓</span> Free itinerary consultation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-forest-400">✓</span> No booking fees
            </div>
            <div className="flex items-center gap-2">
              <span className="text-forest-400">✓</span> Reply within 24 hrs
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
