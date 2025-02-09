import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        input: "#D9D9D9",
      },
      fontFamily: {
        robotoSerif: "var(--font-roboto-serif)"
      },
      backgroundImage: {
        login: "url(/login.jpg)"
      }
    },
  },
  plugins: [],
} satisfies Config;
