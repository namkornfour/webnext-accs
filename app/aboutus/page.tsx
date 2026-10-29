import React from "react";
import Head from "next/head";
//import Navbar2Page from "@/components/Navbar2";
import Nav2Page from "@/components/Nav2";
import FooterPage from "@/components/Footer";
import Image from "next/image";
import Aboutus from "@/public/images/aboutus.webp";
import Link from "next/link";
import { Metadata } from "next";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน",
  name: "การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) การจัดการระบบเงินเดือน",
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
    "ให้บริการ รับทำบัญชี รับสอบบัญชี รับยื่นภาษี รับยื่นภาษีบุคคลธรรมดา ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท จดจัดตั้งห้างฯ จดทะเบียนพาณิชย์ ปรึกษาบัญชีและภาษี รับยื่นประกันสังคม เป็นผู้เชี่ยวชาญด้านบัญชี และภาษี",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/aboutus",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title:
    "การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) หรือการจัดการระบบเงินเดือน",
  description:
    "ให้บริการ รับทำบัญชี รับสอบบัญชี รับยื่นภาษี ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท จดจัดตั้งห้าง จดทะเบียนพาณิชย์ รับยื่นประกันสังคม เป็นผู้เชี่ยวชาญด้านบัญชี",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "https://accnew.com/aboutus",
  },
  openGraph: {
    title:
      "การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) หรือการจัดการระบบเงินเดือน",
    description:
      "ให้บริการ รับทำบัญชี รับสอบบัญชี รับยื่นภาษี รับยื่นภาษีบุคคลธรรมดา ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท จดจัดตั้งห้างฯ จดทะเบียนพาณิชย์ ปรึกษาบัญชีและภาษี รับยื่นประกันสังคม เป็นผู้เชี่ยวชาญด้านบัญชี และภาษี",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title:
      "การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม (VAT) หรือการจัดการระบบเงินเดือน",
    description:
      "ให้บริการ รับทำบัญชี รับสอบบัญชี รับยื่นภาษี ปิดงบการเงิน รับจดทะเบียนจัดตั้งบริษัท จดจัดตั้งห้าง รับยื่นประกันสังคม",
  },
};

function AboutPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      {/* container-fluid bg-base-200 */}
      <div className="flex flex-col min-h-screen bg-base-200">
        <Nav2Page />
        <div className="w-full relative">
          {/* <div className="absolute inset-0 bg-[url('/images/background.jpg')] opacity-90 bg-cover bg-center h-auto w-full"></div> */}
          <div className="flex flex-col mx-auto w-8/12 sm:w-[90%] lg:w-10/12 xl:w-9/12 bg-white relative mt-[130px] border mb-10">
            <div className="pl-2 breadcrumbs text-clampxs text-blue-700 min-h-[40px]">
              <ul>
                <li>
                  <Link href="/">หน้าหลัก</Link>
                </li>
                <li>
                  <Link href="/aboutus">เกี่ยบกับเรา</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-2 text-clampmd font-bold">
              ABOUT US
            </div>
            <div className="flex justify-center mt-2 text-blue-700">
              <h1 className="text-clampmd font-bold">บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด | ACCOUNTING SYSTEM</h1>
            </div>
            <div className="flex justify-center text-blue-700">
              <p className="text-right pt-4 pr-10 whitespace-pre text-clampxs">
                เลขทะเบียนนิติบุคคล
                <span className="text-clampxs font-bold pl-2">
                  0105545090036
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-2 text-blue-700">
              <p className="text-right pr-10 whitespace-pre text-clampxs">
                เลขประจำตัวผู้เสียภาษีอากร
                <span className="text-clampxs font-bold pl-2">
                  0105545090036
                </span>
              </p>
            </div>

            <div className="flex justify-center mt-2 text-blue-700">
              <p className="text-right pr-10 whitespace-pre text-clampxs">
                ทุนจดทะเบียน
                <span className="text-clampxs font-bold pl-2">
                  1,000,000 บาท
                </span>                
              </p>
            </div>
            <br />
            <br />
            <div className="flex flex-col mt-4 px-10 w-5/6 mx-auto">
              <p className="indent-11 text-justify text-clampxs leading-loose">
                บริษัทของเราได้รับความเชื่อถือและไว้วางใจจากลูกค้ามากว่า 20 ปี
                ในการให้บริการด้าน
                <span className="font-bold pl-1 pr-1">
                  รับทำบัญชี รับสอบบัญชี และบริการด้านภาษีครบวงจร
                </span>
                โดยเรามีความเชี่ยวชาญและประสบการณ์ในการดูแลด้านบัญชีและภาษีในทุกประเภทของธุรกิจ
                โดยใช้<span className="font-bold pl-1 pr-1">โปรแกรมบัญชี</span>
                และเทคโนโลยีสมัยใหม่มาช่วยทำงาน ไม่ว่าจะเป็นธุรกิจขนาดเล็ก
                ขนาดกลาง หรือขนาดใหญ่
                เราพร้อมให้คำปรึกษาและบริการที่สามารถตอบโจทย์ความต้องการของลูกค้าได้อย่างครบถ้วน
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                เราบริการ
                <span className="font-bold pl-1 pr-1">รับยื่นภาษี</span>
                ทั้งในรูปแบบภาษีบุคคลธรรมดา และภาษีนิติบุคคล
                ให้ท่านไม่ต้องกังวลกับการคำนวณภาษีที่ซับซ้อนและไม่จำเป็นต้องเสียเวลาศึกษารายละเอียดทางบัญชีและภาษี
                โดยเรามีทีมงานผู้เชี่ยวชาญที่มีความรู้ความสามารถในการจัดการปัญหาด้านบัญชีและภาษีได้อย่างถูกต้องและมีประสิทธิภาพ
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                นอกจากนี้เรายังให้บริการ
                <span className="font-bold pl-1 pr-1">ปิดงบการเงิน</span>
                เพื่อให้ท่านสามารถตรวจสอบรายงานทางการเงินของบริษัทได้อย่างชัดเจนและโปร่งใส
                ซึ่งจะช่วยให้ท่านสามารถตัดสินใจเกี่ยวกับการบริหารจัดการธุรกิจได้อย่างมีประสิทธิภาพ
                รวมถึงบริการ
                <span className="font-bold pl-1 pr-1">
                  จดทะเบียนจัดตั้งบริษัท จดจัดตั้งห้างหุ้นส่วนจำกัด
                </span>
                และ<span className="font-bold pl-1 pr-1">จดทะเบียนพาณิชย์</span>
                ซึ่งท่านสามารถใช้บริการของเราในการเริ่มต้นธุรกิจได้อย่างมั่นใจ
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                บริการของเราไม่ได้จำกัดแค่เพียงการจัดการด้านบัญชีและภาษีเท่านั้น
                เรายังมีบริการ
                <span className="font-bold pl-1 pr-1">ปรึกษาบัญชีและภาษี</span>
                เพื่อช่วยแก้ไขปัญหาต่างๆ ที่เกิดขึ้นในการดำเนินธุรกิจ
                ทั้งในด้านการเงินและการจัดการภาษี
                รวมถึงการให้คำแนะนำเกี่ยวกับกฎหมายภาษีที่เกี่ยวข้อง
                โดยทีมงานที่มีประสบการณ์พร้อมให้คำปรึกษาเพื่อป้องกันความเสี่ยงจากการผิดกฎหมายหรือการเสียภาษีมากเกินไป
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                เรายังมีบริการ
                <span className="font-bold pl-1 pr-1">รับยื่นประกันสังคม</span>
                สำหรับผู้ประกอบการที่มีพนักงาน
                เพื่อให้บริษัทของท่านสามารถปฏิบัติตามกฎหมายได้อย่างถูกต้องและไม่มีปัญหาด้านการประกันสังคม
                โดยการดูแลจากทีมผู้เชี่ยวชาญที่เข้าใจในทุกขั้นตอนของการยื่นประกันสังคมและช่วยลดภาระการดำเนินงานของท่าน
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                บริษัทของเราให้ความสำคัญกับการรักษาผลประโยชน์ของลูกค้าในทุกๆ
                ด้าน และมุ่งเน้นการให้บริการที่มีคุณภาพ
                โดยให้บริการด้านบัญชีและภาษีอากรครบวงจร ไม่ว่าจะเป็นการยื่นภาษี
                การจัดการบัญชี
                หรือการให้คำปรึกษาด้านภาษีที่เหมาะสมกับธุรกิจของท่าน
                เราพร้อมช่วยแก้ไขปัญหาต่างๆ
                ที่เกี่ยวข้องกับองค์กรภาครัฐหรือปัญหาด้านกฎหมายที่ท่านอาจจะพบเจอระหว่างการดำเนินธุรกิจ
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                ด้วยประสบการณ์และความเชี่ยวชาญที่ยาวนานในวงการบัญชีและภาษี
                ทำให้เราสามารถดูแลลูกค้าในทุกๆ ด้านได้อย่างครบถ้วน
                และมั่นใจว่าเราจะทำให้ท่านได้รับผลประโยชน์สูงสุดจากบริการของเรา
                ท่านจึงสามารถมอบหมายให้เราเป็นพันธมิตรทางธุรกิจที่ไว้วางใจได้ในการจัดการทุกเรื่องด้านบัญชีและภาษี
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                การเลือกใช้บริการจากบริษัทของเราไม่เพียงแค่ช่วยให้ท่านสามารถบริหารธุรกิจได้อย่างมีประสิทธิภาพ
                แต่ยังช่วยให้ท่านสามารถจัดการภาษีได้อย่างถูกต้องและตรงตามกฎหมาย
                โดยมีการป้องกันความเสี่ยงทางภาษีและการเงินที่อาจเกิดขึ้นในอนาคต
                นอกจากนี้
                เรายังให้บริการที่ครบวงจรและยืดหยุ่นตามความต้องการของลูกค้า
                เพื่อให้ท่านสามารถโฟกัสกับการขยายธุรกิจได้อย่างเต็มที่
              </p>
              <br />
              <p className="text-justify text-clampxs leading-loose">
                หากท่านกำลังมองหาบริการ
                <span className="font-bold pl-1 pr-1">รับทำบัญชี</span>หรือ
                <span className="font-bold pl-1 pr-1">โปรแกรมบัญชี</span>
                ที่สามารถช่วยให้ธุรกิจของท่านดำเนินไปอย่างราบรื่นและปลอดภัยจากปัญหาภาษี
                เราพร้อมที่จะเป็นส่วนหนึ่งในการช่วยพัฒนาธุรกิจของท่านให้เติบโตอย่างยั่งยืน
              </p>
            </div>
            <div className="flex justify-center mx-auto pb-8 sm:w-[96%] lg:w-4/6">
              <Image src={Aboutus} alt="ให้บริการบัญชี ยื่นภาษี งบการเงิน" />
            </div>
          </div>
        </div>
        {/* <FooterPage className="mt-auto" /> */}
        {/* <div className="mt-auto"> */}
        <FooterPage />
        {/* </div> */}
      </div>
    </>
  );
}

export default AboutPage;
