
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        apple:['SF Pro Display'],
        apple2:['SF Pro Text'],
        poppins: ['Poppins', 'sans-serif'],
        primary:['Oswald','sans-serif'],
        secondary:['Protest Riot','sans-serif'],
      },
      colors: {
        primary: "#F8F0E3",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
       screens: {
         'sm': '640px',
         'md': '790px',
         'lg': '1024px',
         'xl': '1280px',
       },
       boxShadow:{
        '3xl': '0 -5px 40px -6px rgb(0 0 0 / 0.25)',
       }
    },
  },
  plugins: [],
}
