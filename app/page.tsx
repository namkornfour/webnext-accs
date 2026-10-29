// import Head from "next/head";
// import { Metadata } from "next";
// import NavbarPage from "@/components/Navbar";
import HeaderPage from "@/components/Header";
// import HeaderPage from  '@/app/header/page';
import ServicePage from "@/components/Service";
import ServicesPage from "@/components/Services";
import AcctaxPage from "@/components/Acctax";
// import FooterPage from "@/components/Footer";
// import PrebalPage from "@/components/Prebal";
import MapaccsPage from "@/components/Mapaccs";
import Footer2Page from "@/components/Footer2";
import AdvisePage from "@/components/Advise";
import NavPage from "@/components/Nav";
import { Metadata } from "next";
// import Head from "next/head";

// const schemaData = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   "serviceType": "รับทำบัญชี ตรวจสอบบัญชี",
//   "name":"รับทำบัญชี ตรวจสอบบัญชี",
//   provider: {
//     "@type": "Organization",
//     name: "บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด",
//     url: "https://accnew.com",
//     logo: "https://accnew.com/images/logo.webp",
//     sameAs: [
//       "https://www.facebook.com/accounting-system",
//       "https://twitter.com/accounting-system",
//     ],
//   },
//   description:
//     "รับทำบัญชี ตรวจสอบบัญชี ยื่นภาษี ปิดงบการเงิน โดยใช้เทคโนโลยี และโปรแกรมบัญชี",  
//   url: "https://accnew.com/services/accounting-audit",
// };

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "รับทำบัญชี ตรวจสอบบัญชี",
  description:
    "รับทำบัญชี ตรวจสอบบัญชี ยื่นภาษี ปิดงบการเงิน โดยใช้เทคโนโลยี และโปรแกรมบัญชี",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "/services/accounting-audit",
  },
  openGraph: {
    title: "รับทำบัญชี ตรวจสอบบัญชี",
    description:
      "รับทำบัญชี ตรวจสอบบัญชี ยื่นภาษี ปิดงบการเงิน โดยใช้เทคโนโลยี และโปรแกรมบัญชี",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "รับทำบัญชี ตรวจสอบบัญชี",
    description:
      "รับทำบัญชี ตรวจสอบบัญชี ยื่นภาษี ปิดงบการเงิน โดยใช้เทคโนโลยี และโปรแกรมบัญชี",
  },
};

export default function Home() {

  return (
      <div className="flex flex-col min-h-screen bg-white">
        <NavPage/>
        <div className="flex-grow bg-slate-100">
          <HeaderPage />
          <ServicePage />
          <ServicesPage />
          
          <AdvisePage />
          <AcctaxPage />          
          <MapaccsPage />          
        </div>
        <Footer2Page />
      </div>  
  );
}