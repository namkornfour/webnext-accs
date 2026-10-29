import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { Sarabun } from "next/font/google";
// import { useEffect } from "react";

const sarabun = Sarabun({
  weight: ["400", "700"], // ระบุน้ำหนักฟอนต์ที่ต้องการ
  variable: "--font-sarabun", // ใช้ CSS variable เพื่อควบคุมฟอนต์
  subsets: ["latin", "thai"],
  display: "swap", // ช่วยให้ฟอนต์โหลดเร็วขึ้น
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // ป้องกัน Flash of Unstyled Text (FOUT)
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  // "serviceType": "ประสบการณ์บัญชี และภาษี",
  "name":"โปรแกรมบัญชี โปรแกรมบัญชีออนไลน์",
  "provider": {
    "@type": "Organization",
    "name": "บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด",
    "url": "https://accnew.com",
    "logo": "https://accnew.com/images/logo.webp",
    "sameAs": [
      "https://www.facebook.com/accounting-system",
      "https://twitter.com/accounting-system"
    ]
  },
  "description": "",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  "url": "https://accnew.com"
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "โปรแกรมบัญชีออนไลน์ | รับทำบัญชีออนไลน์",
  description:
    "โปรแกรมบัญชีออนไลน์ รับทำบัญชีออนไลน์ รับสอบบัญชี รับยื่นภาษี ยื่นประกันสังคม ปิดงบการเงิน ตรวจบัญชี ทำภาษีหัก ณ ที่จ่าย",
  keywords: "โปรแกรมบัญชีออนไลน์ รับทำบัญชีออนไลน์ รับสอบบัญชี รับยื่นภาษี ยื่นประกันสังคม ปิดงบการเงิน ตรวจบัญชี ทำภาษีหัก ณ ที่จ่าย",
  robots: "index, follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "โปรแกรมบัญชีออนไลน์ | รับทำบัญชีออนไลน์",
    description:
      "โปรแกรมบัญชีออนไลน์ รับทำบัญชีออนไลน์ รับสอบบัญชี รับยื่นภาษี ยื่นประกันสังคม ปิดงบการเงิน ตรวจบัญชี ทำภาษีหัก ณ ที่จ่าย",
    type: "website",
    url: "https://accnew.com",
    siteName: "AccNew",
    images: [
      {
        url: "https://accnew.com/images/logo.webp", // ใส่ URL รูปภาพของเว็บไซต์
        width: 1200,
        height: 630,
        alt: "โปรแกรมบัญชีออนไลน์",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "โปรแกรมบัญชีออนไลน์ | รับทำบัญชีออนไลน์",
    description:
      "โปรแกรมบัญชีออนไลน์ รับทำบัญชีออนไลน์ รับสอบบัญชี รับยื่นภาษี ยื่นประกันสังคม ปิดงบการเงิน ตรวจบัญชี ทำภาษีหัก ณ ที่จ่าย",
    images: ["https://accnew.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        {/* Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1E64MX7Q3P`} // ใส่ Google Tag ID ของคุณ
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          // strategy="lazyOnload" // โหลด GA เมื่อหน้าพร้อม
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1E64MX7Q3P', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        data-theme="light"
        className={`${sarabun.variable} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
