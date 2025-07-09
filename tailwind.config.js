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
          50: '#f2eacb', // light background
          100: '#f2eacb',
          200: '#e6d9a8',
          300: '#c9a13b', // gold
          400: '#267d85', // blue/teal
          500: '#267d85', // blue/teal
          600: '#267d85', // blue/teal
          700: '#1a4d4f', // dark teal
          800: '#222',    // dark brown/black
          900: '#111',
        },
        gold: '#c9a13b',
        blue: '#267d85',
        teal: '#267d85',
        dark: '#222',
        lightgray: '#f2eacb',
      },
      fontFamily: {
        sans: ['Glacial Indifference', 'Inter', 'system-ui', 'sans-serif'],
        glacial: ['Glacial Indifference', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}