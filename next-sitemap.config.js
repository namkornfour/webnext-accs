module.exports = {
  // siteUrl: 'https://accnew.com',
  // generateRobotsTxt: true,

  siteUrl: "https://accnew.com", // URL หลักของเว็บ
  generateRobotsTxt: true, // สร้างไฟล์ robots.txt อัตโนมัติ
  sitemapSize: 5000, // จำกัดจำนวน URL ต่อไฟล์ sitemap (ถ้ามีเยอะจะสร้างหลายไฟล์)
  // outDir: "public",
  changefreq: "daily", // บอกให้ Google มาเก็บข้อมูลบ่อยขึ้น
  priority: 0.7, // ตั้งค่าความสำคัญของหน้าเว็บ (1.0 สูงสุด, 0.1 ต่ำสุด)
  exclude: ["/admin", "/dashboard"], // ยกเว้นหน้าที่ไม่ต้องการให้ index
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // อนุญาตให้บอทเข้าเว็บทั้งหมด
      { userAgent: "*", disallow: ["/admin", "/dashboard"] }, // ไม่ให้เข้าโซนแอดมิน
    ],    
  },
  additionalSitemaps: [
    // เพิ่ม sitemap อื่นๆ หากจำเป็น
    // "https://accnew.com/sitemap-0.xml",
  ],
};