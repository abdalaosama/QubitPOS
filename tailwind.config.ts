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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      backgroundImage: {
        "bg-gradient": "linear-gradient(to right, var(--bg-gradient-start), var(--bg-gradient-end))",
      }
    },
  },
  plugins: [],
} satisfies Config;
