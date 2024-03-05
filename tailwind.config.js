/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      serif: ['Domine', 'serif'],
    },
    extend: {
      backgroundImage: {
        standHero: `url(/images/stand-hero.svg)`,
        kkak: `url('/kkak.jpg')`,
        kimchi: `url('/kimchi-vid.mp4')`,
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
