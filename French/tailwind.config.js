/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Force class-based pour toggle manuel (pas système)
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { colors: { gold: '#D4AF37' } },
  },
  plugins: [],
}