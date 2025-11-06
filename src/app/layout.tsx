import type { Metadata } from "next";
// 1. Import the Inter font
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 2. Set up the font with the 'variable' optionn
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // This creates a CSS variable
});

export const metadata: Metadata = {
  title: "Dealer Transparency",
  description: "Blending 30 Years of Experience with Intelligent Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. Apply the font variable and global styles */}
      <body className={`${inter.variable} font-sans bg-white antialiased`}>
        <Header />
        {children} {/* This is where your app/page.tsx will be rendered */}
        <Footer />
      </body>
    </html>
  );
}