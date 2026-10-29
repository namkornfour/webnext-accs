import Link from "next/link";
import Image from "next/image";
//import { SiWebmoney } from "react-icons/si";
import Document from "@/public/images/document.webp";

function AdvisePage() {
  return (
    <div className="container mx-auto bg-white mt-8 mb-11">
      <div className="w-full flex">
        <div className="flex-1 bg-blue-300 pt-6">
          <p className="text-center text-clampsm font-bold text-blue-700">
          แนะนำในการจัดทำบัญชี และเอกสาร
          </p>
          <p className="text-clampxs indent-11 leading-loose text-justify sm:my-2 lg:my-4 px-6">
          การจัดทำบัญชีที่ถูกต้อง และครบถ้วนเป็นสิ่งสำคัญสำหรับธุรกิจทุกประเภท
          เพื่อให้การบริหารงานเป็นไปอย่างราบรื่น และเป็นไปตามกฎหมาย ภาษี
          และมาตรฐานทางบัญชีที่กำหนด
          </p>
          <div className="mt-2">
          <ol className="list-disc leading-loose text-clampxs pl-10 pr-6">
            <li>
              <span className="font-bold text-blue-700 pr-1">จัดทำเอกสารให้เป็นระบบ</span>
              โดยแยกประเภทเอกสารให้ชัดเจนและเก็บรวบรวมไว้ในที่ปลอดภัย
            </li>
            <li>
              <span className="font-bold text-blue-700 pr-1">
                บันทึกบัญชีให้ถูกต้องและตรงเวลา
              </span> 
              เพื่อให้สามารถตรวจสอบและใช้งานข้อมูลได้ทันที
            </li>
            <li>
              <span className="font-bold text-blue-700 pr-1">ใช้โปรแกรมบัญชี</span>
              เพื่อลดข้อผิดพลาดและเพิ่มประสิทธิภาพในการทำบัญชี
            </li>
            <li>
              <span className="font-bold text-blue-700 pr-1">
                ตรวจสอบความถูกต้องของเอกสารก่อนบันทึกบัญชี
              </span>
              เช่น การตรวจสอบเลขที่ใบกำกับภาษี และจำนวนเงินที่ถูกต้อง
            </li>
            <li>
              <span className="font-bold text-blue-700 pr-1">ปฏิบัติตามกฎหมายภาษี</span>
              เพื่อป้องกันปัญหาทางภาษีและหลีกเลี่ยงค่าปรับจากกรมสรรพากร
            </li>
          </ol>          
        </div>

        <p className="mt-6 px-6 text-clampxs leading-loose">
          การจัดทำบัญชีที่ถูกต้องและครบถ้วนช่วยให้ธุรกิจสามารถบริหารการเงินได้อย่างมีประสิทธิภาพ
          และปฏิบัติตามข้อกำหนดของกฎหมายได้อย่างถูกต้อง
          <span className="text-white bg-red-600 hover:bg-blue-700 py-1 px-3 ml-2 rounded-md whitespace-nowrap">
            <Link href="/accounting-advisory" className="text-clampxs">
              อ่านต่อ...
            </Link>
          </span>
        </p>
          
        </div>
        <div className="flex flex-1 flex-col items-center border-l mt-8 pb-4">
          <div className="text-clampxs text-white font-bold rounded-xl bg-blue-700 p-3 mb-4">การจัดเตรียมเอกสารบัญชีให้มีประสิทธิภาพ</div>
          <div className="w-full flex flex-col text-clampxs text-blue-700 font-bold leading-loose px-6 mb-8">
            <ol className="text-black font-normal pl-0 items-center list-decimal list-inside">
              <li className="w-fit md:ml-4 lg:ml-11"><span className="font-bold">รวบรวมเอกสารสำคัญ</span> เช่น ใบเสร็จรับเงิน, ใบแจ้งหนี้, และใบสำคัญจ่าย</li>
              <li className="w-fit md:ml-4 lg:ml-11"><span className="font-bold">จัดหมวดหมู่เอกสาร</span> ตามประเภท เช่น รายรับ, รายจ่าย, ภาษี เพื่อความสะดวกในการตรวจสอบ</li>
              <li className="w-fit md:ml-4 lg:ml-11"><span className="font-bold">บันทึกข้อมูลให้ถูกต้อง</span> โดยใช้ซอฟต์แวร์บัญชี เพื่อลดข้อผิดพลาด</li>
              <li className="w-fit md:ml-4 lg:ml-11"><span className="font-bold">เก็บเอกสารอย่างเป็นระบบ</span> ทั้งรูปแบบกระดาษและดิจิทัล เพื่อสะดวกต่อการค้นหา</li>
              <li className="w-fit md:ml-4 lg:ml-11"><span className="font-bold">ตรวจสอบและสำรองข้อมูล</span> อย่างสม่ำเสมอ เพื่อป้องกันการสูญหายและผิดพลาดในการทำบัญชี</li>
            </ol>
          </div>
          <Image
            src={Document}
            alt="การจัดเก็บเอกสารบัญชี"
            className="mx-auto px-2 w-auto h-auto max-w-full sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AdvisePage;
