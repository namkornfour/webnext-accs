import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    // '2xl': '1536px', // Breakpoint ใหม่สำหรับหน้าจอใหญ่ขึ้น
    // '3xl': '1920px',
  },
  theme: {
    // screens: {
    //   xs: "480px", // กำหนดค่า breakpoint สำหรับ xs
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },      
      fontSize: {
        /*clampxs: "clamp(0.25rem, 2vw, 0.70rem)",
        clampsm: "clamp(0.50rem, 2vw, 0.875rem)",
        clampmd: "clamp(0.875rem, 2vw, 1rem)",
        clamplg: "clamp(0.50rem, 2vw, 1.3rem)",
        clampxl: "clamp(1rem, 2vw, 1.5rem)",
        clamp2xl: "clamp(1rem, 2vw, 2rem)",*/

        clamp2xs: "clamp(0.6rem, 1vw, 0.8rem)",
        clampxs: "clamp(0.75rem, 1vw, 1rem)", // 10px - 16px 550
        clampsm: "clamp(0.75rem, 1.5vw, 1.5rem)", // 12px - 24px 1.5vw
        clampmd: "clamp(0.875rem, 2vw, 1.75rem)", // 14px - 28px
        clamplg: "clamp(1rem, 2.5vw, 2rem)", // 16px - 32px
        clampxl: "clamp(1.25rem, 3vw, 2.5rem)", // 20px - 40px
        clamp2xl: "clamp(1.5rem, 3.5vw, 3rem)", // 24px - 48px

        icon: 'clamp(32px, 5vw, 92px)'
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
