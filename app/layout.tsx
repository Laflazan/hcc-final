import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/law-firm/navbar";
import { Footer } from "@/components/law-firm/footer";
import { LocaleHtmlSync } from "@/components/locale-html-sync";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hcc.av.tr"),
  title: {
    default: "HCC",
    template: "%s | HCC",
  },
  applicationName: "HCC",
  category: "law",
  icons: {
    icon: [
      {
        url: "/HCC_LOGO-removebg-preview.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/HCC_LOGO-removebg-preview.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/HCC_LOGO-removebg-preview.png",
    shortcut: "/HCC_LOGO-removebg-preview.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-black font-sans antialiased">
        <LocaleHtmlSync />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
