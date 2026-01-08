/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6feff',
          100: '#b3fcff',
          200: '#80faff',
          300: '#4df8ff',
          400: '#1af6ff',
          500: '#00F2FF',
          600: '#00c4cc',
          700: '#009199',
          800: '#006166',
          900: '#003033',
          950: '#001a1a',
        },
        gold: {
          50: '#e8eeff',
          100: '#c5d4ff',
          200: '#9bb5ff',
          300: '#7196ff',
          400: '#4775ff',
          500: '#1A53FF',
          600: '#1444cc',
          700: '#0f3399',
          800: '#0a2266',
          900: '#051133',
          950: '#020819',
        },
        champagne: {
          50: '#020808',
          100: '#030a0a',
          200: '#051210',
          300: '#0B2418',
          400: '#0f3624',
          500: '#144830',
          600: '#1a5a3c',
          700: '#206c48',
          800: '#267e54',
          900: '#2c9060',
          950: '#32a26c',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(0, 242, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
    },
  },
  plugins: [],
}
