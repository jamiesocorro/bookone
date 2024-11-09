// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export",
// };

// export default nextConfig;

// module.exports = {
//   images: {
//     domains: ["localhost", "storage.googleapis.com", "flagcdn.com"],
//   },
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "X-Content-Type-Options",
//             value: "nosniff",
//           },
//           {
//             key: "X-Frame-Options",
//             value: "DENY",
//           },
//           {
//             key: "Referrer-Policy",
//             value: "strict-origin-when-cross-origin",
//           },
//         ],
//       },
//       {
//         source: "/sw.js",
//         headers: [
//           {
//             key: "Content-Type",
//             value: "application/javascript; charset=utf-8",
//           },
//           {
//             key: "Cache-Control",
//             value: "no-cache, no-store, must-revalidate",
//           },
//           {
//             key: "Content-Security-Policy",
//             value: "default-src 'self'; script-src 'self'",
//           },
//         ],
//       },
//     ];
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // lightweight but no dynamic routes & api support
  // output: "standalone", // bulkier but supports dynamic routes & api
};

module.exports = nextConfig;
