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
        "grey-gradient":
          "linear-gradient(180deg, #DBDBDB 12.35%, #AAB1BA 100%)",
      },
      colors: {
        "grey-light": "#181818",
      },
    },
  },
  plugins: [],
};
export default config;
