import React from "react";
import Image from "next/image";
// import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
import Experience from "@/public/images/experience.png";
import Head from "next/head";
import Link from "next/link";
import { Metadata} from "next";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "การทำบัญชีภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน",
  "name":"การทำบัญชีภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน",
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
    "ประสบการณ์บัญชี การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) หรือการจัดการระบบเงินเดือน ให้คำปรึกษาและวางแผนกลยุทธ์ด้านภาษี การจัดการภาษีมูลค่าเพิ่ม การบริหารจัดการเงินเดือน การวิเคราะห์ข้อมูลทางการเงิน การจัดทำรายงาน หรือการตรวจสอบบัญชี",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/accounting-tax-experience",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "การทำบัญชีภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน",
  description:
    "ประสบการณ์บัญชี การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน การจัดการภาษีมูลค่าเพิ่มการวิเคราะห์ข้อมูลทางการเงิน หรือการตรวจสอบบัญชี",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "https://accnew.com/accounting-tax-experience",
  },
  openGraph: {
    title: "การทำบัญชีภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน",
    description:
      "ประสบการณ์บัญชี การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) หรือการจัดการระบบเงินเดือน ให้คำปรึกษาและวางแผนกลยุทธ์ด้านภาษี การจัดการภาษีมูลค่าเพิ่ม การบริหารจัดการเงินเดือน การวิเคราะห์ข้อมูลทางการเงิน การจัดทำรายงาน หรือการตรวจสอบบัญชี",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "การทำบัญชีภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน",
    description:
      "ประสบการณ์บัญชี การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน วิเคราะห์ข้อมูลทางการเงิน",
  },
};

function ExperiencePage() {
  return (
    <>
    <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
    
    <div className="container-fluid mx-auto w-full h-auto bg-base-200 mt-4">
      <Nav2bar />
      <div className="flex flex-col sm:w-[90%] xl:w-8/12 mx-auto bg-white mt-[130px] border pt-6 pb-5 mb-6">
        <div className="pl-2 breadcrumbs text-clampxs text-blue-700 min-h-[40px]">
          <ul>
            <li>
              <Link href="/">หน้าหลัก</Link>
            </li>
            <li>
              <Link href="/accounting-tax-experience">บริการบัญชีอย่างมืออาชีพ</Link>
            </li>
          </ul>
        </div>
        <h1 className="text-clampmd font-bold text-center text-blue-700 mb-3">
        เราให้บริการบัญชีอย่างมืออาชีพ
            </h1>
        <div className="text-justify text-clampxs leading-loose sm:my-6 xl:my-11 sm:pl-6 xl:pl-11 sm:pr-4 xl:pr-10 lg:pl-11">
          <Image
            src={Experience}
            alt="ประสบการบัญชี"
            className="md:float-left sm:pb-4 pr-4"
            width={500}
            height={400}
          />          
          <h2 className="font-bold text-blue-600">ประสบการณ์ในการให้บริการบัญชี</h2>
            <p>
            ด้วยประสบการณ์ยาวนานในการให้บริการด้านวิชาชีพ รับทำบัญชี
            ทีมงานของเรามีความเชี่ยวชาญในการแก้ปัญหาและให้คำปรึกษาที่มีประสิทธิภาพแก่ลูกค้า
            ไม่ว่าจะเป็นการวางแผนภาษี การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม
            (VAT) หรือการจัดการระบบเงินเดือน
            เรามุ่งเน้นการให้คำแนะนำที่ถูกต้องและประสบความสำเร็จในทุกขั้นตอน
            เพื่อช่วยให้ลูกค้าสามารถเปลี่ยนเรื่องยากให้กลายเป็นเรื่องง่าย
            เราเชื่อมั่นในความสำคัญของการรักษาผลประโยชน์ของลูกค้าเป็นหลัก
            ด้วยการให้บริการ รับทำบัญชี ที่ครอบคลุมทุกขนาดของธุรกิจ
            ไม่ว่าจะเป็นธุรกิจขนาดเล็ก ขนาดกลาง หรือองค์กรขนาดใหญ่
            เรามีความเชี่ยวชาญเฉพาะในหลากหลายประเภทกิจการ
            และพร้อมที่จะปรับแต่ง โปรแกรมบัญชี
            ให้เหมาะสมกับความต้องการเฉพาะของลูกค้า เพื่อให้ได้ผลลัพธ์ที่ดีที่สุด
            ในด้านการจัดการภาษีอากร ACCOUNTING SYSTEM
            มีความเข้าใจลึกซึ้งเกี่ยวกับกฎหมายและระเบียบข้อบังคับที่เกี่ยวข้อง
            </p>
            <h2 className="font-bold text-blue-600">ให้คำปรึกษาบัญชี ภาษี และวางระบบบัญชี</h2>
            <p>
            เราให้คำปรึกษา วางแผนกลยุทธ์ด้านบัญชีและภาษีที่เหมาะสม
            เพื่อช่วยลดความเสี่ยงและเพิ่มประสิทธิภาพในการบริหารจัดการ
            การจัดการภาษีมูลค่าเพิ่มก็เป็นอีกหนึ่งบริการสำคัญที่เราช่วยให้ลูกค้าสามารถดำเนินงานได้อย่างราบรื่นและสอดคล้องกับข้อกำหนดของกฎหมาย
            ในด้านการบริหารจัดการเงินเดือน ACCOUNTING SYSTEM
            มีความชำนาญในการตั้งค่าระบบที่แม่นยำและเป็นไปตามมาตรฐาน
            เพื่อให้ลูกค้าสามารถจัดการข้อมูลเงินเดือนของพนักงานได้อย่างมีประสิทธิภาพและโปร่งใส
            เราเข้าใจว่าข้อมูลเงินเดือนเป็นข้อมูลสำคัญของธุรกิจ
            ดังนั้นเราจึงให้ความสำคัญกับความถูกต้องและการรักษาความลับของข้อมูล
            บริการของเรายังมุ่งเน้นการพัฒนาระบบบัญชีและภาษีที่ทันสมัย
            โดยใช้เทคโนโลยี และโปรแกรมบัญชี ที่เหมาะสมเพื่อช่วยให้การจัดการข้อมูลทางการเงินของลูกค้ามีความรวดเร็วและง่ายดายมากยิ่งขึ้น
            ไม่ว่าจะเป็นการวิเคราะห์ข้อมูลทางการเงิน การจัดทำรายงาน
            หรือการตรวจสอบบัญชี
            เราพร้อมสนับสนุนให้ธุรกิจของลูกค้าดำเนินไปได้อย่างมั่นคงและเติบโต
            หากคุณกำลังมองหาผู้ให้บริการที่เชี่ยวชาญด้านบัญชีและภาษีอากร
            ACCOUNTING SYSTEM ยินดีให้บริการอย่างมืออาชีพ
            ด้วยความมุ่งมั่นที่จะช่วยให้ธุรกิจของคุณประสบความสำเร็จ
            ติดต่อเราเพื่อขอคำปรึกษาและเริ่มต้นการทำบัญชีที่มีคุณภาพตั้งแต่วันนี้
            </p>
        </div>
      </div>
      <FooterPage />
    </div>
    </>
  );
}

export default ExperiencePage;
