import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = false,
  light = false,
  className = "",
}: SectionHeaderProps) {
  const align = centered ? "text-center" : "";

  return (
    <div className={`mb-16 ${align} ${className}`}>
      {tag && (
        <FadeIn>
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.14em] px-4 py-2 rounded-full mb-4 ${
              light
                ? "bg-white/15 text-gold-300 border border-white/20"
                : "bg-forest-100 text-forest-700"
            }`}
          >
            {tag}
          </span>
        </FadeIn>
      )}

      <FadeIn delay={0.1}>
        <h2
          className={`font-display text-4xl lg:text-5xl font-bold leading-tight ${
            light ? "text-white" : "text-forest-900"
          }`}
        >
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.2}>
          <p
            className={`mt-5 text-lg leading-relaxed max-w-2xl ${
              light ? "text-white/65" : "text-gray-500"
            } ${centered ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
