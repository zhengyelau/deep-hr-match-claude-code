module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        dhmblue: {
          50: '#f5f9ff',
          100: '#e6f0ff',
          200: '#bcd8ff',
          300: '#8bbfff',
          400: '#5aa6ff',
          500: '#2d8cff',
          600: '#1f6fd6',
          700: '#16539f',
          800: '#0f386b',
          900: '#08213a'
        }
      },
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
