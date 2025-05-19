/**
 * location: frontend/tailwind.config.js
 * Tailwind configuration with basic dark theme colors.
 * Only contains minimal theme customization.
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#121212',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
