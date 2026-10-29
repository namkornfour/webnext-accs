import React from "react";
//import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
// import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
// import Intro2 from "@/public/images/intro2.webp";
// import WorkingProcess from "@/public/images/workingprocess.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  // "serviceType": "ประสบการณ์บัญชี และภาษี",
  name: "ผู้เชี่ยวชาญบัญชี และภาษี",
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
    "เชี่ยวชาญบัญชี และภาษี ให้คำปรึกษาแก่ลูกค้าที่เผชิญปัญหาด้านบัญชี ภาษีอากร ปิดงบการเงิน จดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์ งานด้านประกันสังคม ครอบคลุมทุกด้านของการจัดการบัญชีและภาษี การวางแผนภาษี การจัดทำเอกสารทางบัญชี การตรวจสอบบัญชี การจัดการด้านประกันสังคม",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/accounting-expert",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "ผู้เชี่ยวชาญบัญชี และภาษี",
  description:
    "เป็นผู้เชี่ยวชาญบัญชี และภาษี ให้คำปรึกษาปัญหาด้านบัญชี ภาษี ปิดงบการเงิน จดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน ประกันสังคม การจัดการบัญชีและภาษี ตรวจสอบบัญชี",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "https://accnew.com/accounting-expert",
  },
  openGraph: {
    title: "ผู้เชี่ยวชาญบัญชี และภาษี",
    description:
      "เชี่ยวชาญบัญชี และภาษี ให้คำปรึกษาแก่ลูกค้าที่เผชิญปัญหาด้านบัญชี ภาษีอากร ปิดงบการเงิน จดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์ งานด้านประกันสังคม ครอบคลุมทุกด้านของการจัดการบัญชีและภาษี การวางแผนภาษี การจัดทำเอกสารทางบัญชี การตรวจสอบบัญชี การจัดการด้านประกันสังคม",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "ผู้เชี่ยวชาญบัญชี และภาษี",
    description:
      "เชี่ยวชาญบัญชี และภาษี ให้คำปรึกษาปัญหาด้านบัญชี ภาษี ปิดงบการเงิน จดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน ประกันสังคม",
  },
};

function Intro2Page() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* <link rel="canonical" href="https://accnew.com/accounting-expert"/> */}
      </Head>
      <div className="container-fluid bg-base-200">
        <Nav2bar />
        <div className="flex flex-col mx-auto w-8/12 sm:w-[90%] lg:w-8/12 bg-white relative text-clampxs mt-[130px] h-auto border mb-10">
          <div className="pl-2 breadcrumbs text-blue-700 min-h-[40px]">
            <ul>
              <li>
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/accounting-expert">ผู้เชี่ยวชาญบัญชี และภาษี</Link>
              </li>
            </ul>
          </div>

          {/* <div className="flex justify-center mt-2 h-auto">
            <div className="w-1/3 p-6">
              <Image
                src={Intro2}
                alt="ผู้เชี่ยวชาญบัญชี และภาษี"
                priority
                className="rounded-md pt-10"
              />
            </div>
            <div className="w-2/3 pt-4 pl-4 space-y-4">
              <h1 className="text-clampsm font-bold text-blue-700">
                ผู้เชี่ยวชาญบัญชี และภาษี
              </h1>
              <p className="text-justify leading-loose pr-10 indent-9 text-clampxs">
                ACCOUNTING SYSTEM
                มีความเชี่ยวชาญในการให้คำปรึกษาแก่ลูกค้าที่เผชิญปัญหาด้านบัญชี
                ภาษีอากร การปิดงบการเงิน การจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน
                และพาณิชย์ ตลอดจนการดำเนินงานด้านประกันสังคม และงานด้านอื่น ๆ
                ที่เกี่ยวข้อง โดยยึดมั่นในหลักการบัญชีที่ถูกต้องและมาตรฐานสากล
                เพื่อช่วยให้เรื่องยากของลูกค้ากลายเป็นเรื่องง่ายและมีประสิทธิภาพ
                เราให้ความสำคัญกับการรักษาผลประโยชน์ของลูกค้าเป็นอันดับแรก
                พร้อมมุ่งเน้นการส่งมอบบริการที่มีคุณภาพสูงสุดแก่ธุรกิจทุกขนาด
                ไม่ว่าจะเป็นธุรกิจขนาดเล็ก ขนาดกลาง
                หรือองค์กรขนาดใหญ่ในทุกประเภทกิจการ
                ทีมงานของเรามีความเชี่ยวชาญและพร้อมให้คำแนะนำเฉพาะทางที่ตอบโจทย์ความต้องการของลูกค้าอย่างแท้จริง
                บริการของ ACCOUNTING SYSTEM
                ครอบคลุมทุกด้านของการจัดการบัญชีและภาษี
                ไม่ว่าจะเป็นการวางแผนภาษี การจัดทำเอกสารทางบัญชี การตรวจสอบบัญชี
                หรือการจัดการด้านประกันสังคม ทั้งนี้
                เราให้บริการด้วยความโปร่งใสและจริงใจ
                พร้อมช่วยให้ลูกค้าดำเนินธุรกิจได้อย่างมั่นคงและเติบโต
                หากคุณกำลังมองหาผู้เชี่ยวชาญบัญชีและภาษีที่สามารถให้คำปรึกษาได้อย่างมืออาชีพ
                ACCOUNTING SYSTEM พร้อมช่วยคุณในทุกขั้นตอน
              </p>
            </div>
          </div>

          <div className="flex justify-center py-8">
            <Image src={WorkingProcess} alt="รับทำบัญชีภาษี" />
          </div> */}

          <div className="w-[90%] mx-auto pt-4 pl-4 mb-6">
            <h1 className="text-clampmd font-bold text-center text-blue-700">
              ผู้เชี่ยวชาญบัญชี และภาษี: พาร์ทเนอร์ทางธุรกิจที่คุณวางใจได้
            </h1>
            <p className="text-clampxs text-justify leading-loose pr-10 mt-4">
              ในยุคที่เศรษฐกิจกำลังเปลี่ยนแปลงอย่างรวดเร็ว
              การบริหารจัดการบัญชีและภาษีอากรเป็นสิ่งสำคัญที่ไม่อาจมองข้ามได้
              ไม่ว่าคุณจะเป็นเจ้าของธุรกิจขนาดเล็ก ผู้ประกอบการขนาดกลาง
              หรือองค์กรขนาดใหญ่
              การจัดการบัญชีที่มีประสิทธิภาพเป็นกุญแจสำคัญสู่ความสำเร็จของธุรกิจ
              เราจะพูดถึงบทบาทของผู้เชี่ยวชาญด้านบัญชีและภาษี
              รวมถึงเหตุผลที่คุณควรเลือกใช้บริการจาก ACCOUNTING SYSTEM
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-4">
              บริการให้คำปรึกษาด้านบัญชีและภาษีอากร  
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              หนึ่งในปัญหาสำคัญของธุรกิจคือเรื่องบัญชีและภาษีอากร
              การทำบัญชีที่ซับซ้อนอาจเป็นเรื่องยากสำหรับเจ้าของธุรกิจที่ไม่มีความเชี่ยวชาญด้านนี้
              ดังนั้นการมีที่ปรึกษาทางบัญชีที่เชี่ยวชาญ
              สามารถช่วยให้ธุรกิจของคุณดำเนินไปอย่างราบรื่นและปฏิบัติตามกฎหมายได้อย่างถูกต้อง
              ACCOUNTING SYSTEM
              มีทีมผู้เชี่ยวชาญที่มีประสบการณ์ยาวนานในด้านบัญชีและภาษี
              พร้อมให้คำแนะนำที่เป็นประโยชน์ต่อธุรกิจของคุณ
              ไม่ว่าจะเป็นเรื่องการวางแผนภาษีที่เหมาะสม
              การช่วยลดภาระภาษีอย่างถูกต้องตามกฎหมาย
              รวมถึงการให้คำปรึกษาด้านการเงินที่ช่วยให้คุณบริหารจัดการทรัพยากรได้อย่างมีประสิทธิภาพ
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              การจัดทำและตรวจสอบงบการเงิน
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              การปิดงบการเงินเป็นกระบวนการสำคัญที่ไม่สามารถมองข้ามได้
              เพราะเกี่ยวข้องโดยตรงกับการบริหารจัดการภาษี การบริหารเงินสด
              และการเติบโตของธุรกิจ ACCOUNTING SYSTEM
              มีทีมผู้เชี่ยวชาญที่สามารถช่วยตรวจสอบ
              และจัดทำงบการเงินให้ถูกต้องตามมาตรฐานบัญชีที่รับรองโดยหน่วยงานที่เกี่ยวข้อง
              บริการของเราครอบคลุมไปถึง:
            </p>
            <ul className="list-disc leading-loose text-clampxs">
              <li>
                <span className="font-bold pr-1">การบันทึกบัญชี</span>
                ตามหลักเกณฑ์ที่ถูกต้อง
              </li>
              <li>
                <span className="font-bold pr-1">การจัดทำงบการเงินประจำปี</span>
                 เพื่อให้ธุรกิจสามารถติดตามรายได้และค่าใช้จ่ายอย่างถูกต้อง
              </li>
              <li>
                <span className="font-bold pr-1">
                  การยื่นภาษีเงินได้และภาษีมูลค่าเพิ่ม (VAT)
                </span>
                เพื่อให้ธุรกิจสามารถดำเนินการได้อย่างถูกต้องตามข้อกำหนดของกฎหมาย
              </li>
              <li>
                <span className="font-bold pr-1">
                  การจัดทำงบกระแสเงินสดและงบกำไรขาดทุน
                </span>
                 เพื่อให้ผู้ประกอบการสามารถวางแผนทางการเงินได้อย่างมีประสิทธิภาพ
              </li>
              <li>
                <span className="font-bold pr-1">
                  การจัดทำงบกระแสเงินสดและงบกำไรขาดทุน
                </span>
                การให้คำปรึกษาด้านมาตรฐานบัญชีและภาษีอากร
                เพื่อช่วยให้ธุรกิจของคุณปฏิบัติตามกฎหมายอย่างถูกต้อง
              </li>
            </ul>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              การจัดทำเอกสารและการจดทะเบียนธุรกิจ
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              การเริ่มต้นธุรกิจไม่ใช่เรื่องง่าย
              การจัดการเอกสารทางบัญชีและภาษีต้องใช้ความเชี่ยวชาญสูง
              ซึ่งหากมีการดำเนินการที่ไม่ถูกต้อง อาจทำให้เกิดปัญหาตามมาในภายหลัง
              ACCOUNTING SYSTEM มีบริการ
              <span className="font-bold pr-1">จัดทำเอกสารบัญชี</span> รวมถึงช่วย
              <span className="font-bold pr-1">
                จดทะเบียนบริษัท ห้างหุ้นส่วน และพาณิชย์
              </span>
              ได้อย่างครบวงจร
              ช่วยให้คุณสามารถดำเนินธุรกิจได้อย่างถูกต้องตามกฎหมาย ลดความซับซ้อน
              และลดความเสี่ยงที่อาจเกิดขึ้นในอนาคต
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              เทคโนโลยีบัญชีสมัยใหม่
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              การนำเทคโนโลยีมาใช้ในการบริหารจัดการบัญชีเป็นสิ่งสำคัญอย่างยิ่งในปัจจุบัน
              เราให้บริการและแนะนำ โปรแกรมบัญชี รวมถึงโปรแกรมบัญชีออนไลน์ ที่ช่วยให้คุณสามารถ:
            </p>
            <ul className="list-disc leading-loose text-clampxs">
              <li>ลดเวลาในการทำบัญชี</li>
              <li>ป้องกันความผิดพลาดที่อาจเกิดจากการคำนวณผิดพลาดของมนุษย์</li>
              <li>
                ใช้ข้อมูลเชิงลึกในการตัดสินใจทางธุรกิจได้อย่างมีประสิทธิภาพ
              </li>
              <li>สามารถเข้าถึงข้อมูลบัญชีได้ทุกที่ทุกเวลา</li>
            </ul>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              ความโปร่งใส และความน่าเชื่อถือ
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              ความน่าเชื่อถือเป็นสิ่งสำคัญในการบริหารธุรกิจ ACCOUNTING SYSTEM
              ให้ความสำคัญกับการทำงานที่โปร่งใส มีระบบตรวจสอบที่ชัดเจน
              ให้ลูกค้าสามารถเข้าถึงข้อมูลการเงินได้ทุกเมื่อที่ต้องการ
              นอกจากนี้เรายังมีมาตรการรักษาความลับของข้อมูลลูกค้าอย่างเข้มงวด
              เพื่อให้มั่นใจว่าธุรกิจของคุณจะได้รับการดูแลอย่างดีที่สุด
              เราเชื่อว่าการให้บริการที่โปร่งใส
              เป็นกุญแจสำคัญในการสร้างความไว้วางใจจากลูกค้า
              ธุรกิจของคุณจะได้รับข้อมูลทางการเงินที่แม่นยำ ชัดเจน
              และสามารถนำไปใช้ตัดสินใจทางธุรกิจได้อย่างมั่นใจ
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              สรุป: ทำไมต้องเลือกใช้บริการ ACCOUNTING SYSTEM?
            </h2>
            <ul className="list-disc leading-loose text-clampxs">
              <li>มีทีมผู้เชี่ยวชาญที่มีประสบการณ์สูงในด้านบัญชีและภาษี</li>
              <li>
                ให้บริการครอบคลุมทุกขนาดธุรกิจ ตั้งแต่ขนาดเล็กไปจนถึงองค์กรใหญ่
              </li>
              <li>ใช้เทคโนโลยีทางบัญชีที่ช่วยเพิ่มประสิทธิภาพในการทำงาน</li>
              <li>มีความโปร่งใส ชัดเจน และมีมาตรฐานในการดำเนินงาน</li>
              <li>
                บริการที่ช่วยลดภาระและข้อผิดพลาดทางบัญชีของคุณได้เป็นอย่างดี
              </li>
              <li>
                สร้างความมั่นใจให้ธุรกิจปฏิบัติตามข้อกำหนดด้านภาษีและแรงงาน
              </li>
            </ul>

            <p className="text-clampxs text-red-700 leading-loose mt-4 mb-3">
              <span className="font-bold pr-1">พร้อมให้บริการแล้ว!</span>
              หากคุณกำลังมองหาผู้เชี่ยวชาญด้านบัญชี
              และที่ปรึกษาทางภาษีที่น่าเชื่อถือ ติดต่อ ACCOUNTING SYSTEM วันนี้
              แล้วให้เราช่วยคุณดูแลธุรกิจของคุณให้มั่นคงและเติบโตไปพร้อมกัน
            </p>
            <p className="text-clampxs font-bold text-red-700">
              ติดต่อเราได้ที่:{" "}
              <span className="text-blue-700">02-9313100-2</span>
            </p>
            <p className="text-clampxs font-bold text-red-700">
              เว็บไซต์ของเรา: <span className="text-blue-700">accnew.com</span>
            </p>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default Intro2Page;
