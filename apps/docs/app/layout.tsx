import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "react-native-web/dist";

import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "../config/site";

import "./globals.css";

const inter = Inter({
  variable:"--font-inter",
  subsets:["latin"]
})


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
    
  },
  icons:{
icon:"/solui-logo.svg"
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
        className={`${inter.variable}  antialiased`}
      >
        <ThemeProvider
        defaultTheme="system"
        attribute="class">
         
          <div className=" mx-1 md:mx-0">
            <RootProvider>{children}</RootProvider>
          
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
