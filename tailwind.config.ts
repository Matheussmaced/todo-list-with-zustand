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
        bg: '#0D0714',
        todoText: '#9E78CF',
        borderInput: '#3E1671',
        container: '#15101C',
        checked: '#78CFB0'
      }
    }
  },
  plugins: [],
} satisfies Config;
