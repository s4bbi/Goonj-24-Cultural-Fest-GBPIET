/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
<<<<<<< HEAD
        moonImg: "url('src/assets/Images/Moon_Img.webp')"
=======
        moonImg: "url('/src/assets/Images/Moon_Img.webp')",
>>>>>>> b9d45110f3f16080c449f85d25a57ecd0c08879a
      },
      

    },
  },
  plugins: [],
}