
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
        primary: "#ffffffcc",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
       screens: {
         'sm': '450px',
         'md': '790px',
         'lg': '1024px',
         'xl': '1280px',
       },
       boxShadow:{
        // 'nav': '0 -7px 30px -8px rgb(0 0 0 / 0.25)',
        // 'smallBox': '0 2px 100px 2px rgb(0 0 0 / 0.25)',
        // 'div': '0px -10px 40px -30px rgb(0 0 0 / 0.25)',
        // 'div2': '0px -16px 40px -30px rgb(0 0 0 / 0.25)',
       }
    },
  },
  plugins: [],
}
