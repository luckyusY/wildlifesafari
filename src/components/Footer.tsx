import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
  TiktokLogo,
  MapPin,
  Phone,
  Envelope,
  Clock,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { SERVICES, DESTINATIONS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand col — wider */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-forest-500 to-forest-700 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🦁
              </div>
              <div>
                <span className="block font-display text-[15px] font-bold">Wildlife Friendly</span>
                <span className="block text-[11px] text-white/40 tracking-widest uppercase">Safari Ltd</span>
              </div>
            </Link>

            <p className="text-white/55 text-[14px] leading-relaxed max-w-[300px] mb-6">
              Your trusted partner for authentic, eco-friendly safari experiences across East Africa. We create memories that last a lifetime — one extraordinary journey at a time.
            </p>

            {/* Contact quick-info */}
            <div className="space-y-2.5 mb-7">
              <div className="flex items-start gap-2.5 text-[13px] text-white/55">
                <MapPin size={15} weight="fill" className="text-gold-500 mt-0.5 shrink-0" />
                <span>Kigali, Rwanda — East Africa</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/55">
                <Phone size={15} weight="fill" className="text-gold-500 shrink-0" />
                <a href="tel:0789448107" className="hover:text-white transition-colors">0789 448 107</a>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/55">
                <Envelope size={15} weight="fill" className="text-gold-500 shrink-0" />
                <a href="mailto:info@wildlifefriendlysafari.com" className="hover:text-white transition-colors">
                  info@wildlifefriendlysafari.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/55">
                <Clock size={15} weight="fill" className="text-gold-500 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {[
                { Icon: FacebookLogo, href: "#", label: "Facebook" },
                { Icon: InstagramLogo, href: "#", label: "Instagram" },
                { Icon: YoutubeLogo, href: "#", label: "YouTube" },
                { Icon: WhatsappLogo, href: "https://wa.me/250700000000", label: "WhatsApp" },
                { Icon: TiktokLogo, href: "#", label: "TikTok" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-forest-600 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={16} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold-400 mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="flex items-center gap-2 text-[13.5px] text-white/55 hover:text-white transition-colors group"
                  >
                    <span className="text-sm">{svc.icon}</span>
                    {svc.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-[12.5px] text-gold-400 hover:text-gold-300 font-semibold transition-colors mt-1"
                >
                  <ArrowRight size={12} weight="bold" />
                  All services
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations col */}
          <div>
            <h4 className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold-400 mb-5">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              {DESTINATIONS.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinations#${dest.slug}`}
                    className="text-[13.5px] text-white/55 hover:text-white transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h4 className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold-400 mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/destinations", label: "Destinations" },
                { href: "/contact", label: "Contact Us" },
                { href: "/contact#book", label: "Book a Safari" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13.5px] text-white/55 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Book CTA */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/8">
              <p className="text-[12.5px] text-white/60 mb-3 leading-snug">
                Ready for your dream safari? We reply within 24 hours.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-gold-500 hover:bg-gold-400 text-forest-950 text-[12.5px] font-bold rounded-lg transition-colors"
              >
                Plan My Safari
                <ArrowRight size={12} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-white/35">
            © {year} Wildlife Friendly Safari Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-white/30">
            <span>Made with ❤️ for East Africa&apos;s wild places</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
