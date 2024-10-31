/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'], 
      },
      animation: {
        'bounce-up': 'bounce-up 1.5s ease-in-out infinite',
        'bounce-down': 'bounce-down 1.5s ease-in-out infinite',
      },
      keyframes: {
        'bounce-up': {
          '0%, 100%': { transform: 'translateY(0) translateX(-40px)' },
          '50%': { transform: 'translateY(-10px) translateX(-40px)' },
        },
        'bounce-down': {
          '0%, 100%': { transform: 'translateY(0) translateX(50px)' },
          '50%': { transform: 'translateY(10px) translateX(50px)' },
        },
      },
    },
  },
  plugins: [],
};
