module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#00379C',
      'dark-blue': '#061632',
      'white': '#fff',
      'gray': '#f2f2f2',
      'secondary': '#56CCF2',
      'transparent': 'transparent',
      'green': '#13ce66',
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/images/hero.jpg')",
        'logo': "url('/assets/images/logo.png')",
        'about-image': "url('/assets/images/about.jpg')",
      }
    },
  },
  plugins: [],
}
