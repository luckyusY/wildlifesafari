import Link from "next/link";
import { ArrowLeft, House } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-forest-950 flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-[100px] mb-6">🦁</div>
        <h1 className="font-display text-6xl font-black text-white mb-3">404</h1>
        <p className="text-white/55 text-lg mb-2">Page Not Found</p>
        <p className="text-white/35 text-[14px] mb-10 max-w-sm mx-auto">
          Looks like this trail leads nowhere. Let&apos;s get you back to the safari.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-6 py-3 rounded-xl transition-all"
          >
            <House size={16} weight="bold" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white hover:bg-white/18 font-semibold px-6 py-3 rounded-xl transition-all"
          >
            <ArrowLeft size={16} weight="bold" />
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
