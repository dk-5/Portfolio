import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
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
  title: "Dhruv Kothari — Software Engineer",
  description:
    "Software Engineer specializing in backend systems, AI/ML research, and full-stack development. Published at IEEE, building production platforms.",
  keywords: [
    "software engineer",
    "backend",
    "AI/ML",
    "full-stack",
    "Next.js",
    "React",
    "Node.js",
    "Python",
  ],
  authors: [{ name: "Dhruv Kothari" }],
  openGraph: {
    title: "Dhruv Kothari — Software Engineer",
    description:
      "Software Engineer specializing in backend systems, AI/ML research, and full-stack development. Published at IEEE, building production platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Kothari — Software Engineer",
    description:
      "Software Engineer specializing in backend systems, AI/ML research, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
