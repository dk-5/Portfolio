import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhruv Kothari — Software Engineer & AI/ML Researcher",
  description:
    "Software Engineer and AI/ML researcher building backend systems, language model pipelines, and full-stack platforms. Incoming MCS at UC Irvine.",
  keywords: [
    "software engineer",
    "AI/ML",
    "backend",
    "full-stack",
    "NLP",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "PyTorch",
  ],
  authors: [{ name: "Dhruv Kothari" }],
  openGraph: {
    title: "Dhruv Kothari — Software Engineer & AI/ML Researcher",
    description:
      "Software Engineer and AI/ML researcher building backend systems, language model pipelines, and full-stack platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Kothari — Software Engineer & AI/ML Researcher",
    description:
      "Software Engineer and AI/ML researcher building backend systems, language model pipelines, and full-stack platforms.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
