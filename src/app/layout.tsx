import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: {
    default: "Wildlife Friendly Safari Ltd — East Africa's Premier Safari Company",
    template: "%s | Wildlife Friendly Safari Ltd",
  },
  description:
    "Authentic, eco-friendly safari experiences across East Africa. Gorilla trekking, wildlife safaris, cultural tours, car rental, agro tourism, adventure tours and more.",
  keywords: [
    "safari Rwanda",
    "gorilla trekking",
    "wildlife safari East Africa",
    "Uganda chimp trekking",
    "Serengeti safari",
    "cultural tours Africa",
    "car rental Rwanda",
  ],
  openGraph: {
    type: "website",
    siteName: "Wildlife Friendly Safari Ltd",
    images: [
      {
        url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Wildlife Friendly Safari Ltd — African safari experience",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SmoothScrollProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-forest-700 focus:text-white focus:rounded-lg"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
