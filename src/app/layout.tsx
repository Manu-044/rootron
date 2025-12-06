"use client";

import type { Metadata } from "next";
import { Outfit, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { usePathname } from "next/navigation";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Hide Navbar and Footer for admin and dashboard routes
  const isAdminOrDashboard = pathname?.startsWith('/admin') || pathname?.startsWith('/dashboard') || pathname?.startsWith('/login') || pathname?.startsWith('/signup');

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${orbitron.variable} font-sans bg-background text-foreground antialiased`}>
        <AnimatedBackground />
        <div className="relative z-10">
          {!isAdminOrDashboard && <Navbar />}
          <main className={isAdminOrDashboard ? "" : "min-h-screen"}>
            {children}
          </main>
          {!isAdminOrDashboard && <Footer />}
        </div>
      </body>
    </html>
  );
}
