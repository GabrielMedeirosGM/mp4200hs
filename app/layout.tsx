import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-graffiti",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MP4200HS — Impressão de Alta Velocidade",
  description:
    "MP4200HS: precisão industrial, velocidade superior e confiabilidade comprovada.",
  openGraph: {
    title: "MP4200HS",
    description: "Impressão de Alta Velocidade",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} antialiased`}
    >
      {/* overflow-x: clip no html já previne scroll horizontal sem quebrar sticky */}
      <body>{children}</body>
    </html>
  );
}
