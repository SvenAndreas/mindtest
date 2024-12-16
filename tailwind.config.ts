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
        primary: "var(--primary)",
        "primary-d":"var(--primary-d)",
        "primary-l":"var(--primary-l)",
        secondary:"var(--secondary)",
        "secondary-l":"var(--secondary-l)",
        "secondary-d":"var(--secondary-d)",
        acent:"var(--acent)",
        "acent-l":"var(--acent-l)",
        "acent-d":"var(--acent-d)",
        "text-l":"var(--text-l)",
        "text-d":"var(--text-d)",
        bg:'var(--bg)',
        "bg-primary":"var(--bg-primary)"
      },
    },
  },
  plugins: [],
};
export default config;
