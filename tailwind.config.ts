import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkViolet: "#212121", // Dark violet
        darkerViolet: "#000000", // Darker violet
      },
    },
    backgroundImage: {
      "gradient-to-bottom":
        "linear-gradient(to bottom, var(--tw-gradient-stops))",
    },
  },
  plugins: [],
};
export default config;
