import React from "react";
import Head from "next/head";
import Image from "next/image";
//import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
// import Accspro from "@/public/images/acctax.webp";
import Intro5 from "@/public/images/intro5.webp";
import Link from "next/link";
import { Metadata } from "next";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "โปรแกรมบัญชีออนไลน์ ระบบบัญชีที่มีมาตรฐาน และประสิทธิภาพ",
  name: "โปรแกรมบัญชีออนไลน์ ระบบบัญชีที่มีมาตรฐาน และประสิทธิภาพ",
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
    "ACCOUNTING SYSTEM ให้บริการรับทำบัญชีครบวงจรโดยทีมงานมืออาชีพที่มีประสบการณ์กว่า 20 ปี พร้อมให้คำปรึกษาทางการเงิน วางระบบบัญชี ยื่นภาษี และจัดทำงบการเงินอย่างครบถ้วน มุ่งเน้นความถูกต้อง โปร่งใส และปฏิบัติตามกฎหมายอย่างเคร่งครัด",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/accounting-tax",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

//meta title -> 60 ตัวอักษร
//meta description -> 120–160 ตัวอักษร

export const metadata: Metadata = {
  title: "บริการรับทำบัญชีครบวงจร | ACCOUNTING SYSTEM มืออาชีพ",
  description:
    "รับทำบัญชีครบวงจรโดยทีมงานมืออาชีพ ประสบการณ์กว่า 20 ปี พร้อมวางระบบบัญชี ยื่นภาษี จัดทำงบการเงิน และให้คำปรึกษาทางการเงินอย่างครบถ้วน",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "https://accnew.com/accounting-tax",
  },
  openGraph: {
    title: "บริการรับทำบัญชีครบวงจร | ACCOUNTING SYSTEM มืออาชีพ",
    description:
      "รับทำบัญชีครบวงจรโดยทีมงานมืออาชีพ ประสบการณ์กว่า 20 ปี พร้อมวางระบบบัญชี ยื่นภาษี จัดทำงบการเงิน และให้คำปรึกษาทางการเงินอย่างครบถ้วน",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
    images: [
      {
        url: "https://accnew.com/images/logo.webp", // ปรับเป็นภาพจริงของคุณ
        width: 1200,
        height: 630,
        alt: "ACCOUNTING SYSTEM บริการรับทำบัญชีครบวงจร",
      },
    ],
  },
  twitter: {
    title: "บริการรับทำบัญชีครบวงจร | ACCOUNTING SYSTEM มืออาชีพ",
    description:
      "รับทำบัญชีครบวงจรโดยทีมงานมืออาชีพ ประสบการณ์กว่า 20 ปี พร้อมวางระบบบัญชี ยื่นภาษี จัดทำงบการเงิน และให้คำปรึกษาทางการเงินอย่างครบถ้วน",
    images: ["https://accnew.com/images/logo.webp"],
  },
};

function AccountingPage() {
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
                <Link href="/accounting-tax">
                  ระบบบัญชีมาตรฐาน: ปัจจัยสำคัญสู่ความสำเร็จของธุรกิจ
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[90%] mx-auto text-clampxs mb-6 py-6">
            <h1 className="text-clampmd font-bold text-center text-blue-700 mb-11">
              รับทำบัญชีครบวงจร ด้วยระบบบัญชีมาตรฐาน พร้อมทีมงานมืออาชีพ
            </h1>
            <div className="flex mt-6">
              <div className="w-[30%]">
                <Image
                  src={Intro5}
                  alt="รับทำบัญชี"
                  // className="md:float-left sm:pb-4 pr-8"
                  width={400}
                  height={300}
                />
              </div>
              <div className="w-[70%] leading-loose px-8 text-justify">
                ในยุคปัจจุบันที่การดำเนินธุรกิจมีการแข่งขันสูง
                ระบบบัญชีที่มีมาตรฐานและประสิทธิภาพ
                เป็นสิ่งสำคัญอย่างยิ่งสำหรับการบริหารจัดการธุรกิจอย่างเป็นระบบ
                โดยเฉพาะอย่างยิ่งในด้านการทำบัญชีและการตรวจสอบตัวเลขทางการเงินตามหลักการบัญชีที่ถูกต้อง
                การมีข้อมูลที่ชัดเจนและถูกต้องถือเป็นหัวใจสำคัญในการตัดสินใจทางธุรกิจที่แม่นยำและมีประสิทธิภาพ
              </div>
            </div>
            <br />
            <div>
              <h2 className="font-bold text-blue-600">
                ความสำคัญของระบบบัญชีที่เป็นระบบ
              </h2>
              <p className="leading-loose">
                การทำบัญชีที่เป็นระบบไม่เพียงแต่ช่วยให้ธุรกิจดำเนินงานได้อย่างราบรื่น
                แต่ยังเป็นเครื่องมือสำคัญที่ช่วยเสริมสร้างความน่าเชื่อถือให้กับองค์กร
                ไม่ว่าจะเป็นการจัดการบัญชีรายรับรายจ่าย การวางระบบภาษี
                การบันทึกบัญชีรายเดือน หรือการจัดทำงบการเงินประจำปี
                ทั้งหมดนี้ล้วนเป็นปัจจัยสำคัญที่ช่วยให้ผู้ประกอบการสามารถวางแผนกลยุทธ์และบริหารทรัพยากรได้อย่างมีประสิทธิภาพ
              </p>
              <br />
              <h2 className="font-bold text-blue-600">
                ประสบการณ์ทางด้านบัญชี
              </h2>
              <p className="leading-loose">
                ด้วยประสบการณ์ยาวนานกว่า 20 ปี ACCOUNTING SYSTEM
                ได้รับความไว้วางใจจากบริษัทต่าง ๆ มากมาย ในการให้บริการ
                <span className="font-bold">
                  รับทำบัญชีและให้คำปรึกษาทางการเงิน
                </span>{" "}
                เรามีทีมงานที่มีความเชี่ยวชาญ ความรู้ลึกซึ้งในด้านบัญชี
                และประสบการณ์จริงในการทำบัญชีให้กับธุรกิจหลากหลายประเภท
                ทั้งธุรกิจขนาดเล็ก ขนาดกลาง และองค์กรขนาดใหญ่
                ทีมงานของเราไม่เพียงแค่จัดทำบัญชี
                แต่ยังช่วยวิเคราะห์และให้คำแนะนำเชิงกลยุทธ์
                เพื่อช่วยให้ลูกค้าสามารถเพิ่มประสิทธิภาพในการดำเนินธุรกิจ
                และบรรลุเป้าหมายที่ตั้งไว้
              </p>
              <br />
              <h2 className="font-bold text-blue-600">
                บริการของ ACCOUNTING SYSTEM
              </h2>
              <p className="leading-loose">
                บริการของ ACCOUNTING SYSTEM ครอบคลุมทุกด้านของการทำบัญชี ตั้งแต่
                การวางระบบบัญชี การใช้โปรแกรมบัญชีเพื่อเพิ่มประสิทธิภาพ การทำงาน
                การจัดทำบัญชีภาษีมูลค่าเพิ่ม (VAT) การยื่นภาษีประจำปี
                การจัดทำงบการเงินที่สอดคล้องกับมาตรฐานบัญชี
                ไปจนถึงการตรวจสอบบัญชีโดยผู้ตรวจสอบบัญชีรับอนุญาต (CPA)
                ทุกกระบวนการดำเนินงานของเรามุ่งเน้นความถูกต้อง โปร่งใส
                และปฏิบัติตามกฎหมายอย่างเคร่งครัด
              </p>
              <br />
              <h2 className="font-bold text-blue-600">
                เทคโนโลยีที่ช่วยเพิ่มประสิทธิภาพ
              </h2>
              <p className="leading-loose">
                นอกจากบริการรับทำบัญชีแล้ว ACCOUNTING SYSTEM
                ยังให้ความสำคัญกับโปรแกรมบัญชี
                ในการจัดการข้อมูลทางบัญชีและการเงิน ระบบซอฟต์แวร์บัญชี
                ที่เรานำมาใช้ช่วยให้การจัดทำบัญชีมีความรวดเร็วและแม่นยำยิ่งขึ้น
                พร้อมทั้งสามารถวิเคราะห์ข้อมูลทางการเงินได้อย่างลึกซึ้ง
                เพื่อนำเสนอข้อมูลที่มีประโยชน์ต่อการตัดสินใจของผู้บริหาร
                นอกจากนี้ เราเข้าใจถึงความหลากหลายของธุรกิจแต่ละประเภท
                จึงสามารถปรับแต่งการให้บริการให้เหมาะสมกับความต้องการเฉพาะของลูกค้า
              </p>
              <br />
              <h2 className="font-bold text-blue-600">
                ปฏิบัติตามข้อกำหนดของกฎหมาย
              </h2>
              <p className="leading-loose">
                การทำบัญชีอย่างมืออาชีพไม่ได้เป็นเพียงแค่การปฏิบัติตามข้อกำหนดของกฎหมาย
                แต่ยังเป็นเครื่องมือสำคัญที่ช่วยเสริมสร้างความมั่นคงให้กับธุรกิจในระยะยาว
                ACCOUNTING SYSTEM พร้อมเป็นพันธมิตรทางธุรกิจของคุณ
                ด้วยความมุ่งมั่นที่จะสนับสนุนความสำเร็จในทุก ๆ
                ด้านของการดำเนินธุรกิจ
              </p>
              <br />
              <h2 className="font-bold text-blue-600">
                ติดต่อเราเพื่อเริ่มต้นความสำเร็จของธุรกิจคุณ
              </h2>
              <p className="leading-loose">
                หากคุณกำลังมองหาบริการรับทำบัญชีที่น่าเชื่อถือ หรือ
                <span className="font-bold">โปรแกรมบัญชี</span>
                ที่ช่วยให้ธุรกิจคุณทำงานได้ง่ายขึ้น ACCOUNTING SYSTEM
                ยินดีที่จะเป็นส่วนหนึ่งของความสำเร็จของคุณ
                ติดต่อเราเพื่อขอคำปรึกษาเพิ่มเติมและเริ่มต้น
                การทำบัญชีอย่างมีประสิทธิภาพ สำหรับธุรกิจของคุณตั้งแต่วันนี้
              </p>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default AccountingPage;
