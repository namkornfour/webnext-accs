import React from "react";
import Link from "next/link";
import { FaThemeco } from "react-icons/fa6";
import { AiFillMacCommand } from "react-icons/ai";
import Image from "next/image";
import Payment from "@/public/images/payment.webp";
import Intro5 from "@/public/images/intro5.webp";
import Experience from "@/public/images/experience.webp";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";
import Business from "@/public/images/businesstype.webp";
import Payroll from "@/public/images/accpayroll.webp";
import { MdCheck } from "react-icons/md";

function ServicesPage() {
  return (
    <div className="container mx-auto w-full bg-slate-100 sm:mt-0 lg:mt-12">
      <div className="flex sm:flex-col sm:w-full lg:flex-row mx-auto bg-white">
        <div className="sm:w-3/4 sm:mx-auto lg:w-1/2 p-10">
          <Image src={Intro5} alt="รับทำบัญชี" className="mx-auto" />
        </div>
        <div className="md:w-full lg:w-1/2 flex flex-col items-center justify-center bg-blue-200">
          <h1 className="font-bold text-clampsm text-blue-700 pt-6">
          ระบบบัญชีมาตรฐาน: ปัจจัยสำคัญสู่ความสำเร็จของธุรกิจ
          </h1>
          <p className="h-full indent-8 text-justify text-clampxs leading-loose px-7 py-4 round-md">
            ในยุคปัจจุบันที่การดำเนินธุรกิจมีการแข่งขันสูง
            ระบบบัญชีที่มีมาตรฐาน
            และประสิทธิภาพเป็นสิ่งที่สำคัญอย่างยิ่งสำหรับการบริหารจัดการธุรกิจอย่างเป็นระบบ
            โดยเฉพาะอย่างยิ่งในด้านการทำบัญชีและการตรวจสอบตัวเลขทางการเงินตามหลักการบัญชีที่ถูกต้อง
            การมีข้อมูลที่ชัดเจนและถูกต้องถือเป็นหัวใจสำคัญในการตัดสินใจทางธุรกิจที่แม่นยำและมีประสิทธิภาพ
            ระบบบัญชีที่ดีไม่เพียงแต่ช่วยให้ธุรกิจดำเนินงานได้อย่างราบรื่น
            แต่ยังเป็นเครื่องมือสำคัญที่ช่วยเสริมสร้างความน่าเชื่อถือให้กับองค์กร
            การทำบัญชีตามมาตรฐานที่กำหนด ไม่ว่าจะเป็นการจัดการรายรับรายจ่าย
            การวางระบบภาษี การบันทึกบัญชีรายเดือน
            ไปจนถึงการจัดทำงบการเงินประจำปี
            ล้วนเป็นปัจจัยสำคัญที่ช่วยให้ผู้ประกอบการสามารถวางแผนกลยุทธ์และบริหารทรัพยากรได้อย่างมีประสิทธิภาพ
            ระบบบัญชีที่ดีไม่เพียงแต่ช่วยให้ธุรกิจดำเนินงานได้อย่างราบรื่น
            แต่ยังเป็นเครื่องมือสำคัญที่ช่วยเสริมสร้างความน่าเชื่อถือให้กับองค์กร
            การทำบัญชีตามมาตรฐานที่กำหนด ไม่ว่าจะเป็นการจัดการรายรับรายจ่าย
            การวางระบบภาษี การบันทึกบัญชีรายเดือน
            ไปจนถึงการจัดทำงบการเงินประจำปี
            <span className="text-white bg-red-600 hover:bg-blue-700 py-1 px-3 ml-2 rounded-md whitespace-nowrap">
              <Link href="/accounting-tax" className="text-clampxs">
                อ่านต่อ...
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="flex sm:flex-col lg:flex-row w-full mx-auto mt-12 bg-white rounded-lg">
        <div className="w-1/2 sm:w-full lg:w-1/2 flex flex-col items-center px-6 pb-2 bg-blue-200">
          <h1 className="font-bold text-clampsm text-blue-700 pt-6">
          เราให้บริการบัญชีอย่างมืออาชีพ
          </h1>
          <p className="text-justify indent-8 text-clampxs leading-loose mt-4">
            ด้วยประสบการณ์ยาวนานในการให้บริการด้านวิชาชีพ<span className="font-bold"> รับทำบัญชี </span>
            ทีมงานของเรามีความเชี่ยวชาญในการแก้ปัญหาและให้คำปรึกษาที่มีประสิทธิภาพแก่ลูกค้า
            ไม่ว่าจะเป็นการวางแผนภาษี การจัดการภาษีอากร การยื่นภาษีมูลค่าเพิ่ม
            (VAT) หรือการจัดการระบบเงินเดือน
            เรามุ่งเน้นการให้คำแนะนำที่ถูกต้องและประสบความสำเร็จในทุกขั้นตอน
            เพื่อช่วยให้ลูกค้าสามารถเปลี่ยนเรื่องยากให้กลายเป็นเรื่องง่าย
            เราเชื่อมั่นในความสำคัญของการรักษาผลประโยชน์ของลูกค้าเป็นหลัก
            ด้วยการให้บริการ รับทำบัญชี ที่ครอบคลุมทุกขนาดของธุรกิจ
            ไม่ว่าจะเป็นธุรกิจขนาดเล็ก ขนาดกลาง หรือองค์กรขนาดใหญ่
            เรามีความเชี่ยวชาญเฉพาะในหลากหลายประเภทกิจการ
            และพร้อมที่จะปรับแต่ง โปรแกรมบัญชี
            ให้เหมาะสมกับความต้องการเฉพาะของลูกค้า เพื่อให้ได้ผลลัพธ์ที่ดีที่สุด
            ในด้านการจัดการภาษีอากร ACCOUNTING SYSTEM
            มีความเข้าใจลึกซึ้งเกี่ยวกับกฎหมายและระเบียบข้อบังคับที่เกี่ยวข้อง
            เราให้คำปรึกษาและวางแผนกลยุทธ์ด้านภาษีที่เหมาะสม
            เพื่อช่วยลดความเสี่ยงและเพิ่มประสิทธิภาพในการบริหารจัดการ
            <span className="text-white bg-red-600 hover:bg-blue-700 py-1 px-3 ml-4 rounded-md">
              <Link href="/accounting-tax-experience" className="text-clampxs">
                อ่านต่อ...
              </Link>
            </span>
          </p>
        </div>

        <div className="w-1/2 sm:w-full lg:w-1/2 mx-auto p-10">
          <Image src={Experience} alt="โปรแกรมบัญชี" className="mx-auto" />
        </div>
      </div>

      <div className="flex flex-col mx-auto mt-6 mb-12 space-y-4 sm:max-w-xl lg:max-w-4xl">
        {/* Title */}
        <h1 className="text-clamplg font-bold text-center text-pink-600 mt-6 px-10 py-2 mx-auto">
          ทำไมต้องเลือกใช้บริการ ACCOUNTING SYSTEM?
        </h1>

        {/* Content Box */}
        <div className="bg-blue-300 p-6 rounded-xl shadow-md space-y-3">
          <h2 className="text-clampsm font-semibold text-blue-700 flex items-center space-x-2 mt-5">
            <MdCheck className="text-green-600 text-clampsm" />
            <span>มีทีมผู้เชี่ยวชาญที่มีประสบการณ์สูงในด้านบัญชีและภาษี</span>
          </h2>
          <h2 className="text-clampsm font-semibold text-blue-700 flex items-center space-x-2">
            <MdCheck className="text-green-600 text-clampsm" />
            <span>
              ให้บริการครอบคลุมทุกขนาดธุรกิจ ตั้งแต่ขนาดเล็กไปจนถึงองค์กรใหญ่
            </span>
          </h2>
          <h2 className="text-clampsm font-semibold text-blue-700 flex items-center space-x-2">
            <MdCheck className="text-green-600 text-clampsm" />
            <span>
              ใช้โปรแกรมบัญชีและเทคโนโลยีทางบัญชีที่ช่วยเพิ่มประสิทธิภาพในการทำงาน
            </span>
          </h2>
          <h2 className="text-clampsm font-semibold text-blue-700 flex items-center space-x-2">
            <MdCheck className="text-green-600 text-clampsm" />
            <span>มีความโปร่งใส ชัดเจน และมีมาตรฐานในการดำเนินงาน</span>
          </h2>
          <h2 className="text-clampsm font-semibold text-blue-700 flex items-center space-x-2">
            <MdCheck className="text-green-600 text-clampsm" />
            <span>
              บริการที่ช่วยลดภาระและข้อผิดพลาดทางบัญชีของคุณได้เป็นอย่างดี
            </span>
          </h2>
          <h2 className="text-clampsm font-semibold text-blue-700 flex items-center space-x-2">
            <MdCheck className="text-green-600 text-clampsm" />
            <span>
              สร้างความมั่นใจให้ธุรกิจปฏิบัติตามข้อกำหนดด้านภาษีและแรงงาน
            </span>
          </h2>
          <h3 className="text-clampxs text-justify leading-loose indent-10 pt-6 pb-4">
            เรามุ่งมั่นในการให้บริการด้วยมาตรฐานวิชาชีพขั้นสูง
            และจรรยาบรรณที่เข้มงวด
            โดยยึดถือการให้ความสำคัญกับลูกค้าเป็นหัวใจหลักในการทำงาน
            ด้วยวิสัยทัศน์ที่ทันสมัยและความเข้าใจในความท้าทายของธุรกิจยุคปัจจุบัน
            ทีมงานของเราพร้อมที่จะเป็นพันธมิตรที่เติบโตไปพร้อมกับธุรกิจของท่าน
            เราใส่ใจในทุกรายละเอียดของงานบริการพร้อมดูแลและให้คำปรึกษาอย่างใกล้ชิดเพื่อให้ท่านสามารถบริหารธุรกิจได้อย่างมั่นใจ
            โดยมีทีมงานมืออาชีพของเราคอยสนับสนุนอย่างเต็มที่
          </h3>
        </div>
      </div>

      <div id="service" className="w-1/2 mx-auto h-auto my-16 mb-9">
        <h1 className="mx-auto text-center text-clampmd text-blue-700 font-bold mb-4">
          ครอบคลุมทุกธุรกิจ
        </h1>
        <Image
          src={Business}
          alt="ประเภทธุรกิจ บัญชี"
          className="mx-auto object-contain"
        />
      </div>
      <hr />
      <div className="mx-auto text-clamp2xl py-4">
        <h1 className="font-bold text-clampsm text-white bg-blue-700 text-center rounded-xl w-fit mt-6 px-8 py-1 mx-auto">
          บริการ
        </h1>
      </div>

      <div className="w-full mx-auto mb-8">
        <div className="grid grid-cols-3 sm:w-3/4 lg:w-1/2 mx-auto text-clampxs font-bold">
          <div className="flex flex-col flex-1 text-center items-center justify-start p-6">
            <Link href="/services/accounting-tax-filing">
              <div className="flex justify-center">
                <RiMoneyDollarBoxFill className="text-icon text-blue-700 hover:text-blue-600" />
              </div>
              <div className="mt-4">
                <h1 className="text-center">รับทำบัญชี และยื่นแบบภาษี</h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col flex-1 text-center items-center justify-start p-6">
            <Link href="/services/company-and-business-setup">
              <div className="flex justify-center">
                <AiFillCodeSandboxSquare className="text-icon text-blue-700 hover:text-blue-600" />
              </div>
              <div className="mt-4">
                <h1 className="text-center">
                  รับจดทะเบียนจัดตั้งบริษัท จัดตั้งห้างฯ และจดทะเบียนพาณิชย์
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col flex-1 text-center items-center justify-start p-6">
            <Link href="/services/accounting-audit">
              <div className="flex justify-center">
                <AiFillMacCommand className="text-icon text-blue-700 hover:text-blue-600" />
              </div>
              <div className="mt-4">
                <h1 className="text-center">รับตรวจสอบบัญชี</h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col flex-1 text-center items-center justify-start p-6">
            <Link href="/services/accounting-tax-consulting">
              <div className="flex justify-center">
                <FaThemeco className="text-icon text-blue-700 hover:text-blue-600" />
              </div>
              <div className="mt-4">
                <h1 className="text-center">ปรึกษาบัญชี และภาษี</h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col flex-1 text-center items-center justify-start p-6">
            <Link href="/services/social-security-filing">
              <div className="flex justify-center">
                <AiFillCodepenSquare className="text-icon text-blue-700 hover:text-blue-600" />
              </div>
              <div className="mt-4">
                <h1 className="text-center">รับบริการยื่นประกันสังคม</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-auto gap-10 px-4 py-8 border bg-blue-300">
        <div className="leading-loose text-clampxs">
          <h1 className="font-bold text-clampsm text-white bg-blue-700 text-center rounded-xl w-fit px-6 py-1 mx-auto mb-6">
            บริการรายเดือน
          </h1>
          <h2 className="indent-8 font-bold">1. บริการด้านภาษีอากร</h2>
          <p className="ml-14">
            - จัดทำและยื่นแบบแสดงรายการภาษีอากรประจำเดือน อาทิเช่น
            ภาษีมูลค่าเพิ่ม ภาษีหัก ณ ที่จ่ายต่างๆ (เงินเดือน ค่าจ้าง ค่าโฆษณา
            ค่าเช่า) เป็นต้น
          </p>
          <p className="ml-14">
            - การตรวจสอบรายงานภาษีซื้อ ภาษีขาย (ภาษีมูลค่าเพิ่ม )
            ผู้ประกอบการเป็นผู้จัดทํารายงานภาษี ซื้อ-ขาย
          </p>
          <p className="ml-14">
            - ให้คําแนะนําปรึกษาและเสนอข้อคิดเห็นต่าง ๆ
            เกี่ยวกับการบัญชีภาษีอากร
          </p>
          <h2 className="indent-8 font-bold">2. บริการด้านบัญชี</h2>
          <p className="ml-14">
            - รวบรวม ตรวจสอบ และจัดทําเอกสารประกอบการลงบัญชี
          </p>
          <p className="ml-14">
            - บันทึกรายการบัญชีจากเอกสารดังกล่าวข้างต้น รวมทั้งการจัดทําทะเบียน
            ประกอบอื่น ๆ ที่จําเป็น ไม่รวมการจัดทําบัญชีคุมพิเศษสินค้าคงเหลือ (
            ถ้ามี )
          </p>
          <p className="ml-14">
            - ให้คําแนะนํา และเสนอข้อคิดเห็นต่าง ๆ ตามหลักการบัญชีภาษีอากร
          </p>
          <p className="indent-8 font-bold">3. บริการรับ-ส่งเอกสาร</p>
          <p className="ml-14">
            - ทางสํานักงานจะจัดส่งพนักงานรับเอกสาร และเช็คทุกต้นเดือน
            เพื่อจัดทําและยื่นแบบภาษีไม่เกิน 2 คร้ังต่อเดือน
            ส่วนเกินทางบริษัทรับ-ส่งเอกสารจะจัดเก็บค่าบริการจากท่านโดยตรง
          </p>
        </div>

        <div className="leading-loose text-clampxs border-l border-gray-400 pl-4">
          <h1 className="font-bold text-clampsm text-white bg-blue-700 text-center rounded-xl w-fit px-6 py-1 mx-auto mb-6">
            บริการรายปี
          </h1>
          <h2 className="indent-8 font-bold">1. จัดทํางบการเงินประจําปี</h2>
          <h2 className="indent-8 font-bold">
            2. จัดทําและยื่นแบบชําระบัญชีประจําปี โดยแยกเป็น
          </h2>
          <p className="ml-14">
            - สรุปภาษีเงินเดือน ( แบบ ภ.ง.ด. 1 ก ) ไม่คิดค่าบริการ
          </p>
          <p className="ml-14">
            - ภาษีเงินได้บุคคลธรรมดา ( แบบ ภ.ง.ด.91 คิดค่าบริการรายละ 300 บาท
            เนื่องจากเป็นภารหน้าที่ของพนักงานที่มีเงินเดือนต้องยื่นนําส่งสรรพากร
            ตั้งแต่เดือนมกราคมถึงเดือนมีนาคม)
          </p>
          <p className="ml-14">
            - ภาษีเงินได่นิติบุคคลครึ่งปี ( แบบ ภ.ง.ด.51 ) ไม่คิดค่าบริการ
          </p>
          <p className="ml-14">
            - เงินได้นิติบุคคลประจําปี ( แบบ ภ.ง.ด.50 ) ไม่คิดค่าบริการ
          </p>
          <h2 className="indent-8 font-bold">
            3. การสอบบัญชีประจําปี (
            คิดค่าสอบตามปริมาณเอกสารและรายได้ของกิจการปรละหนึ่งครั้ง )
          </h2>
          <h2 className="indent-8 font-bold">
            4. การยื่นงบการเงินต่อกรมทะเบียนการค้า (ไม่คิดค่าบริการ)
          </h2>
          <h2 className="indent-8 font-bold">
            5. ในกรณีที่ท่านได้หนังสือนัดพบจากกรมสรรพากร หรือกองบัญชีธุรกิจ
            กรณีที่ท่านไม่สะดวกที่จะไป
          </h2>
        </div>
      </div>

      <div className="flex justify-center mt-9 mb-6 bg-white">
        <Image src={Payment} alt="ค่าบริการบัญชี" />
      </div>
      <hr />

      <div className="w-full flex mb-8 bg-white">
        <div className="flex-1 bg-blue-300">
          <h1 className="text-center text-clampsm font-bold text-blue-700 mt-6">
            เงินเดือน ภาษี ประกันสังคม
          </h1>
          <p className="text-clampxs indent-11 leading-loose text-justify sm:my-2 lg:my-6 px-6">
            บริษัทฯ มีโปรแกรมเงินเดือนของเราเอง(AccPayroll)
            ซึ่งออกแบบมาเพื่อช่วยให้ธุรกิจของคุณจัดการเงินเดือนพนักงานได้อย่างมีประสิทธิภาพ
            ลดข้อผิดพลาด และประหยัดเวลา ด้วยฟีเจอร์ที่ครบครัน
            รองรับการคำนวณเงินเดือน ค่าล่วงเวลา ประกันสังคม ภาษี
            และสวัสดิการอื่น ๆ ได้อย่างแม่นยำ
            โปรแกรมสามารถกำหนดโครงสร้างเงินเดือนตามนโยบายของบริษัทได้อย่างยืดหยุ่น
            ไม่ว่าจะเป็นการจ่ายเงินเดือนแบบรายเดือน รายวัน
            รองรับการตั้งค่าหักภาษี ณ ที่จ่าย อัตราประกันสังคม
            และกองทุนสำรองเลี้ยงชีพโดยอัตโนมัติ
            นอกจากนี้ยังสามารถคำนวณเงินค่าล่วงเวลา (OT) โบนัส
            และค่าคอมมิชชันได้อย่างถูกต้อง
            โปรแกรมยังสามารถออกไฟล์รายงานสำหรับส่งข้อมูลไปยังหน่วยงานภาครัฐ เช่น
            สำนักงานประกันสังคม และกรมสรรพากรได้โดยตรง
            ช่วยลดภาระงานของฝ่ายบัญชีและฝ่ายบุคคล
            ลดข้อผิดพลาดจากการคำนวณเงินเดือนแบบแมนนวล
            นอกจากนี้ยังรองรับการอัปเดตตามกฎหมายแรงงานล่าสุด
            ทำให้คุณมั่นใจได้ว่าระบบเงินเดือนของคุณจะเป็นไปตามมาตรฐานและถูกต้องตามกฎหมายอยู่เสมอ
            ไม่ว่าธุรกิจของคุณจะเป็นบริษัทขนาดเล็ก กลาง หรือใหญ่
            โปรแกรมเงินเดือนของเราสามารถช่วยให้การบริหารจัดการเงินเดือนเป็นเรื่องง่ายขึ้น
            ลดความซับซ้อนและเพิ่มประสิทธิภาพให้กับองค์กรของคุณ
          </p>
        </div>
        
        <div className="flex flex-1 flex-col items-center border-l mt-8 pb-4">
          <div className="text-clampxs text-white font-bold rounded-xl bg-blue-700 p-3 mb-2">
            ประโยชน์ของการใช้โปรแกรมเงินเดือน
          </div>
          <div className="w-2/3 flex flex-col text-clampxs text-blue-700 font-bold leading-loose p-3 mb-4">
            <ul className="text-black font-normal pl-0 text-left">
              <li className="flex items-center space-x-2 w-full">
                <MdCheck className="text-clampsm text-green-600" />
                <span>ลดเวลาและความผิดพลาดในการคำนวณเงินเดือน</span>
              </li>
              <li className="flex items-center space-x-2 w-full">
                <MdCheck className="text-clampsm text-green-600" />
                <span>ลดภาระงานของฝ่ายบัญชีและฝ่ายบุคคล</span>
              </li>
              <li className="flex items-center space-x-2 w-full">
                <MdCheck className="text-clampsm text-green-600" />
                <span>
                  ช่วยให้ธุรกิจปฏิบัติตามกฎหมายแรงงานและภาษีได้ง่ายขึ้น
                </span>
              </li>
              <li className="flex items-center space-x-2 w-full">
                <MdCheck className="text-clampsm text-green-600" />
                <span>
                  สร้างความพึงพอใจให้พนักงานด้วยระบบที่แม่นยำและเป็นมืออาชีพ
                </span>
              </li>
            </ul>
          </div>
          <Image
            src={Payroll}
            alt="โปรแกรมเงินเดือน"
            // className="mx-auto px-2 w-[350px] h-[230px]"
            className="mx-auto px-2 w-auto h-auto max-w-full sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain"
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ServicesPage;
