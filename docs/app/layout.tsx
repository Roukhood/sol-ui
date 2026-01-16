import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-native-web/dist"
import Navbar from "@/src/components/ui/navbar";
import Footer from "@/src/components/ui/footer";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from 'next-themes';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sol-ui",
  description: "Make Your Android Screens Better with sol-ui",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


        <ThemeProvider attribute='class'>

          <RootProvider>
            <Navbar />
            {children}
            <Footer />
          </RootProvider>

        </ThemeProvider>

      </body>
    </html>
  );
}
