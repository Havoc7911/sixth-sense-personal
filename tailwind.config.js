/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '10px': '10px',
        '11px': '11px',
      },
      letterSpacing: {
        '0.2em': '0.2em',
      },
      borderRadius: {
        '2.5rem': '2.5rem',
      },
      colors: {
        'neutral': {
          900: '#0d0d0d',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
        },
      },
    },
  },
  plugins: [],
}
