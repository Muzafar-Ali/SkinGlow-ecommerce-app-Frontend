import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "@/components/Navbar/NavbarDesktop";
import Footer from "@/components/Footer";
import OnlineChat from "@/components/OnlineChat";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skinglow Beauty & Skincare",
  description: "Your one-stop shop for skincare essentials and makeup must-haves. Discover high-quality beauty products to achieve glowing skin.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID', )
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDesktop />
        <NavbarMobile/>
        {children}
        <Footer />
        <OnlineChat/>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
    </html>
  );
}
