import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rbtdevhub.com"),
  title: {
    default: "Rbt Dev Hub — Votre idée, notre code, votre succès",
    template: "%s | Rbt Dev Hub",
  },
  description:
    "Développeur web indépendant, j'accompagne les entreprises, entrepreneurs et organisations dans leur transformation numérique : sites web professionnels, applications web et solutions digitales sur mesure.",
  keywords: [
    "développement web",
    "création de site web",
    "application web",
    "solutions digitales",
    "intelligence artificielle",
    "Rbt Dev Hub",
  ],
  openGraph: {
    title: "Rbt Dev Hub — Développement web & solutions digitales",
    description:
      "Votre idée, notre code, votre succès. Sites web professionnels, applications web et solutions digitales sur mesure.",
    type: "website",
    locale: "fr_FR",
    siteName: "Rbt Dev Hub",
    images: [
      {
        url: "/couverture.png",
        width: 924,
        height: 308,
        alt: "Rbt Dev Hub — votre idée, notre code, votre succès",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rbt Dev Hub — Développement web & solutions digitales",
    description:
      "Votre idée, notre code, votre succès. Demandez votre devis gratuit.",
    images: ["/couverture.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="G-6VZNPTCH9K" />
    </html>
  );
}
