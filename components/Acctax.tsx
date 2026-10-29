import React from "react";
import Image from "next/image";
import Acctax from "@/public/images/acctax.webp";
import { FaLine } from "react-icons/fa6";
import LineAcctax from "@/public/images/line_acctax.png";

function AcctaxPage() {
  return (
    <div className="container w-full mx-auto mt-6">
      {/* <div className="divider divider-neutral text-blue-600 text-2xl font-bold mt-10 mb-10">
        โปรแกรมบัญชี
      </div> */}
      <hr />
      <div className="flex sm:flex-col lg:flex-row w-full mx-auto justify-center bg-white mt-10 p-1">
        <div className="sm:w-3/5 sm:mx-auto lg:w-2/5 mt-1">
          <Image src={Acctax} alt="โปรแกรมบัญชีสำเร็จรูป" className="mx-auto" />
        </div>
        <div className="w-3/5 sm:w-[98%] lg:w-3/5 mt-1 text-black clear-both">
          <div className="flex justify-center mt-2">
            <p className="text-clampsm bg-blue-700 text-white rounded-xl font-bold py-1 px-4">โปรแกรมบัญชี</p>
          </div>
          <div className="indent-10 leading-loose pt-6 px-6">
            <p className="text-justify text-clampxs">
              ในปัจจุบันปัญหาของการบันทึกบัญชีคือ มีความยุ่งยากซับซ้อน
              ในการเลือกบันทึกบัญชี
              ด้านเดบิตหรือเครดิตตามหลักการบัญชีให้ถูกต้องตามเอกสารที่เกี่ยวข้องกับกิจการ
              ตามประเภทของ กิจการที่ดําเนินการ
              ซึ่งทําให้เกิดความล่าช้าในการบันทึกบัญชีแต่ละรายการเป็นอย่างมาก
              ทั้ง ๆ ที่โปรแกรมเมอร์ก็พยายาม
              ที่จะสร้างตัวช่วยให้การบันทึกบัญชีให้เป็นแบบอัตโนมัติในรูปแบบเฉพาะ
              ของบางรายการที่เกิดขึ้นเป็นประจํา
              แต่ก็ยังไม่ครบถ้วนตามที่ผู้ใช้โปรแกรมมีความต้องการใช้งานจริง (
              และความต้องการของผู้ใช้งานก็ไม่มีวันสิ้นสุด)
              ส่วนผู้ใช้งานโปรแกรมเองก็มีความยากลําบากที่
              จะต้องมาศึกษาวิธีรายละเอียดขั้นตอน
              และวิธีการใช้งานของโปรแกรมให้ครบถ้วนมากพอ เพื่อที่จะได้
              ใช้งานโปรแกรมให้ได้เต็มประสิทธิภาพของโปรแกรมมากที่สุด
              และถูกต้องเหมาะสมกับแต่ละกิจการ
              ของแต่ละบริษัทที่ดําเนินธุรกิจหลากหลายแต่ละประเภทซึ่งไม่เหมือนกันเลย
              และแนวปฏิบัติทางการ บันทึกบัญชีก็แตกต่างกันออกไป
            </p>
          </div>

          <div className="indent-10 leading-loose pt-4 px-6">
            <p className="text-justify text-clampxs">
              โปรแกรมบัญชี AccTax ก็เป็นโปรแกรมบัญชีที่ได้พัฒนาในอีกแนวทางหนึ่ง
              ที่จะทําให้ รูปแบบโครงสร้างของระบบการใช้งานบันทึกบัญชี
              มีความเป็นไปได้อย่างง่าย และคล่องตัวที่สุดในการ ใช้งานบันทึก
              แบบอัตโนมัติ ทั้งในการบันทึกรายการรายวันและการบันทึกบัญชีแยกประเภท
              ทางด้าน เดบิตหรือเครดิต โดยอัตโนมัติได้ทุกประเภทรายการ
              แต่ผู้พัฒนาโปรแกรมกลับพบว่าการทําให้การใช้ งานง่ายที่สุด
              กลับทําให้การสร้างวิธีการใช้งานกลายเป็นความยากที่สุด
              และอาจเป็นโครงสร้างที่จํากัด อิสระภาพในการบันทึกรายการบัญชี
              รวมถึงด้วยความรู้ความเข้าใจในการสร้างให้ง่ายที่จะใช้งานของ
              ผู้บันทึกบัญชีอย่างแท้จริง อาจจะกลับกลายเป็นรูปแบบการสร้างใหม่
              ทั้งรู้สึกยากเกินกว่าผู้ใช้งานทั่วไป จะทําความเข้าใจได้
              แต่ถึงกระนั้น ผู้พัฒนาโปรแกรม
              ยังเห็นว่าด้วยองค์ความรู้ความเข้าใจที่นักบัญชี
              และผู้ใช้งานโปรแกรมได้เรียนรู้ร่วมกัน
              ด้วยความช่วยเหลือเกื้ออกูลกัน ก็จะมีความเป็นไปได้อย่างมาก
              ที่จะช่วยกันพัฒนาการใช้งานโปรแกรมได้ดียิ่ง ๆ ขึ้นได้ต่อไป
            </p>
          </div>

          <div className="ml-6 pt-4 px-6">
            <ol className="list-disc leading-loose font-bold text-clampxs">
              <li>บันทึก สมุดรายวัน หน้าเดียว (ทุกเล่ม โดยไม่ต้องเลือกสมุด)</li>
              <li>ผ่านรายการไป บัญชีแยกประเภทอัตโนมัติ 100%</li>
              <li>พิมพ์ใบสำคัญรับ-จ่าย ฯลฯ พร้อมใบบันทึกบัญชี แยกประเภท</li>
              <li>ออกหนังสือรับรองหักภาษี ณ ที่จ่าย</li>
              <li>ออกใบกำกับ ซื้อ-ขาย สินค้า หรือ สินทรัพย์ได้</li>
              <li>พิมพ์ใบเสร็จรับเงิน / ใบกำกับภาษีขายสินค้า และใบวางบิล</li>
              <li>รายงาน สถานะเงินสด และบัญชีทุกธนาคารทุกช่วงเวลา</li>
              <li>รายงาน ทะเบียนสินทรัพย์ และสินค้าสิ้นงวด</li>
              <li>รายงานใบกำกับ ค้างชำระ สรุปรายบุคคล / รายได้</li>
              <li>รายงาน ลูกหนี้/เจ้าหนี้ คงเหลือ ณ วันที่กำหนด</li>
              <li>รายงานสมุดบัญชีแยกประเภททั่วไป เลือกรหัสบัญชี</li>
              <li>สมุดรายวัน ทุกเล่ม ทั้งแบบรายงานรายวัน / แยกประเภท</li>
              <li>กระดาษทำการ และงบการเงิน งบดุล งบกำไรขาดทุน งบต้นทุน</li>
              <li>รายงานสรุปข้อมูลต่างๆ ฯลฯ</li>
            </ol>
            <br />
            <div className="flex sm:flex-col lg:flex-row sm:space-y-4 space-x-4 items-baseline">
              <div>
                <button className="text-clampxs btn bg-blue-700 text-white hover:bg-orange-500">
                  Download โปรแกรมบัญชี{" "}
                  <span className="text-clampxs badge-secondary badge-lg bg-red-600 rounded-md">
                    ฟรี
                  </span>
                </button>
              </div>
              <div>
                <button className="text-clampxs btn btn-secondary bg-red-600 hover:bg-orange-500">
                  Download คู่มือโปรแกรม
                </button>
              </div>
            </div>

            <div className="flex text-clampxs mt-8 p-2">
              สอบถาม การใช้งานโปรแกรม และ อื่นๆ
            </div>
            <div className="flex pl-2 pb-6 items-center font-bold text-blue-700 text-clampxs">
              <FaLine
                width={300}
                height={300}
                className="text-green-500 bg-white"
              />
              &nbsp;@204cczdz
            </div>
            <div className="pb-6">
            <Image
              src={LineAcctax}
              alt="รับทำบัญชี ปิดงบการเงิน"
              width={100}
              height={100}
              className="max-w-[100px] object-contain"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcctaxPage;
