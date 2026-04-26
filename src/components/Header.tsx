"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  X,
  CaretDown,
  Phone,
  WhatsappLogo,
  ArrowRight,
  MapPin,
  Binoculars,
  Car,
  Plant,
  Buildings,
  GraduationCap,
  Tent,
  Briefcase,
  Mountains,
  MapTrifold,
} from "@phosphor-icons/react";
import { SERVICES } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "wildlife-safari": Binoculars,
  "gorilla-chimps-trekking": Mountains,
  "car-rental": Car,
  "agro-tourism": Plant,
  "cultural-historical-tours": Buildings,
  "educational-tours": GraduationCap,
  "long-short-term-staying": Tent,
  "tourism-new-investors": Briefcase,
  "adventure-tours": Mountains,
  "road-trip-packages": MapTrifold,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Desktop / Tablet Header ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-forest-950/96 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5"
            : "bg-gradient-to-b from-forest-950/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-11 h-11 bg-gradient-to-br from-forest-500 to-forest-700 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-forest-900/50 group-hover:scale-105 transition-transform duration-300">
                🦁
              </div>
              <div className="text-white leading-tight">
                <span className="block font-display text-[15px] font-bold">
                  Wildlife Friendly
                </span>
                <span className="block text-[10.5px] text-white/55 tracking-widest uppercase">
                  Safari Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-gold-400 bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/8"
                      }`}
                    >
                      {link.label}
                      <CaretDown
                        size={13}
                        weight="bold"
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 14, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px]"
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100/80 overflow-hidden">
                            {/* Dropdown header */}
                            <div className="px-5 py-3.5 bg-gradient-to-r from-forest-900 to-forest-700 flex items-center justify-between">
                              <div>
                                <span className="block text-white font-display font-semibold text-sm">Our Services</span>
                                <span className="text-white/55 text-[11px]">10 curated experiences across East Africa</span>
                              </div>
                              <Link
                                href="/services"
                                className="flex items-center gap-1.5 text-gold-300 text-[12px] font-semibold hover:text-gold-400 transition-colors"
                              >
                                View all <ArrowRight size={12} weight="bold" />
                              </Link>
                            </div>

                            {/* Service grid */}
                            <div className="grid grid-cols-2 gap-0.5 p-2.5 bg-gray-50/50">
                              {SERVICES.map((svc) => {
                                const Icon = SERVICE_ICONS[svc.slug] ?? MapPin;
                                return (
                                  <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest-50 transition-colors group/item"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center flex-shrink-0 group-hover/item:bg-forest-200 transition-colors">
                                      <Icon
                                        size={16}
                                        weight="duotone"
                                        className="text-forest-700"
                                      />
                                    </div>
                                    <div className="min-w-0">
                                      <span className="block text-[13px] font-semibold text-gray-800 group-hover/item:text-forest-700 transition-colors leading-tight">
                                        {svc.title}
                                      </span>
                                      <span className="block text-[11.5px] text-gray-400 mt-0.5 leading-snug line-clamp-1">
                                        {svc.shortDesc}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-gold-400 bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right CTA group */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/250700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white text-[13px] font-medium transition-colors group"
              >
                <WhatsappLogo
                  size={18}
                  weight="fill"
                  className="text-green-400 group-hover:scale-110 transition-transform"
                />
                WhatsApp
              </a>
              <div className="w-px h-4 bg-white/15" />
              <a
                href="tel:+250700000000"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-[13px] font-medium transition-colors"
              >
                <Phone size={14} weight="fill" />
                +250 7XX XXX
              </a>
              <Link
                href="/contact"
                className="ml-1 flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Book Safari
                <ArrowRight size={13} weight="bold" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-forest-950/80 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[320px] max-w-full bg-forest-950 flex flex-col border-l border-white/5"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-forest-600 rounded-lg flex items-center justify-center text-lg">
                    🦁
                  </div>
                  <div className="text-white">
                    <span className="block font-display text-sm font-bold leading-tight">
                      Wildlife Friendly
                    </span>
                    <span className="block text-[10px] text-white/45 tracking-widest uppercase">
                      Safari Ltd
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/50 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-4 px-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.3 }}
                  >
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileServicesOpen((p) => !p)
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14.5px] font-medium transition-colors mb-0.5 ${
                            isActive(link.href)
                              ? "bg-forest-700 text-white"
                              : "text-white/75 hover:text-white hover:bg-white/8"
                          }`}
                        >
                          {link.label}
                          <CaretDown
                            size={14}
                            weight="bold"
                            className={`transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-2 mb-2 space-y-0.5 border-l border-white/10 pl-3">
                                {SERVICES.map((svc) => (
                                  <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-white/55 hover:text-white hover:bg-white/6 transition-colors"
                                  >
                                    <span className="text-base">{svc.icon}</span>
                                    {svc.title}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  className="flex items-center gap-1.5 px-3 py-2 text-[12px] text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                                >
                                  <ArrowRight size={12} weight="bold" />
                                  View all services
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-[14.5px] font-medium transition-colors mb-0.5 ${
                          isActive(link.href)
                            ? "bg-forest-700 text-white"
                            : "text-white/75 hover:text-white hover:bg-white/8"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Panel footer */}
              <div className="px-4 pb-6 pt-4 border-t border-white/8 space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-forest-950 text-[14px] font-bold rounded-xl transition-colors"
                >
                  Book a Safari
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <a
                  href="https://wa.me/250700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 text-white/70 hover:text-white text-[13.5px] rounded-xl transition-colors"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-green-400" />
                  Chat on WhatsApp
                </a>
                <div className="flex items-center justify-center gap-1.5 text-white/35 text-[12px]">
                  <Phone size={12} weight="fill" />
                  <a href="tel:+250700000000" className="hover:text-white/60 transition-colors">
                    +250 7XX XXX XXX
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
