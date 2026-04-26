import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  ArrowLeft,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.shortDesc,
  };
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-amber-100 text-amber-700",
  Challenging: "bg-red-100 text-red-700",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) notFound();

  const related = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={svc.heroImage}
          alt={svc.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-[13px] mb-6 transition-colors"
            >
              <ArrowLeft size={14} weight="bold" />
              All Services
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-3xl">{svc.icon}</span>
              <span className="bg-gold-500 text-forest-950 text-[11px] font-bold px-3 py-1 rounded-full">
                {svc.num}
              </span>
              {svc.tag && (
                <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11.5px] font-semibold px-3 py-1 rounded-full">
                  {svc.tag}
                </span>
              )}
              <span className={`text-[11.5px] font-semibold px-3 py-1 rounded-full ${DIFFICULTY_COLOR[svc.difficulty]}`}>
                {svc.difficulty}
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="font-display text-[clamp(32px,5vw,64px)] font-black text-white leading-tight mb-4">
              {svc.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/65 text-[clamp(14px,1.6vw,17px)] max-w-2xl leading-relaxed">
              {svc.shortDesc}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info bar */}
      <div className="bg-forest-800 py-5 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6 text-white/75 text-[13.5px]">
            <span className="flex items-center gap-2">
              <Clock size={15} weight="duotone" className="text-gold-400" />
              {svc.duration}
            </span>
            <span className="flex items-center gap-2">
              <Users size={15} weight="duotone" className="text-gold-400" />
              {svc.groupSize}
            </span>
            <span className="flex items-center gap-2">
              <Star size={15} weight="fill" className="text-gold-400" />
              5-star rated
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-400 font-bold text-[18px] font-display">{svc.priceFrom}</span>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-[13.5px] px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Book This Service
              <ArrowRight size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Left — description */}
            <div className="lg:col-span-2 space-y-10">
              <FadeIn>
                <div>
                  <h2 className="font-display text-2xl font-bold text-forest-900 mb-4">
                    About This Experience
                  </h2>
                  <p className="text-gray-500 text-[15.5px] leading-relaxed">
                    {svc.longDesc}
                  </p>
                </div>
              </FadeIn>

              {/* Highlights */}
              <FadeIn delay={0.1}>
                <div>
                  <h3 className="font-display text-xl font-bold text-forest-900 mb-5">
                    Safari Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {svc.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-3 p-4 rounded-xl bg-forest-50 border border-forest-100"
                      >
                        <CheckCircle
                          size={18}
                          weight="fill"
                          className="text-forest-600 shrink-0 mt-0.5"
                        />
                        <span className="text-[14px] text-forest-900 font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Secondary image */}
              <FadeIn delay={0.15}>
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={`${svc.title} experience`}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right — sidebar */}
            <div className="space-y-6">
              {/* What's included */}
              <FadeIn delay={0.2} className="bg-cream rounded-2xl p-6 border border-gray-100 sticky top-28">
                <h3 className="font-display text-lg font-bold text-forest-900 mb-5">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3 mb-6">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-600">
                      <CheckCircle
                        size={16}
                        weight="fill"
                        className="text-forest-600 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-gray-200 space-y-3">
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-semibold text-forest-900">{svc.duration}</span>
                  </div>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-gray-500">Group size</span>
                    <span className="font-semibold text-forest-900">{svc.groupSize}</span>
                  </div>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-gray-500">Difficulty</span>
                    <span className={`font-semibold text-[12px] px-2.5 py-0.5 rounded-full ${DIFFICULTY_COLOR[svc.difficulty]}`}>
                      {svc.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between text-[13.5px] items-center">
                    <span className="text-gray-500">Starting from</span>
                    <span className="font-bold text-forest-700 text-[16px]">{svc.priceFrom}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full mt-6 py-3.5 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Book This Safari
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <a
                  href="https://wa.me/250700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full mt-2.5 py-3 border border-forest-200 text-forest-700 hover:bg-forest-50 font-semibold text-[13.5px] rounded-xl transition-colors"
                >
                  💬 Chat on WhatsApp
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-forest-900 mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 0.1}>
                <Link href={`/services/${r.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-forest-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-2xl">{r.icon}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-[16px] font-bold text-forest-900 mb-1 group-hover:text-forest-700 transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-gray-400 text-[13px] line-clamp-2 mb-3">{r.shortDesc}</p>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-forest-700 font-bold">{r.priceFrom}</span>
                        <span className="flex items-center gap-1 text-forest-600 font-semibold group-hover:gap-2 transition-all">
                          View <ArrowRight size={12} weight="bold" />
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
    </>
  );
}
