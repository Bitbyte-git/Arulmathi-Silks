/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0d0d1a',
        dark2: '#13121f',
        dark3: '#1a1830',
        dark4: '#1e1b30',
        purple: {
          deep: '#2e0f47',
          mid: '#4b1a6e',
          glow: '#5c1f8a',
        },
        gold: {
          DEFAULT: '#c9933a',
          light: '#d4a853',
        },
        cream: '#f5f0e8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

