import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#cccccc",
          300: "#B3B3B3",
          400: "#999999",
        },
        green: {
          600: "#00DEB1",
        },
      },
    },
    screens: {
      lg: "845px",
      md: "768px",
      sm: "640px",
      "m-sm": "600px",
      xs: "460px",
      xxs: "361px",
    },
  },
  plugins: [],
};
export default config;
