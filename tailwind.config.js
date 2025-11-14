/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'unicorn-purple': '#A78BFA',
        'unicorn-blue': '#93C5FD',
        'unicorn-pink': '#F9A8D4',
        'unicorn-mint': '#A7F3D0',
        'unicorn-lilac': '#DDD6FE',
      },
      backgroundImage: {
        'gradient-unicorn': 'linear-gradient(135deg, #DDD6FE 0%, #93C5FD 50%, #A7F3D0 100%)',
      },
    },
  },
  plugins: [],
}


