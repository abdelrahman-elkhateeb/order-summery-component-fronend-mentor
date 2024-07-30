/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backgroundDesktop: "url('./assets/pattern-background-desktop.svg')",
        backgroundMobile: "url('./assets/pattern-background-mobile.svg')",
      },
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "Very-pale-blue": "hsl(225, 100%, 98%)",
        "Desaturated-blue": "hsl(224, 23%, 55%)",
        "Dark-blue": "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
};
