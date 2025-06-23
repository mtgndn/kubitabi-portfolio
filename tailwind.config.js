/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1e293b',
          700: '#334155',
          500: '#475569',
        },
        purple: {
          600: '#7c3aed',
          700: '#6b21a8',
          800: '#5b1893',
        },
        secondary: '#7c3aed',       // kullanılmış yerler için
        'secondary-dark': '#6b21a8',
        'secondary-light': '#a78bfa',
      },
      boxShadow: {
        card: '0 4px 8px rgba(124, 58, 237, 0.1)', // hafif mor tonlu gölge
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
