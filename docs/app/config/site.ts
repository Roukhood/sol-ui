export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "solUI - Beautiful, fast and modern React Native UI Library",
  description: "Make Your Android Screens Better.",
  ogImage: "/solui.png",
  author: "Satish Solera",
  siteUrl: "https://solui-cyan.vercel.app",
  creator: "@solui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solui-cyan.vercel.app",
    siteName: "solUI",
    description: "Make Your Android Screens Better.",
    images: [
      {
        url: "/solui.png",
        width: 1200,
        height: 630,
        alt: "solUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "solUI - Beautiful, fast and modern React Native UI Library",
    description: "Make Your Android Screens Better.",
    image: "/solui.png",
    creator: "@solui",
  },
  links: {
    github: "https://github.com/satish-solera/sol-ui",
    twitter: "https://x.com/SatishSolera",
    docs: "https://solui-cyan.vercel.app",
    sponsor: "https://www.buymeacoffee.com/satishsolen",
  },
};
