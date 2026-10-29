import React from "react";
//import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
// import Intro4 from "@/public/images/intro4.webp";
import Payment from "@/public/images/payment.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  // "serviceType": "ประสบการณ์บัญชี และภาษี",
  name: "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสมและคุ้มค่า",
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
    "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสมและคุ้มค่า ช่วยผู้ประกอบการประหยัดเวลาและค่าใช้จ่ายในการดำเนินธุรกิจ ไม่ว่าจะเป็นบริการทำบัญชี การจัดการภาษีอากร การจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์ ตลอดจนการบริการด้านประกันสังคมและการปิดงบการเงิน",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/accounting-service-pricing",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสมและคุ้มค่า",
  description:
    "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสมและคุ้มค่า ช่วยประหยัดเวลาและค่าใช้จ่ายในการดำเนินธุรกิจ ไม่ว่าจะเป็นบริการทำบัญชีภาษีประกันสังคม งบการเงิน",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "https://accnew.com/accounting-service-pricing",
  },
  openGraph: {
    title: "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสมและคุ้มค่า",
    description:
      "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสมและคุ้มค่า ช่วยผู้ประกอบการประหยัดเวลาและค่าใช้จ่ายในการดำเนินธุรกิจ ไม่ว่าจะเป็นบริการทำบัญชี การจัดการภาษีอากร การจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์ ตลอดจนการบริการด้านประกันสังคมและการปิดงบการเงิน",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสมและคุ้มค่า",
    description:
      "บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสม ช่วยประหยัดค่าใช้จ่ายในการทำบัญชีภาษี ประกันสังคม งบการเงิน",
  },
};

function Intro4Page() {
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
        <div className="flex flex-col mx-auto w-8/12 sm:w-[90%] lg:w-8/12 bg-white relative text-clampxs mt-[130px] h-auto border mb-10">
          <div className="pl-2 breadcrumbs text-blue-700 min-h-[40px]">
            <ul>
              <li>
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/accounting-service-pricing">
                  ค่าบริการที่เหมาะสม คุ้มค่า
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="flex justify-center mt-2 h-auto">
            <div className="w-1/3 p-6">
              <Image
                src={Intro4}
                alt="ให้บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสม"
                priority
                className="rounded-md pt-10"
              />
            </div>
            <div className="w-2/3 pt-4 pl-4 space-y-4">
              <h1 className="text-clampsm font-bold text-blue-700">
                ให้บริการด้านบัญชีและภาษี ด้วยค่าบริการที่เหมาะสม คุ้มค่า
              </h1>
              <p className="text-justify leading-loose pr-10 indent-9 text-clampxs">
                ACCOUNTING SYSTEM ให้บริการด้านบัญชีและภาษีอากรครบวงจร
                ด้วยค่าบริการที่เหมาะสมและคุ้มค่า
                เรามุ่งมั่นที่จะช่วยผู้ประกอบการประหยัดเวลาและค่าใช้จ่ายในการดำเนินธุรกิจ
                ไม่ว่าจะเป็นบริการทำบัญชี การจัดการภาษีอากร
                การจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์
                ตลอดจนการบริการด้านประกันสังคมและการปิดงบการเงิน
                ทุกกระบวนการถูกออกแบบให้มีความโปร่งใส ซื่อตรง
                และสอดคล้องกับมาตรฐานบัญชีและภาษีอย่างเคร่งครัด
                ทีมงานมืออาชีพของเราพร้อมให้คำปรึกษาและคำแนะนำเฉพาะทางเพื่อช่วยแก้ปัญหาทางบัญชีและภาษีของลูกค้าได้อย่างมีประสิทธิภาพ
                โดยเราให้ความสำคัญกับความรวดเร็วในการบริการและการรักษาผลประโยชน์สูงสุดของลูกค้าเสมอ
                การให้บริการที่ครบถ้วนและเน้นความคุ้มค่าเป็นสิ่งที่ทำให้
                ACCOUNTING SYSTEM ได้รับความไว้วางใจจากลูกค้ามาอย่างยาวนาน
                หากคุณกำลังมองหาผู้ให้บริการด้านบัญชีและภาษีที่มาพร้อมค่าบริการที่เหมาะสมและตอบโจทย์ความต้องการของธุรกิจ
                ACCOUNTING SYSTEM คือตัวเลือกที่คุณสามารถวางใจได้
                ติดต่อเราเพื่อเริ่มต้นการบริการที่ประหยัดเวลา ประหยัดค่าใช้จ่าย
                และช่วยให้ธุรกิจของคุณเติบโตอย่างมั่นคง
              </p>
            </div>
          </div> */}

          <div className="w-[90%] mx-auto mb-10 pt-4 pl-4">
            <h1 className="text-clampmd font-bold text-center text-blue-700 mb-11">
              ให้บริการบัญชีและภาษี ด้วยค่าบริการที่เหมาะสม คุ้มค่า
            </h1>
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              ACCOUNTING SYSTEM: ผู้เชี่ยวชาญด้านบัญชีและภาษีครบวงจร
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              ในโลกของธุรกิจที่มีการแข่งขันสูง
              ผู้ประกอบการต้องการบริการด้านบัญชีและภาษีที่มีประสิทธิภาพ
              ประหยัดค่าใช้จ่าย และตรงตามข้อกำหนดของกฎหมาย ACCOUNTING SYSTEM
              เข้าใจถึงความสำคัญนี้
              และพร้อมให้บริการด้านบัญชีและภาษีอากรแบบครบวงจรด้วยค่าบริการที่เหมาะสมและคุ้มค่า
              เพื่อช่วยให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น
              ไร้ปัญหาด้านการเงินและกฎหมาย
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              บริการของเรา ครอบคลุมทุกความต้องการของธุรกิจ
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              ACCOUNTING SYSTEM
              ให้บริการที่หลากหลายเพื่อรองรับทุกประเภทของธุรกิจ
              ไม่ว่าจะเป็นธุรกิจขนาดเล็ก ธุรกิจขนาดกลาง หรือองค์กรขนาดใหญ่
              เราพร้อมช่วยเหลือคุณในทุกขั้นตอนของการบริหารจัดการด้านบัญชีและภาษี
              เช่น:
            </p>
            <ul className="list-disc leading-loose text-clampxs">
              <li>
                <span className="font-bold pr-1">
                  บริการทำบัญชีรายเดือนและรายปี:
                </span>
                ช่วยให้การดำเนินธุรกิจเป็นไปอย่างเป็นระบบและถูกต้องตามหลักมาตรฐานบัญชี
              </li>
              <li>
                <span className="font-bold pr-1">
                  การยื่นภาษีและวางแผนภาษี:
                </span>
                เพื่อช่วยให้คุณจ่ายภาษีอย่างถูกต้องและลดภาระภาษีที่ไม่จำเป็น
              </li>
              <li>
                <span className="font-bold pr-1">
                  บริการจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์:
                </span>
                อำนวยความสะดวกให้แก่ผู้ประกอบการที่ต้องการเริ่มต้นธุรกิจใหม่
              </li>
              <li>
                <span className="font-bold pr-1">การปิดงบการเงินประจำปี:</span>
                จัดทำงบการเงินตามมาตรฐานบัญชีและข้อกำหนดของหน่วยงานภาครัฐ
              </li>
              <li>
                <span className="font-bold pr-1">บริการด้านประกันสังคม:</span>
                รับดำเนินการขึ้นทะเบียนนายจ้าง ยื่นแบบประกันสังคม
                และบริหารจัดการด้านสวัสดิการของพนักงาน
              </li>
              <li>
                <span className="font-bold pr-1">การตรวจสอบบัญชี:</span>
                โดยผู้สอบบัญชีรับอนุญาต (CPA) ที่มีประสบการณ์
                เพื่อความถูกต้องและโปร่งใสของงบการเงิน
              </li>
              <li>
                <span className="font-bold pr-1">
                  ที่ปรึกษาด้านบัญชีและภาษี:
                </span>
                ให้คำแนะนำเฉพาะทางสำหรับธุรกิจทุกประเภท
                เพื่อช่วยให้คุณวางแผนทางการเงินและภาษีได้อย่างมีประสิทธิภาพ
              </li>
            </ul>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              ค่าบริการที่เหมาะสม คุ้มค่า และโปร่งใส
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              ACCOUNTING SYSTEM ยึดมั่นในการให้บริการที่คุ้มค่าและโปร่งใสที่สุด
              เราเข้าใจดีว่าผู้ประกอบการต้องการควบคุมต้นทุนทางธุรกิจ
              ดังนั้นเราจึงเสนอค่าบริการที่เหมาะสมกับขนาดและประเภทของธุรกิจ
              เพื่อให้ลูกค้าทุกคนได้รับประโยชน์สูงสุดจากบริการของเรา นอกจากนี้
              เรายังมีแพ็คเกจค่าบริการที่ยืดหยุ่นตามความต้องการของลูกค้า
              คุณสามารถเลือกบริการที่เหมาะสมกับธุรกิจของคุณ
              โดยไม่ต้องเสียค่าใช้จ่ายเกินความจำเป็น
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              ทีมงานมืออาชีพ พร้อมให้บริการด้วยมาตรฐานสูงสุด
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              เรามีทีมงานที่มีความเชี่ยวชาญเฉพาะด้านในเรื่องบัญชี ภาษี
              และกฎหมายธุรกิจ ที่พร้อมให้คำแนะนำอย่างมืออาชีพ
              ทุกบริการของเราดำเนินการด้วยความถูกต้อง แม่นยำ และตรงตามกฎหมาย
              100%
              เพื่อให้คุณมั่นใจได้ว่าธุรกิจของคุณจะได้รับการดูแลอย่างดีที่สุด
              ทีมของเรายังติดตามข้อมูลข่าวสารและกฎหมายใหม่ ๆ อย่างใกล้ชิด
              เพื่อให้แน่ใจว่าธุรกิจของลูกค้าจะดำเนินไปตามกฎระเบียบล่าสุดโดยไม่มีปัญหาใด
              ๆ
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              ใช้บริการกับ ACCOUNTING SYSTEM
            </h2>
            <ul className="list-disc leading-loose text-clampxs">
              <li>
                <span className="font-bold pr-1">บริการครบวงจร:</span>
                เราครอบคลุมทุกด้านของการบัญชีและภาษี
                ตั้งแต่การทำบัญชีไปจนถึงการวางแผนภาษี
              </li>
              <li>
                <span className="font-bold pr-1">ค่าบริการคุ้มค่า:</span>
                ราคายุติธรรม ไม่แพงเกินไป และเหมาะสมกับงบประมาณของธุรกิจทุกขนาด
              </li>
              <li>
                <span className="font-bold pr-1">
                  ความเชี่ยวชาญและประสบการณ์:
                </span>
                ทีมงานของเรามีประสบการณ์ในด้านบัญชีและภาษีมายาวนาน
              </li>
              <li>
                <span className="font-bold pr-1">ความรวดเร็วและถูกต้อง:</span>
                เราดำเนินการทุกอย่างอย่างรวดเร็วและแม่นยำ
                เพื่อให้คุณได้รับบริการที่ดีที่สุด
              </li>
              <li>
                <span className="font-bold pr-1">โปร่งใสและไว้วางใจได้:</span>
                ไม่มีค่าธรรมเนียมแอบแฝง เราให้ข้อมูลที่ชัดเจนทุกขั้นตอน
              </li>
            </ul>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              ติดต่อเราเพื่อรับคำปรึกษาฟรี!
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              หากคุณกำลังมองหาผู้ให้บริการบัญชีและภาษีที่มีความน่าเชื่อถือ
              และให้ค่าบริการที่คุ้มค่า ACCOUNTING SYSTEM
              คือตัวเลือกที่เหมาะสมสำหรับคุณ ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี
              และเริ่มต้นการบริหารจัดการบัญชีและภาษีของคุณอย่างมีประสิทธิภาพ
            </p>
            <p className="text-clampxs font-bold text-red-700">
              ติดต่อเราได้ที่:{" "}
              <span className="text-blue-700">02-9313100-2</span>
            </p>
            <p className="text-clampxs font-bold text-red-700">
              เว็บไซต์ของเรา: <span className="text-blue-700">accnew.com</span>
            </p>
          </div>

          <div className="flex justify-center py-8">
            <Image src={Payment} alt="บริการด้านบัญชีและภาษี" />
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default Intro4Page;
