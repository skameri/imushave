/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {

      backgroundImage: {
        'mainBackground': "url('https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?cs=srgb&dl=pexels-tahir-shaw-186980.jpg&fm=jpg')",
        
      },
      fontFamily:{
        Roboto:["Roboto, sans-serif"]

      },
      colors:{
        "weather-primary": "#FFF1DC",
        "weather-secondary": "rgba(255, 255, 255, 0.5)",
      },
      container:{
        padding: "2rem",
        center: true,
      },
      screens:{
        sm: "640px",
        md: "768px",
      }
    },
  },
  plugins: [],
}
