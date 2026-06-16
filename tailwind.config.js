/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#C0392B',
        'crimson-dark': '#96281B',
        'crimson-light': '#E74C3C',
        gold: '#C9A84C',
        'warm-black': '#0D0A09',
        'dark-brown': '#1A1108',
        'medium-brown': '#2C1F0E',
        'light-brown': '#3D2B12',
        cream: '#F5EDD8',
        'cream-dim': '#C4B49A',
        parchment: '#E8D5B0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        chinese: ['"Noto Serif SC"', '"Source Han Serif SC"', 'serif'],
      },
      backgroundImage: {
        'radial-dark': 'radial-gradient(ellipse at center, #2C1F0E 0%, #0D0A09 70%)',
      },
    },
  },
  plugins: [],
}
