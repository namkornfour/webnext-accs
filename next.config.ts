import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
  /* config options here */
  // async redirects() {
  //   return Object.entries(redirectsMap).map(([source, destination]) => ({
  //     source,
  //     destination,
  //     permanent: true, // 301 Redirect
  //   }));
  // },
  trailingSlash: true,
  images: {
    unoptimized: true, // unoptimized: true, คือการสั่งให้ next ปิดการปรับแต่งรูปอัตโนมัติ เนื่องจากใช้ `output: 'export' ตอน build` (comment ตอน dev uncomment ตอน build)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.accnew.com",
        pathname: "/images/**", // ระบุ path สำหรับ remote images (ใช้กรณีโหลดรูปจากภายนอก)
      },
    ],
  },
  async headers() {
    // ห้ามตั้ง cache แบบ immutable ตอน dev ไม่งั้นเบราว์เซอร์จะค้างไฟล์ _next/static เก่า
    // และทำให้ runtime/chunk ไม่เข้ากัน (เช่น __webpack_require__.n error)
    if (process.env.NODE_ENV !== "production") return [];

    return [
      {
        source: "/_next/static/(.*)",  // สำหรับ static files ของ Next.js
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // output: "export", // ใช้ static website export ตอน build (comment ตอน dev uncomment ตอน build)
};

export default nextConfig;