import { SERVICES } from "@/lib/data";

export default function MarqueeStrip() {
  const items = [...SERVICES, ...SERVICES];

  return (
    <div className="bg-forest-900 border-y border-white/8 overflow-hidden py-4 relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-forest-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-forest-900 to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "marqueeScroll 32s linear infinite" }}
      >
        {items.map((svc, i) => (
          <span
            key={`${svc.slug}-${i}`}
            className="inline-flex items-center gap-3 px-7 text-[13.5px] font-medium text-white/70"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0"
              aria-hidden
            />
            {svc.icon} {svc.title}
          </span>
        ))}
      </div>
    </div>
  );
}
