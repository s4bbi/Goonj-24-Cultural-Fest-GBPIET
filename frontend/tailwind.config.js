/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cM: "Chillax-Medium",
        cR: "Chillax-Regular",
        cSB: "Chillax-SemiBold",
        cuda: "CUDA",
        samarkan: "Samarkan",
      },
      backgroundImage: {
        EventBG: "url('/src/assets/Images/Events_BG.webp')",
        bg_image: "url('/src/assets/Images/Event_detail_bg.png')",
        moonImg: "url('src/assets/Images/Moon_Img.webp')",
        LoginBG: "url('/src/assets/Images/LoginBG.png')",
        drama_skit: "url('/src/assets/Images/EventImages/drama_skit.webp')",
        bg_planet: "url('src/assets/Images/Fusion_Planet.webp')",
      },
    },
  },
  plugins: [],
};
