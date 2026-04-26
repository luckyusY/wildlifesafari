"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Envelope,
  Clock,
  WhatsappLogo,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/data";

const CONTACT_ITEMS = [
  {
    Icon: MapPin,
    label: "Our Office",
    value: "Kigali, Rwanda, East Africa",
    href: undefined,
  },
  {
    Icon: Phone,
    label: "Phone / WhatsApp",
    value: "+250 7XX XXX XXX",
    href: "tel:+250700000000",
  },
  {
    Icon: Envelope,
    label: "Email",
    value: "info@wildlifefriendlysafari.com",
    href: "mailto:info@wildlifefriendlysafari.com",
  },
  {
    Icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 8:00 AM – 6:00 PM",
    href: undefined,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=70"
            alt="Contact us hero"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 to-forest-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <span className="inline-block bg-white/10 border border-white/15 text-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-5">
              Get In Touch
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-[clamp(34px,5.5vw,68px)] font-black text-white leading-tight mb-5">
              Let&apos;s Plan Your<br />
              <span className="text-gold-400">Dream Safari</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-[clamp(15px,1.8vw,18px)] leading-relaxed">
              Send us your travel dates, group size, and dream experiences — we&apos;ll craft a personalised itinerary and reply within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-bold text-forest-900">
                  Contact Information
                </h2>
                <p className="text-gray-500 text-[14.5px] mt-2 leading-relaxed">
                  Our team is ready to help you plan an unforgettable East African adventure.
                </p>
              </FadeIn>

              {/* Contact items */}
              <div className="space-y-4">
                {CONTACT_ITEMS.map(({ Icon, label, value, href }, i) => (
                  <FadeIn key={label} delay={i * 0.08}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-11 h-11 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={19} weight="duotone" className="text-forest-700" />
                      </div>
                      <div>
                        <span className="block text-[12px] font-semibold text-forest-900 uppercase tracking-wider mb-0.5">
                          {label}
                        </span>
                        {href ? (
                          <a href={href} className="text-[14px] text-gray-500 hover:text-forest-700 transition-colors">
                            {value}
                          </a>
                        ) : (
                          <span className="text-[14px] text-gray-500">{value}</span>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <FadeIn delay={0.35}>
                <a
                  href="https://wa.me/250700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all hover:-translate-y-0.5 font-semibold"
                >
                  <WhatsappLogo size={22} weight="fill" />
                  <div>
                    <span className="block text-[14px]">Chat on WhatsApp</span>
                    <span className="text-[12px] text-white/70 font-normal">Usually replies in minutes</span>
                  </div>
                  <ArrowRight size={16} weight="bold" className="ml-auto" />
                </a>
              </FadeIn>

              {/* Trust indicators */}
              <FadeIn delay={0.4}>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h4 className="font-semibold text-[13px] text-forest-900 mb-3">Why travellers trust us</h4>
                  {[
                    "Free personalised itinerary within 24 hrs",
                    "No booking or enquiry fees ever",
                    "10+ years of East Africa expertise",
                    "500+ guests from 30+ countries",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 py-1.5 text-[13.5px] text-gray-500">
                      <CheckCircle size={15} weight="fill" className="text-forest-500 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — Form */}
            <FadeIn delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100" id="book">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={40} weight="fill" className="text-forest-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-forest-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Our team will review your enquiry and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-[13.5px] text-forest-600 hover:text-forest-800 font-semibold transition-colors"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-forest-900 mb-1">Send Us a Message</h3>
                      <p className="text-gray-400 text-[13.5px]">All fields marked * are required.</p>
                    </div>

                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                          First Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your first name"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all bg-gray-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                          Last Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your last name"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all bg-gray-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                        Service Interested In *
                      </label>
                      <select
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all bg-gray-50 focus:bg-white appearance-none"
                      >
                        <option value="">— Select a service —</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.icon} {s.title}
                          </option>
                        ))}
                        <option value="custom">Custom / Multiple Services</option>
                      </select>
                    </div>

                    {/* Travel date & Group size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                          Travel Date *
                        </label>
                        <input
                          required
                          type="date"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all bg-gray-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                          Group Size *
                        </label>
                        <input
                          required
                          type="number"
                          min={1}
                          placeholder="e.g. 4"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[13px] font-semibold text-forest-900 mb-1.5">
                        Tell Us About Your Dream Trip
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe what you'd love to experience — we'll tailor everything to you..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100 transition-all resize-none bg-gray-50 focus:bg-white"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2.5 w-full py-4 bg-forest-700 hover:bg-forest-800 disabled:opacity-70 text-white font-bold text-[15px] rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest-900/20"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send My Enquiry
                          <ArrowRight size={16} weight="bold" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
