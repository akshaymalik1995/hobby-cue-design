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
        purple: "#8064A2",
        lightGray: "#CED4DA",
        lighterGray: "#EBEDF0",
        darkerGray: "#6D747A",
      },
    },
  },
  plugins: [],
};
export default config;
