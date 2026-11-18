//"use client";

import React from "react";
import Image from "next/image";
// import Head from "next/head";
import Link from "next/link";
//import { usePathname } from "next/navigation";
//import { useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLine } from "react-icons/fa6";
import logo from "@/public/images/logo.webp";
// import { usePathname } from "next/navigation";

function NavPage() {
  //   const pathname = usePathname();

  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด",
  //   url: "https://accnew.com",
  //   logo: "https://accnew.com/images/header3.webp",
  //   sameAs: [
  //     "https://www.facebook.com/accounting system",
  //     "https://www.twitter.com/accounting system",
  //   ],
  // };
 
  return (
    // <div className="container-fluid w-full mx-auto bg-white fixed top-0 left-0 z-50">
    <div className="container-fluid w-full mx-auto bg-white sticky top-0 left-0 z-50">
      {/* <Head>
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
      </Head> */}

      <div className="w-full mx-auto bg-green-200 text-blue-600 sm:h-[25px] md:h-[27px] lg:h-[30px]">
        <div className="xs:w-full lg:container mx-auto justify-end flex items-center h-full">
          <div className="flex items-center">
            <BsTelephoneFill className="text-clampxs text-orange-500" />
          </div>
          <div className="flex items-center text-clampxs font-bold font-mono ml-2">
            02-9313100-2
          </div>

          <div className="flex items-center ml-10">
            <FaLine className="text-clampxs text-green-600" />
          </div>
          <div className="flex items-center text-clampxs font-bold font-mono ml-2 mr-6">
            accscan
          </div>
        </div>
      </div>

      <div className="xs:w-full lg:container mx-auto bg-blue-700 m-0 p-0">
        <ul className="menu sm:menu-horizontal bg-white flex justify-between items-center w-full text-black text-clampsm">
          <li>
            <Image
              src={logo}
              // src="/images/logo.jpg"
              alt="โปรแกรมบัญชีฟรี"
              // width={100}
              // height={80}
              priority={true}
              className="m-0 p-0 h-full w-[30px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[150px] 2xl:w-[180px] object-contain"
            />
          </li>

          <li>
            <ul className="flex sm:space-x-0 lg:space-x-1 xl:space-x-2 2xl:space-x-4 list-none">
              <li className="hover:bg-blue-700 hover:text-white hover:rounded-md before:hidden after:hidden">
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
                <a href="#service">บริการ</a>
              </li>
              <li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
                <Link href="/accounting-proposal">ข้อเสนอ</Link>
              </li>
              <li className="hidden lg:block dropdown dropdown-hover z-[1000] hover:bg-blue-700 hover:text-white hover:rounded-md">
                <span tabIndex={0}>Download โปรแกรม</span>
                <ul className="dropdown-content menu shadow bg-base-100 ml-0 pl-0 w-60 text-black">
                  <li className="border-b border-gray-300 hover:bg-blue-700 hover:text-white">
                    <a href="/files/AccTax 1.1.rar" download>
                      โปรแกรมบัญชี - ACCTAX
                    </a>
                  </li>
                  <li className="border-b border-gray-300 hover:bg-blue-700 hover:text-white">
                    <a href="/files/AccFiles 1.1.rar" download>
                      โปรแกรมจัดการไฟล์ - ACCFILE
                    </a>
                  </li>
                  <li className="border-b border-gray-300 hover:bg-blue-700 hover:text-white">
                    <a href="/files/ACCTAX-MANUAL.pdf" download>
                      คู่มือโปรแกรม - ACCTAX
                    </a>
                  </li>
                  <li className="border-b border-gray-300 hover:bg-blue-700 hover:text-white">
                    <a href="/files/App-AccTax.rar" download>
                      รายงาน และอื่นๆ
                    </a>
                  </li>
                  <li className="hover:bg-blue-700 hover:text-white">
                    <a href="/files/Accounting.zip" download>
                      คำแนะนำ การจัดทำบัญชีเบื้องต้น
                    </a>
                  </li>
                </ul>
              </li>

              <li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
                <Link href="/aboutus">เกี่ยบกับเรา</Link>
              </li>
              <li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
                <a href="#contactus">ติดต่อเรา</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavPage;
