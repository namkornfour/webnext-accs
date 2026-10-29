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
  "serviceType": "ตรวจสอบบัญชี",
  "name":"ตรวจสอบบัญชี",
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
    "ตรวจสอบบัญชี รับรองบัญชีห้างหุ้นส่วน ประเมินความเหมาะสมของหลักการบัญชี และประเมินการทางบัญชี ประเมินความเหมาะสมของการเปิดเผยข้อมูล และการนำเสนองบการเงิน ตรวจสอบงบการเงินประจำปี การตรวจสอบบัญชีตามมาตรฐานการสอบบัญชีที่รับรองทั่วไป การตรวจสอบและรับรองบัญชี",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/services/accounting-audit",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "ตรวจสอบบัญชี",
  description:
    "ตรวจสอบบัญชี รับรองบัญชีห้างหุ้นส่วน ประเมินการทางบัญชี การนำเสนองบการเงิน ตรวจสอบงบการเงินประจำปี การสอบบัญชีที่รับรองทั่วไป โดยผู้เชี่ยวชาญด้านการตรวจสอบบัญชี",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "/services/accounting-audit",
  },
  openGraph: {
    title: "ตรวจสอบบัญชี",
    description:
      "ตรวจสอบบัญชี รับรองบัญชีห้างหุ้นส่วน ประเมินความเหมาะสมของหลักการบัญชี และประเมินการทางบัญชี ประเมินความเหมาะสมของการเปิดเผยข้อมูล และการนำเสนองบการเงิน ตรวจสอบงบการเงินประจำปี การตรวจสอบบัญชีตามมาตรฐานการสอบบัญชีที่รับรองทั่วไป การตรวจสอบและรับรองบัญชี",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "ตรวจสอบบัญชี",
    description:
      "ตรวจสอบบัญชี ประเมินการทางบัญชี การนำเสนองบการเงิน ตรวจสอบงบการเงินประจำปี โดยผู้เชี่ยวชาญด้านตรวจสอบบัญชี",
  },
};

function Service3Page() {
  return (
    <>
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div className="container-fluid bg-base-200">
        <Nav2bar/>
        <div className="flex flex-col mx-auto w-8/12 sm:w-[90%] lg:w-8/12 bg-white relative text-clampxs mt-[130px] h-screen border mb-10">
          <div className="pl-2 breadcrumbs text-blue-700 min-h-[40px]">
            <ul>
              <li>
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/services/accounting-audit">รับตรวจสอบบัญชี</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center text-clampmd mt-2 h-auto">
            <div className="w-2/3 pt-4 pl-4 space-y-4">
              <h1 className="text-center text-clampmd font-bold text-blue-700">
                รับตรวจสอบบัญชี
              </h1>
            </div>
            <div className="mt-11 text-clampxs">
              <div className="mb-6">
                <h2 className="text-blue-700 font-bold ml-10 mb-2">
                  รับตรวจสอบบัญชี โดยผู้สอบบัญชีรับอนุญาต (CPA)
                  พร้อมทีมงานที่มีความรู้ ความสามารถ เน้นถึงคุณภาพของงานตรวจสอบ
                  และความตรงต่อเวลา
                </h2>
                <ul className="list-disc ml-10 mr-2 pl-6 leading-loose">
                  <li>รับตรวจสอบ และแสดงความเห็นต่องบการเงินประจำปี</li>
                  <li>ตรวจสอบบัญชีตามมาตราฐานการสอบบัญชีที่รับรองทั่วไป</li>
                  <li>ทดสอบหลักฐานประกอบรายการ</li>
                  <li>
                    ประเมินความเหมาะสมของหลักการบัญชี และประเมินการทางบัญชี
                  </li>
                  <li>
                    ประเมินความเหมาะสมของการเปิดเผยข้อมูล
                    และการนำเสนองบการเงินโดยรวม
                  </li>
                  <li>
                    ตรวจสอบ และรับรองบัญชีห้างหุ้นส่วน
                    จดทะเบียนโดยผู้สอบบัญชีภาษีอากร
                    โดยปฎิบัติงานตรวจสอบตามหลักการ วิธีการ
                    และเงื่อนไขที่อธิบดีกรมสรรพากรกำหนด (TA)
                  </li>
                  <li>
                    เสนอข้อสังเกตต่อผู้บริหาร
                    เพื่อให้ทราบถึงจุดอ่อนของการควบคุมภายในทางบัญชีที่สำคัญ
                    ข้อผิดพลาดทางบัญชี พร้อมข้อเสนอแนะ
                    ทั้งนี้เพื่อให้งบการเงินแสดงข้อมูลที่ถูกต้องเหมาะสม
                    ส่งผลให้การบริหารงานของกิจการ มีประสิทธิภาพมากยิ่งขึ้น
                  </li>
                </ul>
              </div>
            </div>

            <div className="ml-10 mr-2 pr-6 text-clampxs leading-loose text-justify">
              ACCOUNTING SYSTEM ให้บริการรับตรวจสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต
              (CPA) พร้อมทีมงานที่มีความรู้ ความสามารถ และประสบการณ์สูง
              เราเน้นคุณภาพของงานตรวจสอบ ความละเอียดรอบคอบ
              และการส่งมอบงานตรงต่อเวลา
              เพื่อช่วยให้ธุรกิจของคุณดำเนินไปอย่างมั่นคงและโปร่งใส
              บริการของเราครอบคลุมการตรวจสอบงบการเงินประจำปี
              การตรวจสอบบัญชีตามมาตรฐานการสอบบัญชีที่รับรองทั่วไป
              การตรวจสอบและรับรองบัญชีของกิจการทุกประเภท
              รวมถึงการทดสอบและวิเคราะห์หลักฐานประกอบรายการต่าง ๆ ในงบการเงิน
              นอกจากนี้ เรายังประเมินความเหมาะสมของการเปิดเผยข้อมูลในงบการเงิน
              เพื่อให้มั่นใจว่าเป็นไปตามหลักการบัญชีและข้อกำหนดทางกฎหมาย
              สำหรับการตรวจสอบบัญชีห้างหุ้นส่วนและกิจการอื่น ๆ
              เราดำเนินการโดยผู้สอบบัญชีภาษีอากร (TA) ตามข้อกำหนดของกรมสรรพากร
              พร้อมทั้งให้คำแนะนำที่เป็นประโยชน์ต่อการปรับปรุงการควบคุมภายใน
              ช่วยลดข้อผิดพลาดและเพิ่มประสิทธิภาพการดำเนินงานของธุรกิจ
              การเลือกใช้บริการรับตรวจสอบบัญชีจาก ACCOUNTING SYSTEM
              จะช่วยให้คุณได้รับข้อมูลทางการเงินที่ถูกต้องและเหมาะสม
              สามารถนำไปใช้ในการตัดสินใจทางธุรกิจได้อย่างมั่นใจ
              พร้อมการบริการที่เป็นมืออาชีพและใส่ใจในทุกรายละเอียด
              หากคุณกำลังมองหาผู้เชี่ยวชาญด้านการตรวจสอบบัญชี
              ติดต่อเราเพื่อรับคำปรึกษาและบริการที่ดีที่สุด
            </div>

            <div className="text-blue-700 text-clampxs font-bold mt-10 ml-10 mb-2">
              * (CPA : Certified Public Accountant) คือ
              ผู้ที่ขึ้นทะเบียนและได้รับใบอนุญาตจากสภาวิชาชีพบัญชี
              ตามพระราชบัญญัติวิชาชีพพ.ศ.2547
              มีสิทธิในการตรวจสอบและรับรองบัญชีของบริษัทหรือห้างหุ้นส่วนนิติบุคคล
              ทุกขนาด ทุกประเภท
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default Service3Page;
