const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        container: {
          center: true,
          padding: {
            default: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
          },
        },
        colors: {
          'accent-1': '#333',
        },
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/ui'),
    ],
  }
  
