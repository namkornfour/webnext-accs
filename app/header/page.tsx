import React from "react";
import { Metadata } from "next";
//import Header from "@/components/Header";
//import Head from "next/head";

export const metadata: Metadata = {
  title: "โปรแกรมบัญชี",
  description: "บริการบัญชี ยื่นภาษี ปิดงบการเงิน และให้คำแนะนำด้านบัญชี",
  robots: "index follow",
  openGraph: {
    title: "บัญชีออนไลน์",
    description: "บริการบัญชี ยื่นภาษี ปิดงบการเงิน และให้คำแนะนำด้านบัญชี",
    type: "website",
    url: "https://accnew.com",
    siteName: "accnew",
  },
  twitter: {
    title: "บัญชีออนไลน์",
    description: "บริการบัญชี ยื่นภาษี ปิดงบการเงิน และให้คำแนะนำด้านบัญชี",
  },
};

function HeaderPage() {
  return (
    <div>      
      {/* <Header /> */}
    </div>
  );
}

export default HeaderPage;
