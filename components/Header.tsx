import React from "react";
import Image from "next/image";
//import Header1 from "@/public/images/header1.png";
//import Header2 from "@/public/images/header2.png";
//import Header4 from "@/public/images/header4.webp";
import Header5 from "@/public/images/header5.webp";

function HeaderPage() {
  const structuredData = {
    "@context": "https://accnew.com",
    "@type": "WebPage",
    name: "บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด",
    description: "โปรแกรมบัญชี รับทำบัญชี ยื่นภาษี",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="container-fluid bg-[#004aad]">
        <div className="relative w-full mx-auto">
          <Image
            src={Header5}
            alt="โปรแกรมบัญชี รับทำบัญชี ยื่นภาษี"
            width={1224}
            height={688}
            className="object-contain mx-auto"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default HeaderPage;
