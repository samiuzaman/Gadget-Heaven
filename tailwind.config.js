/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["Sora", "sans - serif"],
      },
      colors: {
        primary: "#9538E2",
        secondary: "#09080F99",
        myDark1: "#09080F",
        myDark2: "#09080FCC",
        myDark3: "#0B0B0B",
        myDark4: "#09080F",
        third: "#FF0000",
        fourth: "#ee",
      },
      images: {
        banner: "url('./assets/banner.jpg')",
        group: "url('./assets/Group.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
