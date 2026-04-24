import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundVideo from "@/components/BackgroundVideo";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://creatual.io"),
  title: {
    default: "CREATUAL - Design & Innovation Studio",
    template: "%s | CREATUAL",
  },
  description:
    "A Multi-Disciplinary Digital Design & Innovation Studio Specializing in Web Development in All Disciplines and Graphic Design for All Platforms",
  keywords:
    "Fluid Creativity, motion graphics, signage strategy, Web Development, Amazon Web Services Development, creative processes, digital workshop, innovation design studio, next.js projects, react.js",
  alternates: { canonical: "/" },
  openGraph: {
    url: "https://creatual.io",
    type: "website",
    siteName: "CREATUAL",
    title: "CREATUAL - Fluid Creativity",
    description: "A Multi-Disciplinary Digital Design & Innovation Studio",
    images: [{ url: "/images/thumbnail-creatualio.png", width: 1200, height: 630, alt: "CREATUAL Design Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CREATUAL - Fluid Creativity",
    description: "A Multi-Disciplinary Digital Design & Innovation Studio",
    images: ["/images/thumbnail-creatualio.png"],
  },
  manifest: "/manifest.webmanifest",
  icons: [
    { rel: "icon", url: "/icons/72x72.png" },
    { rel: "icon", url: "/icons/favicon16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/icons/favicon32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/icons/favicon96x96.png", sizes: "96x96", type: "image/png" },
    { rel: "icon", url: "/icons/favicon192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon-57x57.png", sizes: "57x57" },
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon-72x72.png", sizes: "72x72" },
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon-114x114.png", sizes: "114x114" },
  ],
  appleWebApp: {
    capable: true,
    title: "CREATUAL",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="min-h-screen px-8 py-6">
        <BackgroundVideo />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
