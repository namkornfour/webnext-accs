import React from "react";
import Link from "next/link";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { AiFillCodepenCircle } from "react-icons/ai";
import { FaGgCircle } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";

function ServicePage() {
  return (
    <div className="container mx-auto mt-4 bg-gray-100">
      <div className="flex xs:w-full lg:w-3/4 justify-center mx-auto text-clampxs font-bold">
        <div className="flex-1 text-center flex flex-col items-center justify-center space-y-3 py-2 hover:bg-blue-200">
          <div>
            <Link href="/accounting-experience" rel="canonical" title="ประสบการณ์บัญชี">
              <AiFillCodeSandboxCircle                
                className="text-icon text-blue-700 pt-2 hover:text-blue-600"
              />
            </Link>
          </div>

          <div>
            <Link href="/accounting-experience" rel="canonical" title="ประสบการณ์บัญชี">
              <h1 className="text-center">
                ประสบการณ์บัญชี และภาษี
              </h1>
            </Link>
          </div>          
        </div>
        <div className="flex-1 text-center flex flex-col items-center justify-center space-y-3 py-2  hover:bg-blue-200">
          <div>
            <Link href="/accounting-expert" rel="canonical" title="ผู้เชี่ยวชาญบัญชี">
              <AiFillCodepenCircle
                className="text-icon text-blue-700 hover:text-blue-600"
              />
            </Link>
          </div>
          <div>
            <Link href="/accounting-expert" rel="canonical" title="ผู้เชี่ยวชาญบัญชี">
              <h1 className="text-center">
                ผู้เชี่ยวชาญบัญชี และภาษี
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex-1 text-center flex flex-col items-center justify-center space-y-3 py-2  hover:bg-blue-200">
          <div>
            <Link href="/accounting-tax-services" rel="canonical" title="บริการรวดเร็ว">
              <FaGgCircle
                // size={100}
                className="text-icon text-blue-700 pt-2 hover:text-blue-600"
              />
            </Link>
          </div>
          <div>
            <Link href="/accounting-tax-services" rel="canonical" title="บริการรวดเร็ว">
              <h1 className="text-center">
                รวดเร็ว และมีประสิทธิภาพ
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex-1 text-center flex flex-col items-center justify-center space-y-3 py-2 hover:bg-blue-200">
          <div>
            <Link href="/accounting-service-pricing" rel="canonical" title="ค่าบริการบัญชีที่เหมาะสม">
              <BiSolidDollarCircle
                // size={100}
                className="text-icon text-blue-700 hover:text-blue-600"
              />
            </Link>
          </div>
          <div>
            <Link href="/accounting-service-pricing" rel="canonical" title="ค่าบริการบัญชีที่เหมาะสม">
              <h1 className="text-center">
                ค่าบริการที่เหมาะสม คุ้มค่า
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
