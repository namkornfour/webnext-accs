// Project-wide ambient type declarations

// Allow side-effect imports of plain CSS stylesheets (e.g. `import "./globals.css";`).
// Next.js only ships type declarations for CSS Modules (`*.module.css`) in
// `next/types/global.d.ts`, so TypeScript 5.6+ reports error 2882 for plain CSS
// side-effect imports. This declaration resolves that.
declare module "*.css";