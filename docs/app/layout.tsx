import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-native-web/dist"
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from 'next-themes';
import { siteConfig } from "./config/site";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "React",
    "Next.js",
    "React Native UI",
    "Tailwind CSS",
    "solUI",
    "React Aria",
    "Server Components",
    "React Components",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "UI Design System",
  ],
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "SatishSolera",
      url: "https://x.com/SatishSolera",
    },
  ],
 
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

            <Navbar />
          <RootProvider>
            {children}
          </RootProvider>
            <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}
