import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orange Apparels | Premium Clothing Brand",
  description: "Discover premium quality apparel and fashion. Wear Your Confidence with Orange Apparels - Your trusted clothing brand for men, women, and kids.",
  keywords: [
    "clothing brand",
    "apparel",
    "fashion",
    "men clothing",
    "women clothing",
    "kids clothing",
    "premium quality",
    "orange apparels",
  ],
  authors: [{ name: "Orange Apparels" }],
  creator: "Orange Apparels",
  publisher: "Orange Apparels",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orangeapparels.com",
    title: "Orange Apparels | Premium Clothing Brand",
    description: "Discover premium quality apparel and fashion. Wear Your Confidence with Orange Apparels",
    siteName: "Orange Apparels",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Orange Apparels - Premium Clothing Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange Apparels | Premium Clothing Brand",
    description: "Discover premium quality apparel and fashion. Wear Your Confidence with Orange Apparels",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=630&fit=crop"],
    creator: "@orangeapparels",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://orangeapparels.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF8C00" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#FF8C00" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}