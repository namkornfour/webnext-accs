import React from "react";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLine } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Image from "next/image";
import QrCode from "@/public/images/line_accs.jpg";

function Footer2Page() {
  return (
    <div
      className="container-fluid w-full mx-auto bg-blue-700 z-0"
      id="contactus"
    >
      <footer className="footer pt-5 pl-5 pr-5 mb-32 sm:w-full lg:w-10/12 2xl:w-9/12 mx-auto h-auto text-clampxs text-white leading-tight sm:grid sm:grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between">
        <nav className="text-clamp2xs">
          <p className="font-bold text-clampxs pb-2 text-green-400">
            บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด
          </p>
          <p className="pb-2">313 ซอยลาดพร้าว 87 แยก 7 (จันทราสุข)</p>
          <p className="pb-2">ถนนลาดพร้าว แขวงคลองเจ้าคุณสิงห์</p>
          <p className="pb-2">เขตวังทองหลาง กรุงเทพมหานคร</p>
          <p className="pb-2">เวลาทำการ วันจันทร์ - ศุกร์ เวลา 8:30 - 17:30 น.</p>
        </nav>
        <nav>
          <p className="font-bold text-clampxs pb-2 text-green-400">ติดต่อเรา</p>
          <p className="flex items-center pb-2">
            <BsTelephoneFill className="text-clampxs text-white" />
            &nbsp;02-9313100-2
          </p>
          <p className="flex items-center pb-2">
            <IoIosMail className="text-clampxs text-white" />
            &nbsp;accsystemthai@gmail.com
          </p>
          <p className="flex items-center pb-2">
            <FaLine className="ttext-clampxs text-white" />
            &nbsp;accscan
          </p>
          {/* <p className="flex items-center">
            <FaFacebookSquare className="text-clampxs text-white" />
            &nbsp;facebook
          </p> */}
        </nav>
        <nav>
          <p className="font-bold text-clampxs pb-2 text-green-400">หน่วยงาน</p>
          <a
            href="http://www.rd.go.th"
            className="hover:text-green-400 w-full pb-2"
            target="_blank"
          >
            กรมสรรพากร
          </a>
          <a
            href="http://www.dbd.go.th"
            className="hover:text-green-400 w-full pb-2"
            target="_blank"
          >
            กรมพัฒนาธุรกิจการค้า
          </a>
          <a
            href="https://www.tfac.or.th"
            className="hover:text-green-400 w-full pb-2"
            target="_blank"
          >
            สภาวิชาชีพบัญชี
          </a>
          <p className="font-bold text-clampxs pb-2 text-green-400">แนะนำ</p>          
          <a
            href="/files/sme-manual.pdf"
            className="hover:text-green-400 w-full pb-2"
            target="_blank"
          >            
            คู่มือ SME
          </a>
          <a
            href="/files/m67-manual.pdf"
            className="hover:text-green-400 w-full pb-2"
            target="_blank"
          >
            การพิจารณาเหตุอันสมควร ตาม ม.67 แห่งประมวลรัษฎากร
          </a>
          <a
            href="/files/docpay-manual.pdf"
            className="hover:text-green-400 w-full pb-2"
            target="_blank"
          >
            คู่มือการจัดทำเอกสารประกอบรายจ่าย
          </a>
        </nav>

        <nav>
          <Link href="/" className="font-bold hover:text-green-400 w-full pb-2 text-green-400">
            หน้าหลัก
          </Link>

          <Link href="/#service" className="hover:text-green-400 w-full pb-2">
            บริการ
          </Link>
          <Link href="/accounting-proposal" className="hover:text-green-400 w-full pb-2">
            ข้อเสนอ
          </Link>
          <Link href="/accounting-advisory" className=" hover:text-green-400 w-full pb-2">
            แนะนำการจัดทำเอกสาร
          </Link>
          <Link href="/aboutus" className="hover:text-green-400 w-full pb-2">
            เกี่ยวกับเรา
          </Link>
        </nav>

        <nav>
          <div>
            <Image
              src={QrCode}
              alt="รับทำบัญชี ปิดงบการเงิน"
              width={100}
              height={100}
              className="max-w-[100px] object-contain"
            />
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-blue-700 z-0 text-white p-3">
        <div className="flex text-clampxs">
          <span>
            <FaUserGroup className="text-clampsm text-orange-400" />
          </span>
          <span>จำนวนเข้าชม</span>
          {/* <a
            title="Web Analytics"
            href="https://statcounter.com/"
            target="_blank"
            aria-label="Read more about Seminole tax hike"
          >
            <img
              className="statcounter w-full max-w-[200px] h-auto"
              src="https://c.statcounter.com/12775956/0/aa0a2e7c/0/"
              alt="Web Analytics"
              width={200}
              height={150}
            />
          </a> */}
        </div>
      </footer>

      <hr className="w-1/3 border-t border-gray-400 mx-auto" />
      <footer className="footer footer-center bg-blue-700 text-white">
        <aside className="m-0 p-0 leading-none">
          <p className="text-clampxs m-0 pt-3 py-5 leading-none">
            Copyright © {new Date().getFullYear()} - All Right Reserved by
            Accounting System
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer2Page;
