/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
      colors: {
        'brand-pink': '#F8E1D7',
        'brand-red': '#E54E35',
        'brand-black': '#323232',
        'brand-white': '#F8F0ea',
        'brand-bg': '#FFF9f7',
      },
      fontFamily: {
        'lora-regular': ['Lora', 'serif'],
        'agbalumo-regular': ['Agbalumo', 'system-ui'],
      },
    },
  },
  plugins: [],
}
