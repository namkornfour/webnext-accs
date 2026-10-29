import React from "react";
//import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "บริการยื่นประกันสังคม",
  "name":"บริการยื่นประกันสังคม",
  provider: {
    "@type": "Organization",
    name: "บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด",
    url: "https://accnew.com",
    logo: "https://accnew.com/images/logo.webp",
    sameAs: [
      "https://www.facebook.com/accounting-system",
      "https://twitter.com/accounting-system",
    ],
  },
  description:
    "บริการยื่นประกันสังคม บริการจัดทำแจ้งพนักงานเข้า และออก ประกันสังคม ยื่นแบบ การนำส่งเงินสมทบประกันสังคม ยื่นแบบกองทุนเงินทดแทนที่กระทรวงแรงงาน และสวัสดิการสังคม ให้คำปรึกษาด้านประกันสังคม ให้บริการแจ้งแก้ไข และเปลี่ยนแปลงการเข้า-ออกของพนักงาน",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/services/social-security-filing",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "บริการยื่นประกันสังคม",
  description:
    "บริการยื่นประกันสังคม บริการจัดทำแจ้งพนักงานเข้า และออก ประกันสังคม ยื่นแบบ การนำส่งเงินสมทบประกันสังคม ยื่นแบบกองทุนเงินทดแทนให้คำปรึกษาด้านประกันสังคม",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "/services/social-security-filing",
  },
  openGraph: {
    title: "บริการยื่นประกันสังคม",
    description:
      "บริการยื่นประกันสังคม บริการจัดทำแจ้งพนักงานเข้า และออก ประกันสังคม ยื่นแบบ การนำส่งเงินสมทบประกันสังคม ยื่นแบบกองทุนเงินทดแทนที่กระทรวงแรงงาน และสวัสดิการสังคม ให้คำปรึกษาด้านประกันสังคม ให้บริการแจ้งแก้ไข และเปลี่ยนแปลงการเข้า-ออกของพนักงาน",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "บริการยื่นประกันสังคม",
    description:
      "บริการยื่นประกันสังคม ยื่นแบบการนำส่งเงินสมทบประกันสังคม ยื่นแบบกองทุนเงินทดแทนให้คำปรึกษาด้านประกันสังคม",
  },
};

function Service5Page() {
  return (
    <>
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div className="container-fluid bg-base-200">
        <Nav2bar />
        <div className="flex flex-col mx-auto w-8/12 sm:w-[90%] lg:w-8/12 bg-white relative text-clampxs mt-[130px] h-screen border mb-10">
          <div className="pl-2 breadcrumbs text-blue-700 min-h-[40px]">
            <ul>
              <li>
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/services/social-security-filing">รับบริการยื่นประกันสังคม</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center mt-2 h-auto">
            <div className="w-2/3 pt-4 pl-4 space-y-4">
              <h1 className="text-center text-clampsm font-bold text-blue-700">
                รับบริการยื่นประกันสังคม
              </h1>
            </div>
            <div className="mt-11">
              <div className="mb-6">
                <ul className="list-disc ml-10 mr-2 leading-loose">
                  <li>บริการจัดทำแจ้งพนักงานเข้า และออก ประกันสังคม</li>
                  <li>
                    บริการจัดทำ และยื่นแบบ การนำส่งเงินสมทบประกันสังคมรายเดือน
                    และกองทุนเงินทดแทนที่กระทรวงแรงงาน และสวัสดิการสังคม
                  </li>
                  <li>ให้คำปรึกษาด้านประกันสังคมที่เกี่ยวข้องกับกิจการ</li>
                  <li>
                    บริการจัดทำแบบคำนวณค่าจ้าง เพื่อประกอกการรายงานค่าจ้างตามแบบ
                    กท.20 ประจำปี และยื่นต่อสำนักงาน
                  </li>
                  <li>
                    ให้บริการแจ้งแก้ไข และเปลี่ยนแปลงการเข้า-ออกของพนักงาน
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 ml-11 mr-2 pr-6 text-justify indent-10 leading-loose">
              สำหรับธุรกิจที่ต้องการปฏิบัติตามกฎหมาย และระเบียบของสำนักงานประกันสังคมอย่างครบถ้วน
              เรามีบริการจัดทำและยื่นแบบการนำส่งเงินสมทบประกันสังคมรายเดือน
              รวมทั้งกองทุนเงินทดแทนที่กระทรวงแรงงานและสวัสดิการสังคม
              เพื่อให้ธุรกิจของคุณสามารถทำการบริหารจัดการและปฏิบัติตามข้อกำหนดได้อย่างถูกต้องและทันเวลา
              นอกจากนี้
              เรายังให้คำปรึกษาด้านประกันสังคมที่เกี่ยวข้องกับกิจการของคุณ
              เพื่อให้มั่นใจว่าการดำเนินงานทางประกันสังคมของบริษัทไม่เกิดปัญหาหรือข้อผิดพลาดที่อาจส่งผลกระทบต่อธุรกิจ
              บริการของเรายังรวมถึงการจัดทำแบบคำนวณค่าจ้างและการรายงานค่าจ้างตามแบบ
              กท.20 ประจำปี รวมถึงการยื่นเอกสารต่อสำนักงานประกันสังคม
              และสามารถแจ้งแก้ไขหรือเปลี่ยนแปลงการเข้า-ออกของพนักงานได้อย่างสะดวกและรวดเร็ว
              หากคุณต้องการบริการที่เชี่ยวชาญในการยื่นประกันสังคมและการจัดการด้านประกันสังคมที่ครบวงจร
              ทีมงานของเราพร้อมให้บริการด้วยความเชี่ยวชาญและประสบการณ์สูง
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default Service5Page;
