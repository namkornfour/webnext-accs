import React from "react";
//import Navbar2Page from "@/components/Navbar2";
import Nav2Page from "@/components/Nav2";
import FooterPage from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head";
import Sv2 from "@/public/images/sv-02.webp";
import Sv3 from "@/public/images/sv-03.webp";
import Sv4 from "@/public/images/sv-04.webp";
import Sv5 from "@/public/images/sv-05.webp";
import Sv6 from "@/public/images/sv-06.webp";
import Sv7 from "@/public/images/sv-07.webp";
import Sv8 from "@/public/images/sv-08.webp";
import Sv9 from "@/public/images/sv-09.webp";
import Sv10 from "@/public/images/sv-10.webp";
import Sv11 from "@/public/images/sv-11.webp";
import Sv12 from "@/public/images/sv-12.webp";
import Sv13 from "@/public/images/sv-13.webp";
import Sv14 from "@/public/images/sv-14.webp";
import Sv15 from "@/public/images/sv-15.webp";
import Sv16 from "@/public/images/sv-16.webp";
import Sv17 from "@/public/images/sv-17.webp";
import Sv18 from "@/public/images/sv-18.webp";
import Sv19 from "@/public/images/sv-19.webp";
import Sv20 from "@/public/images/sv-20.webp";
import Sv21 from "@/public/images/sv-21.webp";
import Sv22 from "@/public/images/sv-22.webp";
import Sv23 from "@/public/images/sv-23.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  // "serviceType": "ประสบการณ์บัญชี และภาษี",
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
  "description": "ให้บริการรับทำบัญชีจากโปรแกรมบัญชีด้วยมาตรฐานวิชาชีพขั้นสูงทางด้านบัญชีภาษี และจรรยาบรรณที่เข้มงวด โดยยึดถือการให้ความสำคัญกับลูกค้าเป็นหัวใจหลักในการทำงาน ด้วยวิสัยทัศน์ที่ทันสมัยและความเข้าใจในความท้าทายของธุรกิจยุคปัจจุบัน ดูแลและให้คำปรึกษาอย่างใกล้ชิดเพื่อให้ท่านสามารถบริหารธุรกิจได้อย่างมั่นใจ โดยมีทีมงานมืออาชีพ",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  "url": "https://accnew.com/accounting-proposal"
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "บริการรับทำบัญชีจากโปรแกรมบัญชีทำบัญชีภาษี | รับทำบัญชีออนไลน์",
  description:
    "ให้บริการรับทำบัญชีจากโปรแกรมบัญชีด้วยมาตรฐานวิชาชีพขั้นสูงทางด้านบัญชีภาษี โดยยึดถือการให้ความสำคัญกับลูกค้าเป็นหัวใจหลักในการทำงานและความเข้าใจในความท้าทายของธุรกิจ ดูแลและให้คำปรึกษา",
  robots: "index follow",
  openGraph: {
    title: "บริการรับทำบัญชีจากโปรแกรมบัญชีทำบัญชีภาษี | รับทำบัญชีออนไลน์",
    description:
      "ให้บริการรับทำบัญชีจากโปรแกรมบัญชีด้วยมาตรฐานวิชาชีพขั้นสูงทางด้านบัญชีภาษี และจรรยาบรรณที่เข้มงวด โดยยึดถือการให้ความสำคัญกับลูกค้าเป็นหัวใจหลักในการทำงาน ด้วยวิสัยทัศน์ที่ทันสมัยและความเข้าใจในความท้าทายของธุรกิจยุคปัจจุบัน ดูแลและให้คำปรึกษาอย่างใกล้ชิดเพื่อให้ท่านสามารถบริหารธุรกิจได้อย่างมั่นใจ โดยมีทีมงานมืออาชีพ",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "บริการรับทำบัญชีจากโปรแกรมบัญชีทำบัญชีภาษี | รับทำบัญชีออนไลน์",
    description:
      "ให้บริการรับทำบัญชีจากโปรแกรมบัญชีด้วยมาตรฐานทางด้านบัญชีภาษี ในการทำงานและเข้าใจในความท้าทายของธุรกิจ ดูแลและให้คำปรึกษาบัญชีภาษี",
  },
};

function ProposalPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="container-fluid w-full mx-auto">
        <Nav2Page />
        <div className="flex flex-col w-9/12 sm:w-[96%] lg:w-9/12 justify-center mx-auto mt-[140px] space-y-11 bg-white border mb-10">
          <div className="pl-2 breadcrumbs text-clampxs text-blue-700 min-h-[40px]">
            <ul>
              <li>
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/accounting-proposal">ข้อเสนอ</Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center m-10 text-blue-600 font-bold text-2xl">
          ทำไมต้องเลือกใช้บริการ ACCOUNTING SYSTEM?
          </div>
          <div className="flex justify-center items-center">
            <Image src={Sv2} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv3} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv4} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv5} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv6} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv7} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv8} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv9} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv10} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv11} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv12} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv13} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv14} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv15} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv16} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv17} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv18} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv19} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />
          <div className="flex justify-center items-center">
            <Image src={Sv20} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />

          <div className="flex justify-center items-center">
            <Image src={Sv22} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />

          <div className="flex justify-center items-center">
            <Image src={Sv23} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
          <div className="divider" />

          <div className="flex justify-center items-center pb-6">
            <Image src={Sv21} alt="บริการรับทำบัญชีจากโปรแกรมบัญชี" />
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default ProposalPage;
