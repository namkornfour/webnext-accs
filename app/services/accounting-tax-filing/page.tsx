import React from "react";
//import Navbar2Page from "@/components/Navbar2";
import Nav2bar from "@/components/Nav2";
import FooterPage from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head";
import { MdCheck } from "react-icons/md";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "รับทำบัญชี ยื่นแบบภาษี ปิดงบการเงิน ประกันสังคม",
  "name":"รับทำบัญชี ยื่นแบบภาษี ปิดงบการเงิน ประกันสังคม",
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
    "รับทำบัญชี ยื่นแบบภาษี งบการเงิน ประกันสังคม บริการจัดการด้านภาษี การยื่นภาษี ทำรายงานภาษี พร้อมทั้งนำส่งแบบภาษีต่อกรมสรรพากร จัดทำสมุดรายวัน บัญชีแยกประเภท ระบบเงินเดือน ภาษีหัก ณ ที่จ่าย ยื่นแบบภาษีเงินได้ ตรวจสอบรายงานภาษีซื้อ และรายงานภาษีขาย ",
  // "offers": {
  //   "@type": "Offer",
  //   "priceCurrency": "THB",
  //   "price": "5000",
  //   "url": "https://accnew.com/services/accounting"
  // },
  url: "https://accnew.com/services/accounting-tax-experience",
};

// SchemaData description → 200-300 ตัวอักษร
// SEO (Google) → 150-160 ตัวอักษร
// Facebook/LinkedIn → 200-300 ตัวอักษร
// Twitter → 100-120 ตัวอักษร

export const metadata: Metadata = {
  title: "รับทำบัญชี ยื่นแบบภาษี ปิดงบการเงิน ประกันสังคม",
  description:
    "รับทำบัญชี ยื่นแบบภาษี งบการเงิน ประกันสังคม บริการจัดการด้านภาษี การยื่นภาษี ทำรายงานภาษี จัดทำสมุดรายวัน บัญชีแยกประเภท ระบบเงินเดือน ภาษีหัก ณ ที่จ่าย",
  robots: "index follow",
  metadataBase: new URL("https://accnew.com"),
  alternates: {
    canonical: "/services/accounting-tax-experience",
  },
  openGraph: {
    title: "รับทำบัญชี ยื่นแบบภาษี ปิดงบการเงิน ประกันสังคม",
    description:
      "รับทำบัญชี ยื่นแบบภาษี งบการเงิน ประกันสังคม บริการจัดการด้านภาษี การยื่นภาษี ทำรายงานภาษี พร้อมทั้งนำส่งแบบภาษีต่อกรมสรรพากร จัดทำสมุดรายวัน บัญชีแยกประเภท ระบบเงินเดือน ภาษีหัก ณ ที่จ่าย ยื่นแบบภาษีเงินได้ ตรวจสอบรายงานภาษีซื้อ และรายงานภาษีขาย ",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "รับทำบัญชี ยื่นแบบภาษี ปิดงบการเงิน ประกันสังคม",
    description:
      "รับทำบัญชี ยื่นแบบภาษี งบการเงิน ประกันสังคม ทำรายงานภาษี จัดทำสมุดรายวัน บัญชีแยกประเภท ระบบเงินเดือน ภาษีหัก ณ ที่จ่าย",
  },
};

function Service1Page() {
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
              <Link href="/services/accounting-tax-experience">รับทำบัญชี และยื่นแบบภาษี</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center mt-2 h-auto">
          <div className="w-2/3 pt-4 pl-4 space-y-4">
            <h1 className="text-center font-bold text-clampmd text-blue-700">
              รับทำบัญชี และยื่นแบบภาษี
            </h1>
          </div>
          <div className="mt-4 text-clampxs">
            <div className="mb-6">
              <ul className="list-disc ml-10 mr-2 leading-loose">
                  <li>
                    ให้คำแนะนำการจัดทำเอกสาร
                    และการจัดเก็บเอกสารขั้นพื้นฐานในการบันทึกบัญชี
                    รวมถึงเอกสารด้านบัญชีอื่นๆ ที่เกี่ยวข้องกับธุรกิจ
                  </li>
                  <li>วิเคราะห์ข้อมูลในการติดตามผลการดำเนินงาน</li>
                  <li>
                    รายงานงบการเงินที่ถูกต้อง รวดเร็ว
                    เพื่อให้การบริหารผลการดำเนินงานเป็นไปตามเป้าหมายที่กำหนด
                    อย่างมีประสิทธิภาพ
                  </li>
                  <li>
                    บริการจัดการด้านภาษีอากร การยื่นภาษีต่างๆ ผ่านระบบออนไลน์
                    เพื่อความถูกต้องและตรงต่อเวลา
                    ลดความเสี่ยงในข้อผิดพลาดเรื่องกฎหมาย และกฏระเบียบต่างๆ
                  </li>
                  <li>
                    จัดทำสมุดรายวันที่เกี่ยวข้อง
                    <ul>
                      <li>สมุดรายวันทั่วไป</li>
                      <li>สมุดรายวันซื้อ</li>
                      <li>สมุดรายวันขาย</li>
                      <li>สมุดรายวันรับเงิน</li>
                      <li>สมุดรายวันจ่ายเงิน</li>
                    </ul>
                  </li>
                  <li>จัดทำรายละเอียด ประกอบงบการเงิน</li>
                  <li>ตรวจสอบความถูกต้องของงานด้านบัญชี และภาษี</li>
                  <li>ปิดบัญชีสิ้นปี จัดทำรายงานทางการเงิน</li>
                  <li>งบแสดงฐานะการเงิน</li>
                  <li>งบกำไรขาดทุน</li>
                  <li>งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น</li>
                  <li>หมายเหตุประกอบงบการเงิน</li>
              </ul>
            </div>

            <hr />

            <div className="mt-4 ml-10 mr-2 mb-6">
              <h2 className="mb-4 font-bold text-blue-700">
                ด้านการยื่นแบบภาษี
              </h2>
              <p className="font-bold text-blue-700">ประจำเดือน</p>
              <ul className="list-disc leading-loose">
                <li>
                  จัดทำและยื่นภาษีเงินได้พนักงานภาษีหัก ณ ที่จ่าย{" "}
                  <span className="text-orange-500">(แบบยื่นภาษี ภงด.1)</span>
                </li>
                <li>
                  จัดทำ และยื่นภาษีเงินได้บุคคลธรรมดาภาษีหัก ณ ที่จ่าย{" "}
                  <span className="text-orange-500">(แบบยื่นภาษี ภงด.3)</span>
                </li>
                <li>
                  จัดทำและยื่นภาษีเงินได้นิติบุคคลภาษีหัก ณ ที่จ่าย{" "}
                  <span className="text-orange-500">(แบบยื่นภาษี ภงด.53)</span>
                </li>
                <li>
                  จัดทำและยื่นภาษีมูลค่าเพิ่ม - VAT{" "}
                  <span className="text-orange-500">(ภพ.30)</span>
                </li>
                <li>
                  จัดทำและยื่นภาษีธุรกิจเฉพาะ -{" "}
                  <span className="text-orange-500">(ภธ.40)</span>
                </li>
                <li>
                  ตรวจสอบรายงานภาษีซื้อ และรายงานภาษีขายประจำเดือน
                  ให้คำแนะนำลูกค้า จัดทำรายงานภาษีซื้อ และรายงานภาษีขาย
                  เพื่อเป็นการสอบยืนยันรายการระหว่างสำนักงาน
                  และลูกค้าว่ารายการครบถ้วน ถูกต้อง ตรงกัน
                </li>
              </ul>
            </div>

            <div className="mt-4 ml-10 mr-2 mb-6">
              <p className="font-bold text-blue-700">ประจำปี</p>
              <ul className="list-disc leading-loose">
                <li>
                  จัดทำและยื่นภาษีเงินได้นิติบุคคลกลางปี
                  <span className="text-orange-500"> (ภงด.51)</span>{" "}
                  และภาษีเงินได้นิติบุคคลสิ้นปี{" "}
                  <span className="text-orange-500">(ภงด.50)</span>
                </li>
                <li>
                  จัดทำและยื่นภาษีเงินได้บุคคธรรมดากลางปี{" "}
                  <span className="text-orange-500">(ภงด.94) </span>
                  และภาษีเงินได้บุคคลธรรมดาสิ้นปี{" "}
                  <span className="text-orange-500"> (ภงด.90, 91)</span>
                </li>
                <li>
                  จัดทำและยื่นแบบนำส่งงบการเงินต่อกระทรวงพาณิชย์{" "}
                  <span className="text-orange-500">(สบช.3)</span>
                </li>
                <li>
                  จัดทำและยื่นภาษีหัก ณ ที่จ่ายพนักงานประจำปี{" "}
                  <span className="text-orange-500">(ภงด.1ก)</span>
                </li>
                <li>ขึ้นทะเบียนเป็นผู้ทำบัญชีให้แก่ธุรกิจของท่าน</li>
                <li>
                  ทำการปิดบัญชีเพื่อจัดทำงบแสดงฐานะทางการเงิน
                  งบแสดงผลการดำเนินงาน
                  เมื่อสิ้นงวดบัญชีพร้อมทั้งนำส่งงบการเงินให้ทันตามเวลาที่กฎหมายกำหนดไว้
                </li>
                <li>
                  จัดหาผู้สอบบัญชีรับอนุญาตที่มีคุณภาพ
                  เพื่อตรวจสอบให้ตรงตามมาตรฐานการสอบบัญชีทั่วไป
                </li>
              </ul>
            </div>

            <hr />
            <div className="mt-4 ml-10 mr-2 mb-6">
              <p className="font-bold text-blue-700">บุคคลธรรมดา</p>
              <ul className="list-disc leading-loose">
                <li>
                  จัดทำ และยื่นแบบภาษีเงินได้บุคคลธรรมดา กลางปี{" "}
                  <span className="text-orange-500">(แบบยื่นภาษี ภงด.94)</span>
                </li>
                <li>
                  จัดทำ และยื่นแบบภาษีเงินได้บุคคลธรรมดา สิ้นปี{" "}
                  <span className="text-orange-500">(แบบยื่นภาษี ภงด.90)</span>
                </li>
              </ul>
            </div>

            <hr />
            <div className="mt-4 ml-10 mr-2 mb-6">
              <p className="font-bold mb-2 text-blue-700">รายละเอียดของงานแต่ละแบบ</p>

              <table className="table table-hover table-font table-bordered">
                <thead className="sticky top-[105px] sm:top-[105px] xl:top-[105px] bg-blue-500 text-white">
                  <tr className="text-base font-bold">
                    <th style={{ width: "0.5%" }} className="text-center">
                      ลำดับ
                    </th>
                    <th style={{ width: "59.5%" }} className="text-center">
                      รายละเอียดงาน
                    </th>
                    <th
                      style={{ width: "10%" }}
                      className="text-center bg-success"
                    >
                      Plan 1
                    </th>
                    <th
                      style={{ width: "10%" }}
                      className="text-center bg-secondary"
                    >
                      Plan 2
                    </th>
                    <th
                      style={{ width: "10%" }}
                      className="text-center bg-primary"
                    >
                      Plan 3
                    </th>
                    <th
                      style={{ width: "10%" }}
                      className="text-center bg-info"
                    >
                      Plan 4
                    </th>
                  </tr>
                </thead>

                <tbody className="text-base z-10">
                  <tr>
                    <td className="text-center">1</td>
                    <td className="headerColor pl-2">
                      ตรวจสอบและจัดเตรียมเอกสารประกอบการลงบัญชี
                    </td>
                    <td className="text-center bg-success">
                      <MdCheck className="mx-auto"/>
                    </td>
                    <td className="text-center bg-secondary">
                      <MdCheck className="mx-auto" />
                    </td>
                    <td className="text-center bg-primary">
                      <MdCheck className="mx-auto"/>
                    </td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">2</td>
                    <td className="headerColor pl-2">
                      ลงบันทึกบัญชีตามเอกสาร หลักฐานการบัญชี
                      และปิดบัญชีเป็นรายเดือน
                    </td>
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
                    <td className="text-center">3</td>
                    <td className="headerColor pl-2">
                      จัดทำรายงานภาษี พร้อมทั้งนำส่งแบบภาษีต่อกรมสรรพากร
                    </td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td className="pl-2">ภาษีเงินได้หัก ณ ที่จ่าย</td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="bg-info"></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td className="pl-2">ภงด 1 - สำหรับพนักงาน</td>
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
                    <td></td>
                    <td className="pl-2">ภงด 3 - สำหรับบุคคลธรรมดา</td>
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
                    <td></td>
                    <td className="pl-2">ภงด 53 - สำหรับนิติบุคคล</td>
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
                    <td></td>
                    <td className="pl-2">
                      ภงด 54 - สำหรับการจ่ายเงินไปต่างประเทศ
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="text-center bg-primary">
                      <MdCheck className="mx-auto" />
                    </td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td className="pl-2">ภาษีมูลค่าเพิ่ม</td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="bg-info"></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td className="pl-2">ภพ 30 - ภาษีมูลค่าเพิ่มประจำเดือน</td>
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
                    <td></td>
                    <td className="pl-2">
                      ภพ 36 - สำหรับการจ่ายเงินไปต่างประเทศ
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="text-center bg-primary">
                      <MdCheck className="mx-auto" />
                    </td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">4</td>
                    <td className="headerColor pl-2">จัดทำทะเบียนทรัพย์สิน</td>
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
                    <td className="text-center">5</td>
                    <td className="headerColor pl-2">
                      จัดทำสมุดรายวันขั้นต้นทุกเล่มที่เกี่ยวข้องกับกิจการ
                    </td>
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
                    <td className="text-center">6</td>
                    <td className="headerColor pl-2">
                      จัดทำบัญชีแยกประเภททุกประเภทบัญชี
                    </td>
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
                    <td className="text-center">7</td>
                    <td className="headerColor pl-2">
                      ดูแลระบบเงินเดือนของพนักงาน
                    </td>
                    <td className="text-center bg-danger"></td>
                    <td className="text-center bg-danger"></td>
                    <td className="text-center bg-danger"></td>
                    <td className="text-center bg-danger"></td>
                  </tr>

                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">
                      คำนวณเงินเดือนพร้อมภาษีเงินได้บุคคลธรรมดาหัก ณ
                      ที่จ่ายและประกันสังคม
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
                    <td className="text-center"></td>
                    <td className="pl-2">
                      จัดทำใบแจ้งเงินเดือนสรุป เงินได้
                      เงินหักสำหรับพนักงานแต่ละคนประจำเดือน (Payroll Slip)
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">
                      จัดทำหนังสือรับรองสรุป เงินได้
                      เงินหักสำหรับพนักงานแต่ละคนประจำปี (50 ทวิ)
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">8</td>
                    <td className="headerColor pl-2">
                      จัดทำรายงานภาษี
                      พร้อมทั้งนำส่งแบบภาษีเงินได้บุคคลธรรมดาต่อกรมสรรพากร
                    </td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                  </tr>

                  <tr>
                    <td className="text-center pl-2"></td>
                    <td className="pl-2">
                      ภงด 90, 91 - ภาษีเงินได้บุคคลธรรมดาประจำปี
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center pl-2"></td>
                    <td className="pl-2">
                      ภงด 94 - ภาษีเงินได้บุคคลธรรมดากลางปี
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">9</td>
                    <td className="headerColor pl-2">
                      จัดทำ และเตรียมแบบ พร้อมนำส่งสำนักงานประกันสังคม
                    </td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                  </tr>

                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">
                      สปส 1-10 - แบบประกันสังคมประจำเดือน
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
                    <td className="text-center"></td>
                    <td className="pl-2">
                      สปส 1-03, 1-03/1 - แบบแจ้งพนักงานเข้างานใหม
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="text-center bg-primary">
                      <MdCheck className="mx-auto" />
                    </td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">สปส 6-09 - แบบแจ้งพนักงานลาออก</td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="text-center bg-primary">
                      <MdCheck className="mx-auto" />
                    </td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">
                      สปส 1-01 - แบบขึ้นทะเบียนผู้ประกันตน
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
                    <td className="text-center"></td>
                    <td className="pl-2">
                      กท. 26 ก - แบบประเมินเงินสมทบกองทุนเงินทดแทนประจำปี
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="text-center bg-primary">
                      <MdCheck className="mx-auto" />
                    </td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">
                      กท. 20 ก - แบบแสดงเงินค่าจ้างประจำปี
                    </td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="text-center bg-primary">
                      <MdCheck className="mx-auto" />
                    </td>
                    <td className="text-center bg-info">
                      <MdCheck className="mx-auto" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">10</td>
                    <td className="headerColor pl-2">
                      ให้คำปรึกษาและวางแผนด้านภาษีอากร
                    </td>
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
                    <td className="text-center">11</td>
                    <td className="headerColor pl-2">
                      บริการปิดบัญชี นำส่งงบการเงิน และภาษีประจำปี
                    </td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                    <td className="bg-danger"></td>
                  </tr>

                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">ปิดบัญชีและนำส่งงบการเงินประจำปี</td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="bg-info"></td>
                  </tr>

                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">สบช 3 - แบบนำส่งงบการเงิน</td>
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
                    <td className="text-center"></td>
                    <td className="pl-2">บอจ 5 - บัญชีรายชื่อผู้ถือหุ้น</td>
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
                    <td className="text-center"></td>
                    <td className="pl-2">ยื่นแบบภาษีประจำปี</td>
                    <td className="bg-success"></td>
                    <td className="bg-secondary"></td>
                    <td className="bg-primary"></td>
                    <td className="bg-info"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="pl-2">
                      ภงด -50 - ภาษีเงินได้นิติบุคคลประจำปี
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
                    <td className="text-center"></td>
                    <td className="pl-2">
                      ภงด 51 - ภาษีเงินได้นิติบุคคลครึ่งปี
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
                    <td className="text-center"></td>
                    <td className="pl-2">
                      ภงด 1 ก - สรุปภาษีเงินได้หัก ณ ที่จ่ายประจำปี
                    </td>
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
                      <MdCheck className="mx-auto"/>
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

export default Service1Page;
