import type { Metadata } from "next";
import {  Unna } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { metaDataPage } from "@/customize/data";
import { genTitle } from "@/helpers";
import ThirdLibrary from "@/components/ThridLibrary";

const unna = Unna({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: metaDataPage.title,
  description: metaDataPage.description,
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: metaDataPage.title,
    description: metaDataPage.description,
    siteName: metaDataPage.siteName,
    url: metaDataPage.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className={unna.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ThirdLibrary />
      </body>
    </html>
  );
}
