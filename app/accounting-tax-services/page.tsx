import React from "react";
//import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
// import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
// import Intro3 from "@/public/images/intro3.webp";
// import Service7 from "@/public/images/sv-07.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  // "serviceType": "ประสบการณ์บัญชี และภาษี",
  name: "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ",
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
    "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ รับทำบัญชี ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์ พร้อมให้บริการตรวจสอบบัญชี ปรึกษาด้านบัญชีและภาษี รวมถึงบริการยื่นประกันสังคม โดยเน้นความรวดเร็วและถูกต้อง",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/accounting-tax-services",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ",
  description:
    "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ รับทำบัญชี ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน ให้บริการตรวจสอบบัญชี ปรึกษาบัญชีภาษี ประกันสังคม",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "https://accnew.com/accounting-tax-services",
  },
  openGraph: {
    title: "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ",
    description:
      "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ รับทำบัญชี ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์ พร้อมให้บริการตรวจสอบบัญชี ปรึกษาด้านบัญชีและภาษี รวมถึงบริการยื่นประกันสังคม โดยเน้นความรวดเร็วและถูกต้อง",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ",
    description:
      "บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ รับทำบัญชี งบการเงิน จดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน ตรวจสอบบัญชี",
  },
};
function Intro3Page() {
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
                <Link href="/accounting-tax-services">
                  รวดเร็ว และมีประสิทธิภาพ
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="flex justify-center mt-2 h-auto">
            <div className="w-1/3 p-6">
              <Image
                src={Intro3}
                alt="บริการด้านบัญชีและภาษี"
                priority
                className="rounded-md pt-10"
              />
            </div>
            <div className="w-2/3 pt-4 pl-4 space-y-4">
              <h1 className="text-clampsm font-bold text-blue-700">
                ให้บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ
              </h1>
              <p className="text-justify leading-loose pr-10 indent-9 text-clampxs">
                ACCOUNTING SYSTEM ให้บริการครบวงจรด้านบัญชีและภาษี
                เพื่อตอบโจทย์ความต้องการของผู้ประกอบการทุกประเภท เรารับทำบัญชี
                ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท ห้างหุ้นส่วน และพาณิชย์
                พร้อมให้บริการตรวจสอบบัญชี ปรึกษาด้านบัญชีและภาษี
                รวมถึงบริการยื่นประกันสังคม และงานด้านอื่น ๆ ที่เกี่ยวข้อง
                โดยเน้นความรวดเร็วและถูกต้องในการส่งมอบข้อมูล
                เพื่อช่วยให้ผู้ประกอบการสามารถตัดสินใจได้อย่างมั่นใจ
                ด้วยทีมงานมืออาชีพที่มีความเชี่ยวชาญในวิชาชีพบัญชีและภาษี
                เรามุ่งมั่นที่จะให้บริการที่มีคุณภาพสูงสุดและตรงต่อความต้องการของลูกค้า
                เรามีพนักงานรับ-ส่งเอกสารทุกวัน
                เพื่ออำนวยความสะดวกและประหยัดเวลาให้กับผู้ประกอบการ ทั้งนี้
                ทุกกระบวนการดำเนินงานของเราถูกออกแบบมาเพื่อให้มีประสิทธิภาพสูงสุด
                ตั้งแต่การจัดทำบัญชี ยื่นงบการเงิน
                ไปจนถึงการให้คำปรึกษาเชิงกลยุทธ์ด้านภาษี
                ไม่ว่าคุณจะเป็นธุรกิจขนาดเล็ก ขนาดกลาง หรือองค์กรขนาดใหญ่
                ACCOUNTING SYSTEM พร้อมเป็นพันธมิตรที่คุณวางใจได้
                เราให้ความสำคัญกับการบริการรวดเร็ว มีประสิทธิภาพ และโปร่งใส
                เพื่อให้ธุรกิจของคุณเติบโตอย่างมั่นคงและยั่งยืน
                หากคุณกำลังมองหาผู้ให้บริการที่เชี่ยวชาญในด้านบัญชีและภาษี
                พร้อมบริการที่ครอบคลุมและมีคุณภาพ ติดต่อ ACCOUNTING SYSTEM
                วันนี้
                เพื่อเริ่มต้นการทำงานที่มีประสิทธิภาพและรวดเร็วในทุกขั้นตอน
              </p>
            </div>
          </div>

          <div className="flex justify-center py-8">
            <Image src={Service7} alt="ให้บริการด้านบัญชีและภาษี รวดเร็ว" />
          </div> */}

          <div className="w-[90%] mx-auto mb-10 pt-4 pl-4">
            <h1 className="text-clampmd font-bold text-center text-blue-700 mb-3">
              ให้บริการด้านบัญชีและภาษี รวดเร็ว มีประสิทธิภาพ
            </h1>
            <p className="text-clampxs text-justify leading-loose pr-10">
              ในยุคที่ธุรกิจต้องการความรวดเร็วและความแม่นยำในการดำเนินงาน
              ACCOUNTING SYSTEM ขอนำเสนอบริการด้านบัญชีและภาษีแบบครบวงจร
              เพื่อช่วยให้ผู้ประกอบการทุกขนาดสามารถจัดการบัญชีและภาษีได้อย่างมีประสิทธิภาพ
              ลดข้อผิดพลาด และเพิ่มความคล่องตัวในการดำเนินธุรกิจ
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              บริการบัญชีและภาษีที่ครบวงจร
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              ACCOUNTING SYSTEM มีบริการที่ครอบคลุมทุกด้านของงานบัญชีและภาษี
              ไม่ว่าคุณจะเป็นเจ้าของธุรกิจขนาดเล็ก ขนาดกลาง หรือบริษัทขนาดใหญ่
              เราพร้อมให้บริการในทุกขั้นตอนของการดำเนินธุรกิจ ได้แก่:
            </p>
            <ul className="list-disc leading-loose text-clampxs">
              <li>
                <span className="font-bold pr-1">บริการจัดทำบัญชี –</span>
                บันทึกบัญชีรายรับรายจ่ายให้ถูกต้องตามมาตรฐาน
              </li>
              <li>
                <span className="font-bold pr-1">ปิดงบการเงิน – </span>
                จัดทำงบกำไรขาดทุน งบดุล และงบกระแสเงินสด
              </li>
              <li>
                <span className="font-bold pr-1">
                  จดทะเบียนบริษัทและห้างหุ้นส่วน –
                </span>
                บริการจดทะเบียนนิติบุคคลทั้งบริษัทจำกัดและห้างหุ้นส่วนจำกัด
              </li>
              <li>
                <span className="font-bold pr-1">
                  ที่ปรึกษาด้านบัญชีและภาษี –
                </span>
                ให้คำแนะนำเกี่ยวกับกฎหมายภาษีและแนวทางวางแผนภาษีที่เหมาะสม
              </li>
              <li>
                <span className="font-bold pr-1">ยื่นภาษีและประกันสังคม –</span>
                บริการยื่นภาษีมูลค่าเพิ่ม (VAT) ภาษีหัก ณ ที่จ่าย (WHT)
                และประกันสังคมให้กับพนักงาน
              </li>
              <li>
                <span className="font-bold pr-1">ตรวจสอบบัญชี –</span>
                ตรวจสอบความถูกต้องของงบการเงินตามมาตรฐานที่กำหนด
              </li>
              <li>
                <span className="font-bold pr-1">
                  การจัดทำเอกสารสำคัญทางการเงิน –
                </span>
                เช่น หนังสือรับรองทางการเงิน
                และเอกสารที่จำเป็นสำหรับการดำเนินธุรกิจ
              </li>
            </ul>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              มุ่งเน้นความรวดเร็วและความถูกต้อง
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              เราเข้าใจดีว่าความถูกต้องของข้อมูลทางบัญชีและภาษีมีผลกระทบโดยตรงต่อการตัดสินใจทางธุรกิจของคุณ
              ACCOUNTING SYSTEM
              จึงให้ความสำคัญกับความรวดเร็วและแม่นยำในการดำเนินงาน
              โดยเรามีระบบจัดการข้อมูลที่ทันสมัย
              และทีมงานผู้เชี่ยวชาญที่พร้อมให้บริการอย่างมืออาชีพ
              เพื่อให้แน่ใจว่าลูกค้าจะได้รับข้อมูลที่ถูกต้อง ทันเวลา
              และสามารถใช้ประโยชน์ได้สูงสุด
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              ทีมงานมืออาชีพ พร้อมให้คำปรึกษา
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              เรามีทีมงานที่มีประสบการณ์ด้านบัญชีและภาษีโดยตรง
              พร้อมให้คำปรึกษาและวางแผนกลยุทธ์ที่เหมาะสมกับธุรกิจของคุณ
              ไม่ว่าจะเป็นการลดภาระภาษี วางแผนการเงิน
              หรือให้คำแนะนำในการเติบโตทางธุรกิจ
              เราพร้อมช่วยให้ธุรกิจของคุณก้าวไปข้างหน้าอย่างมั่นคง
            </p>
          <br />
            <h2 className="text-clampsm font-bold text-blue-700">
              อำนวยความสะดวกด้วยบริการรับ-ส่งเอกสาร
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              เพื่อลดภาระของลูกค้า เรามีพนักงานรับ-ส่งเอกสารทุกวัน
              ซึ่งช่วยให้ผู้ประกอบการประหยัดเวลาและไม่ต้องเดินทางไปส่งเอกสารด้วยตัวเอง
              คุณสามารถมั่นใจได้ว่าเอกสารของคุณจะได้รับการจัดการอย่างถูกต้องและปลอดภัย
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              เทคโนโลยีและระบบที่ทันสมัย
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              ACCOUNTING SYSTEM ใช้โปรแกรมบัญชีที่ได้รับการพัฒนาขึ้นมาเอง
              เพื่อให้กระบวนการจัดทำบัญชีเป็นไปอย่างมีประสิทธิภาพ ลดความซับซ้อน
              และช่วยให้ลูกค้าสามารถเข้าถึงข้อมูลทางการเงินได้ง่ายขึ้น
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              โปร่งใส มั่นใจได้ในทุกบริการ
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              เราให้ความสำคัญกับความซื่อสัตย์และความโปร่งใสในการให้บริการ
              ลูกค้าทุกคนสามารถมั่นใจได้ว่าทุกกระบวนการทำงานของเรามีมาตรฐาน
              ไม่มีค่าใช้จ่ายแอบแฝง และให้บริการด้วยความจริงใจเสมอ
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">
              พร้อมเป็นพาร์ทเนอร์ที่คุณไว้วางใจ
            </h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              ไม่ว่าคุณจะเป็นผู้ประกอบการรายใหม่ที่เพิ่งเริ่มต้นธุรกิจ
              หรือองค์กรที่ต้องการบริการบัญชีและภาษีที่มีประสิทธิภาพ ACCOUNTING
              SYSTEM
              พร้อมเป็นพาร์ทเนอร์ทางธุรกิจที่ช่วยให้คุณสามารถดำเนินธุรกิจได้อย่างมั่นใจ
              ลดความยุ่งยากด้านบัญชี
              และให้คุณมุ่งเน้นไปที่การเติบโตของธุรกิจได้อย่างเต็มที่
            </p>
            <br />
            <h2 className="text-clampsm font-bold text-blue-700 mb-3">ติดต่อเรา</h2>
            <p className="text-clampxs text-justify leading-loose indent-9 pr-10">
              หากคุณกำลังมองหาผู้ให้บริการบัญชีและภาษีที่รวดเร็ว รวมถึงโปรแกรมบัญชี ที่มีประสิทธิภาพ
              และเชื่อถือได้ ติดต่อ ACCOUNTING SYSTEM วันนี้
              เพื่อรับคำปรึกษาและเริ่มต้นการจัดการบัญชีที่มีประสิทธิภาพและแม่นยำในทุกขั้นตอน
            </p>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default Intro3Page;
