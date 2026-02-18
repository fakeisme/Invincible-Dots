import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "(Nom de ta marque ici) — Robots de Trading & Packs",
    template: "%s | (Nom de ta marque ici)"
  },
  description:
    "Site vitrine premium pour robots de trading et packs. Approche transparente, professionnelle et orientée gestion du risque.",
  openGraph: {
    title: "(Nom de ta marque ici)",
    description: "Robots de trading et packs — environnement sobre, transparent et professionnel.",
    url: "https://example.com",
    siteName: "(Nom de ta marque ici)",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
