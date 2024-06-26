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
        blurButtonDarker: "#C2BDBD",
        darkPrimary: "#1A1A1A",
        primaryRed: "#D96464",
        secondaryRed: "#DD4242",
        primaryYellow: "#FFD700",
      },
    },
  },
  plugins: [],
};
export default config;
