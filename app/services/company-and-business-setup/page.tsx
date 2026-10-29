import React from "react";
//import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
import Head from "next/head";
import { Metadata } from "next";
import Link from "next/link";
import { MdCheck } from "react-icons/md";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้าง จดทะเบียนพาณิชย์",
  "name":"จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้าง จดทะเบียนพาณิชย์",
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
    "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้างหุ้นส่วนจำกัด จดทะเบียนพาณิชย์ ขอเลขประจำตัวผู้เสียภาษี ขึ้นทะเบียนประกันสังคม จดทะเบียนเปลี่ยนแปลงที่ตั้งสำนักงาน จดทะเบียนเพิ่มทุน และลดทุน เพิ่มวัตถุประสงค์ จดทะเบียนเพิ่มสาขา จดทะเบียนแก้ไขกรรมการ อำนาจกรรมการ จดทะเบียนเลิกกิจการ และชำระบัญชี",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/services/company-and-business-setup",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้าง และจดทะเบียนพาณิชย์",
  description:
    "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้างหุ้นส่วน จดทะเบียนพาณิชย์ ขอเลขประจำตัวผู้เสียภาษี ขึ้นทะเบียนประกันสังคม จดทะเบียนเพิ่มทุน และลดทุน เพิ่มวัตถุประสงค์",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "/services/company-and-business-setup",
  },
  openGraph: {
    title: "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้าง และจดทะเบียนพาณิชย์",
    description:
      "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้างหุ้นส่วนจำกัด จดทะเบียนพาณิชย์ ขอเลขประจำตัวผู้เสียภาษี ขึ้นทะเบียนประกันสังคม จดทะเบียนเปลี่ยนแปลงที่ตั้งสำนักงาน จดทะเบียนเพิ่มทุน และลดทุน เพิ่มวัตถุประสงค์ จดทะเบียนเพิ่มสาขา จดทะเบียนแก้ไขกรรมการ อำนาจกรรมการ จดทะเบียนเลิกกิจการ และชำระบัญชี",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้าง และจดทะเบียนพาณิชย์",
    description:
      "จดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้างหุ้นส่วน จดทะเบียนพาณิชย์ ขึ้นทะเบียนประกันสังคม จดทะเบียนเพิ่มทุน",
  },
};

function Service2Page() {
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
        <div className="flex flex-col mx-auto w-8/12 sm:w-[90%] lg:w-8/12 bg-white relative text-clampxs mt-[130px] h-auto border mb-10">
          <div className="pl-2 breadcrumbs text-blue-700 min-h-[40px]">
            <ul>
              <li>
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/services/company-and-business-setup">
                  รับจดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้าง
                  และจดทะเบียนพาณิชย์
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center mt-2 h-auto">
            <div className="w-2/3 sm:w-full 2xl:w-2/3 pt-4 pl-4 space-y-4">
              <h1 className="text-center text-clampsm font-bold text-blue-700">
                รับจดทะเบียนจัดตั้งบริษัท จดทะเบียนจัดตั้งห้าง
                และจดทะเบียนพาณิชย์
              </h1>
            </div>
            <div className="mt-11 text-clampxs">
              <div className="mb-6">
                <h2 className="text-blue-700 font-bold ml-10 mb-2">
                  จดทะเบียนจัดตั้ง
                </h2>
                <ul className="list-disc ml-10 mr-2 pl-6 leading-loose">
                  <li>จดทะเบียนจัดตั้งบริษัท</li>
                  <li>จดทะเบียนจัดตั้งห้างหุ้นส่วนจำกัด</li>
                  <li>จดทะเบียนพาณิชย์</li>
                  <li>
                    บริการขอเลขประจำตัวผู้เสียภาษี และขึ้นทะเบียนประกันสังคม
                  </li>
                  <li>
                    ดำเนินการคัดเอกสารทั้งจากกรมพัฒนาธุรกิจการค้า
                    พร้อมจัดส่งให้ลูกค้าภายหลังจดทะเบียนเสร็จ
                  </li>
                  <li>
                    ให้ความสะดวกไม่ต้องเดินทาง รับ-ส่งเอกสารให้ถึงที่ทุกขั้นตอน
                  </li>
                  <li>รวดเร็ว ทันเวลา และมีคุณภาพ ราคาเหมาะสม</li>
                </ul>

                <h2 className="text-blue-700 font-bold ml-10 mt-10 mb-2">
                  จดทะเบียนเปลี่ยนแปลงข้อมูลบริษัทจำกัด และห้างหุ้นส่วนจำกัด
                </h2>
                <ul className="list-disc ml-10 mr-2 pl-6 leading-loose">
                  <li>จดทะเบียนเปลี่ยนแปลงที่ตั้งสำนักงาน</li>
                  <li>จดทะเบียนเพิ่มทุน และลดทุน</li>
                  <li>จดทะเบียนแก้ไข และเพิ่มวัตถุประสงค์</li>
                  <li>จดทะเบียนเพิ่มสาขา</li>
                  <li>จดทะเบียนแก้ไขกรรมการ และอำนาจกรรมการ</li>
                  <li>จดทะเบียนเลิกกิจการ และชำระบัญชี</li>
                </ul>
              </div>

              <div className="my-11">
                <p className="ml-10 font-bold text-blue-700">
                  ขั้นตอนการทำงาน และรายละเอียดงาน
                </p>
                <table className="table table-hover table-bordered mt-4">
                  <thead>
                    <tr className="bg-blue-700 text-white font-bold sticky top-[105px] sm:top-[109px] xl:top-[105px] z-10">
                      <th style={{ width: "60%" }} className="text-center text-clampxs">
                        ค่าบริการ
                      </th>
                      <th
                        style={{ width: "10%" }}
                        className="text-center text-clampxs bg-success"
                      >
                        บริการ1
                      </th>
                      <th
                        style={{ width: "10%" }}
                        className="text-center text-clampxs bg-secondary"
                      >
                        บริการ2
                      </th>
                      <th
                        style={{ width: "10%" }}
                        className="text-center text-clampxs bg-primary"
                      >
                        บริการ3
                      </th>
                      <th
                        style={{ width: "10%" }}
                        className="text-center text-clampxs bg-info"
                      >
                        บริการ4
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-clampxs">
                    <tr>
                      <td className="pl-10">จองชื่อบริษัท</td>
                      <td className="text-center bg-success">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">จัดพิมพ์ชุดเอกสารจดทะเบียน</td>
                      <td className="text-center bg-success">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">ตราประทับ (ตรวจสอบตราประทับ)</td>
                      <td className="bg-success"></td>
                      <td className="bg-secondary"></td>
                      <td className="bg-primary"></td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">จดทะเบียนบริษัท</td>
                      <td className="text-center service-font2 bg-success">
                        <span style={{ color: "white" }}>ลูกค้าจดเอง</span>
                      </td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">ขอเลขประจำตัวผู้เสียภาษีอากร</td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">จดทะเบียนภาษีมูลค่าเพิ่ม (VAT)</td>
                      <td className="bg-success"></td>
                      <td className="bg-secondary"></td>
                      <td className="text-center service-font2 bg-primary">
                        <span style={{ color: "white" }}>จดออนไลน์</span>
                      </td>
                      <td className="text-center service-font2 bg-info">
                        <span style={{ color: "white" }}>จดที่กรมสรรพากร</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">
                        ขอรหัส E-Filling จาก DBD (ในกรณีที่ทำบัญชีกับทางบริษัท)
                      </td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">
                        ขอ Username และ Password กรมสรรพากร
                        (ในกรณีที่ทำบัญชีกับทางบริษัท)
                      </td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">
                        คู่มือปฎิบัติเบื้องต้น ภายหลังจากจดทะเบียนแล้ว
                      </td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">
                        รับสิทธิพิเศษส่วนลดค่าทำบัญชี และบริการขอ ภอ.01
                        (ในกรณีที่ทำบัญชีกับทางบริษัท)
                      </td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">
                        โปรแกรมบัญชีฟรี (ในกรณีที่ทำบัญชีกับทางบริษัท)
                      </td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">
                        รายงานการประชุมสำหรับเปิดบัญชีธนาคาร
                        (ในกรณีที่ทำบัญชีกับทางบริษัท)
                      </td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">
                        คู่มือการจัดทำเอกสารการบันทึกบัญชีเบื้องต้น
                        (ในกรณีที่ทำบัญชีกับทางบริษัท)
                      </td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-10">แฟ้มเก็บเอกสารจดทะเบียน</td>
                      <td className="bg-success"></td>
                      <td className="text-center bg-secondary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-primary">
                        <MdCheck className="mx-auto" />
                      </td>
                      <td className="text-center bg-info">
                        <MdCheck className="mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export default Service2Page;
