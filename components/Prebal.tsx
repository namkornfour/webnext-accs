import React from "react";
import Image from "next/image";
import QrCode from "@/public/images/qrcode_accs.png";
//import QrCode from "@/public/images/line_accs.jpg";

function PrebalPage() {
  return (
    <div className="container w-full mx-auto">
      <div className="flex sm:flex-col lg:flex-row w-11/12 sm-w[98%] lg:w-11/12 mx-auto text-clampxs font-bold">
        <div className="w-6/12 sm:w-full">
          <div className="mt-8 text-blue-600">
            แนะนำ - การยื่นภาษี และงบการเงิน
          </div>
          <div role="tablist" className="tabs tabs-lifted mt-6 mb-6">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-bold text-blue-600 text-clampxs"
              aria-label="ภาษีเงินได้บุคคลธรรมดา"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-blue-500 text-white border-base-300 rounded-box p-6"
            >
              การยื่น ภาษีเงินได้บุคคลธรรมดา ที่ถูกต้อง&nbsp;&nbsp;&nbsp;
              <button className="btn btn-info text-white text-clampxs">
                Download เอกสาร
              </button>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-bold text-blue-600 text-clampxs"
              aria-label="ภาษีเงินได้นิติบุคคล"              
            />
            <div
              role="tabpanel"
              className="tab-content bg-blue-500 text-white border-base-300 rounded-box p-6"
            >
              การยื่น ภาษีเงินได้นิติบุคคล ที่ถูกต้อง&nbsp;&nbsp;&nbsp;
              <button className="btn btn-info text-white text-clampxs">
                Download เอกสาร
              </button>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-bold text-blue-600 text-clampxs"
              aria-label="งบการเงินถูกต้อง"
            />
            <div
              role="tabpanel"
              className="tab-content bg-blue-500 text-white border-base-300 rounded-box p-6"
            >
              การยื่น งบการเงินถูกต้อง ที่ถูกต้อง&nbsp;&nbsp;&nbsp;
              <button className="btn btn-info text-white text-clampxs">
                Download เอกสาร
              </button>
            </div>
          </div>
        </div>

        <div className="w-6/12 sm:w-full sm:mb-9 lg:w-6/12 flex flex-col items-center justify-center">
          <Image
            src={QrCode}
            alt="รับทำบัญชี ปิดงบการเงิน"
            layout="responsive"
            width={100}
            height={100}
            className="max-w-[100px] object-contain"         
          />
          <p className="text-clampxs text-blue-600 font-bold pt-2">ACCOUNTING SYSTEM</p>
        </div>
      </div>
    </div>
  );
}

export default PrebalPage;
