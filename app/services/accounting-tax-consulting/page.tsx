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
  "serviceType": "ปรึกษาบัญชีภาษี",
  "name":"ปรึกษาบัญชีภาษี",
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
    "ปรึกษาบัญชีภาษี ปรึกษาการจัดทำบัญชีภาษี ให้คำแนะนำระบบบัญชี วางแผนการเสียภาษีเงินได้ ภาษีมูลค่าเพิ่ม ภาษีโรงเรือน เป็นตัวแทนในการพบเจ้าหน้าที่กรมสรรพากร กรมทะเบียนการค้า กระทรวงแรงงาน ครอบคลุมการวางแผนและจัดทำบัญชี การปิดงบการเงิน",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/services/accounting-tax-consulting",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "ปรึกษาบัญชีภาษี",
  description:
    "ปรึกษาบัญชีภาษี ปรึกษาการจัดทำบัญชีภาษี ให้คำแนะนำระบบบัญชี วางแผนการเสียภาษีเงินได้ ภาษีมูลค่าเพิ่ม ภาษีโรงเรือน เป็นตัวแทนในการพบเจ้าหน้าที่กรมสรรพากร",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "/services/accounting-tax-consulting",
  },
  openGraph: {
    title: "ปรึกษาบัญชีภาษี",
    description:
      "ปรึกษาบัญชีภาษี ปรึกษาการจัดทำบัญชีภาษี ให้คำแนะนำระบบบัญชี วางแผนการเสียภาษีเงินได้ ภาษีมูลค่าเพิ่ม ภาษีโรงเรือน เป็นตัวแทนในการพบเจ้าหน้าที่กรมสรรพากร กรมทะเบียนการค้า กระทรวงแรงงาน ครอบคลุมการวางแผนและจัดทำบัญชี การปิดงบการเงิน",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "ปรึกษาบัญชีภาษี",
    description:
      "ปรึกษาบัญชีภาษี ปรึกษาการจัดทำบัญชีภาษี ให้คำแนะนำระบบบัญชี วางแผนการเสียภาษีเงินได้ ภาษีมูลค่าเพิ่ม",
  },
};

function Service4Page() {
  return (
    <>
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="canonical" href="https://accnew.com/service4"/>
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
                <Link href="/services/accounting-tax-consulting">ปรึกษาบัญชี และภาษี</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center mt-2 h-auto text-clampxs">
            <div className="w-2/3 pt-4 pl-4 space-y-4">
              <h1 className="text-center text-clampmd font-bold text-blue-700">
                ปรึกษาบัญชี และภาษี
              </h1>
            </div>
            <div className="mt-11">
              <div className="mb-6">
                <ul className="list-disc ml-10 mr-2 pl-6 leading-loose">
                  <li>
                    ให้คำปรึกษาการจัดทำบัญชี ตามหลักการควบคุมภายในที่ดี
                    เพื่อการบริหารงานที่มีประสิทธิภาพ
                  </li>
                  <li>
                    ให้คำแนะนำวิธีการ
                    เพื่อผลประโยชน์ด้านภาษีอากรที่ถูกต้องตามกฎหมาย และประหยัด
                  </li>
                  <li>
                    ให้คำแนะนำระบบบัญชี ผังทางเดินเอกสาร
                    รวมถึงเอกสารเบื้องต้นที่จำเป็นในการบันทึกบัญชี
                  </li>
                  <li>
                    วางแผนการเสียภาษีเงินได้ ภาษีมูลค่าเพิ่ม ภาษีโรงเรือน
                    ให้ประหยัด และถูกต้อง
                  </li>
                  <li>
                    เป็นตัวแทนในการพบเจ้าหน้าที่กรมสรรพากร กรมทะเบียนการค้า
                    กระทรวงแรงงานในกรณีที่มีหนังสือเชิญพบ
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-11 ml-10 mr-2 pr-6 text-clampxs leading-loose text-justify">
              ACCOUNTING SYSTEM
              ให้บริการปรึกษาบัญชีและภาษีโดยทีมงานผู้เชี่ยวชาญที่มีความรู้และประสบการณ์ยาวนาน
              เราพร้อมให้คำแนะนำในทุกด้านของการบริหารจัดการบัญชีและภาษี
              เพื่อช่วยให้ธุรกิจของคุณดำเนินไปอย่างมีประสิทธิภาพและโปร่งใส
              บริการปรึกษาบัญชีของเราครอบคลุมการวางแผนและจัดทำบัญชี
              การปิดงบการเงิน รวมถึงการเตรียมเอกสารต่าง ๆ
              เพื่อให้เป็นไปตามหลักการบัญชีที่ถูกต้องและข้อกำหนดทางกฎหมาย
              นอกจากนี้ เรายังให้คำปรึกษาด้านภาษีอากร เช่น การวางแผนภาษี
              การยื่นแบบภาษีประจำปี ภาษีมูลค่าเพิ่ม (VAT) และประกันสังคม
              เพื่อช่วยลดความยุ่งยากและข้อผิดพลาดในการจัดการภาษี
              เรามุ่งเน้นการให้บริการที่ตอบโจทย์ทุกความต้องการของลูกค้า
              ไม่ว่าจะเป็นธุรกิจขนาดเล็กหรือขนาดใหญ่
              ด้วยคำแนะนำที่เข้าใจง่ายและนำไปปฏิบัติได้จริง
              เพื่อช่วยให้คุณประหยัดเวลาและลดค่าใช้จ่าย
              พร้อมรักษาผลประโยชน์ของธุรกิจคุณให้สูงสุด
              หากคุณกำลังมองหาที่ปรึกษาด้านบัญชีและภาษีที่เชื่อถือได้
              ติดต่อเราเพื่อรับบริการที่ครบวงจรและมืออาชีพ
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default Service4Page;
