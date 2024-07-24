import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "@/components/Navbar/NavbarDesktop";
import Footer from "@/components/Footer";
import OnlineChat from "@/components/OnlineChat";
import NavbarMobile from "@/components/Navbar/NavbarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDesktop />
        <NavbarMobile/>
        {children}
        <Footer />
        <OnlineChat/>
      </body>
    </html>
  );
}
