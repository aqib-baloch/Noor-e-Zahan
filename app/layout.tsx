import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import { BackgroundLayout } from "@/lib/background-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noor-e-Zahan Beauty Lounge",
  description: "Premier Beauty Salon in Sargodha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cinzel.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        <BackgroundLayout>{children}</BackgroundLayout>
      </body>
    </html>
  );
}
