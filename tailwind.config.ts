import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0D0714',
        todoText: '#9E78CF',
        container: '#15101C',
        checked: '#78CFB0'
      }
    }
  },
  plugins: [],
} satisfies Config;
