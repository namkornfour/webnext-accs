import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLine } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import logo from "@/public/logo.jpg";

{
  /* <Image src="/logo.jpg" alt="โปรแกรมบัญชี" layout="fill" objectFit="cover" /> */
}
{
  /* <Image src="/logo.jpg" alt="โปรแกรมบัญชี" layout="responsive" width={16} height={9}/> */
}

function NavbarPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด",
    url: "https://accnew.com",
    logo: "https://accnew.com/header.jpg",
    sameAs: [
      "https://www.facebook.com/accounting system",
      "https://www.twitter.com/accounting system",
    ],
  };

  return (
    <div className="container-fluid w-screen h-28 sm:h-16 2xl:h-28 bg-blue-500 fixed top-0 left-0 z-50">
      <Head>
        <title>โปรแกรมบัญชี</title>
        <meta
          name="description"
          content="โปรแกรมบัญชีออนไลน์ โปรแกรมบัญชีสำเร็จรูป"
        />
        <meta
          name="keywords"
          content="จดบริษัท จดจัดตั้งห้างหุ้นส่วน ปิดงบการเงิน"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="โปรแกรมบัญชี" />
        <meta
          property="og:description"
          content="โปรแกรมบัญชีออนไลน์ โปรแกรมบัญชีสำเร็จรูป"
        />
        {/* <meta property="og:image" content="https://yourwebsite.com/image.jpg" /> */}
        <meta property="og:url" content="https://accnew.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="บัญชี" />
        <meta name="twitter:title" content="โปรแกรมบัญชี" />
        <meta
          name="twitter:description"
          content="โปรแกรมบัญชีออนไลน์ โปรแกรมบัญชีสำเร็จรูป"
        />
        <meta name="twitter:image" content="https://accnew.com/header.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="grid grid-cols-10 h-full w-full">
        <div className="col-span-2 lg:col-span-1 relative bg-white">
          <div className="h-full">
            <Image
              src={logo}
              alt="โปรแกรมบัญชี"
              className="absolute m-0 p-0 h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="col-span-8 lg:col-span-9 bg-blue-100">
          <div className="flex h-[50%] items-center justify-between text-blue-600 font-bold m-0 p-0 md:text-clampxs lg:space-x-1">
            <div className="flex space-x-4 sm:space-x-2 md:space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2 sm:text-clampxs xl:text-clampsm">
                <div>
                  <BsTelephoneFill className="text-clampsm ml-2" />
                </div>
                <div>02-9313100-2</div>
              </div>

              <div className="flex items-center space-x-2 sm:text-clampxs xl:text-clampsm">
                <div>
                  <IoIosMail className="text-clampsm text-blue-500 bg-white" />
                </div>
                <div>accsystemthai@gmail.com</div>
              </div>

              <div className="flex items-center space-x-2 sm:text-clampxs xl:text-clampsm">
                <div>
                  <FaLine className="text-clampsm text-green-500 bg-white" />
                </div>
                <div>accscan</div>
              </div>
            </div>

            <div className="flex items-center pr-6 space-x-3 lg:pr-1 lg:space-x-1 2xl:pr-6">
              <div className="dropdown dropdown-hover hidden lg:block h-full">
                <div tabIndex={0} className="m-1 lg:text-clampxs xl:text-clampsm font-bold">
                  <span className="bg-blue-500 text-white lg:py-1 2xl:py-2 lg:px-1 2xl:px-3 rounded-md">
                    Download Program
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 z-[1] w-[240px] p-2 shadow font-bold"
                >
                  <li>
                    <a
                      className="text-blue-600"
                      href="/files/AccTax 1.1.rar"
                      download
                    >
                      โปรแกรมบัญชี - ACCTAX
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blue-600"
                      href="/files/AccFiles 1.1.rar"
                      download
                    >
                      โปรแกรมจัดการไฟล์ - ACCFILE
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a
                      className="text-orange-600"
                      href="/files/ACCTAX-MANUAL.pdf"
                      download
                    >
                      คู่มือโปรแกรม - ACCTAX
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-orange-600"
                      href="/files/App-AccTax.rar"
                      download
                    >
                      รายงาน และอื่นๆ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="items-center p-1 lg:text-clampxs xl:text-clampsm font-bold text-blue-600 flex-wrap hidden lg:block">
                <div className="flex items-center justify-center h-full">
                  <a href="/files/Accounting.zip" download>
                    <span className="bg-pink-500 text-white font-bold lg:py-1 2xl:py-2 lg:px-1 2xl:px-3 rounded-md">
                      Download คำแนะนำ ในการจัดทำบัญชีเบื้องต้น
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[50%] bg-white sm:text-clampsm lg:text-clampmd xl:text-clamplg justify-end sm:items-center lg:items-end xl:items-center w-full space-x-11 sm:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-11 font-bold mr-8 sm:mr-2 md:mr-1">
            <div className="text-blue-600 hover:text-blue-800">
              <Link href="/">หน้าหลัก</Link>
            </div>
            <div className="text-blue-600 hover:text-blue-800">
              <a href="#service">บริการ</a>
            </div>
            <div className="text-blue-600 hover:text-blue-800">
              <Link href="/proposal">ข้อเสนอ</Link>
            </div>
            <div className="text-blue-600 hover:text-blue-800">
              <Link href="/advise">แนะนำการจัดทำเอกสาร</Link>
            </div>
            <div className="text-blue-600 hover:text-blue-800">
              <Link href="/aboutus">เกี่ยบกับเรา</Link>
            </div>
            <div className="text-blue-600 hover:text-blue-800 pr-6 sm:pr-1 md:pr-4 2xl:pr-10">
              <a href="#contactus">ติดต่อเรา</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NavbarPage;
