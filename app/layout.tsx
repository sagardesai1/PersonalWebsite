import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sagar Desai",
  description: "Sagar Desai's personal website - CTO of SKUhunt",
  keywords: [
    "Sagar Desai",
    "Software Engineer",
    "Software Developer",
    "CTO of SKUhunt",
    "Portfolio",
  ],
  authors: [{ name: "Sagar Desai" }],
  creator: "Sagar Desai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sagardesai.dev/",
    title: "Sagar Desai",
    description: "CTO of SKUhunt, Software Engineer and Developer",
    siteName: "Sagar Desai",
    images: [
      {
        url: "/og-image.png", // Add your OG image path here
        width: 1200,
        height: 630,
        alt: "Sagar Desai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Desai",
    description: "CTO of SKUhunt, Software Engineer and Developer",
    images: ["/og-image.png"], // Same image as OG
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
