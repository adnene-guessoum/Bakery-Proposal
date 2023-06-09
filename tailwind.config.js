const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // not implemented, future feature
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/images/banner.jpeg')" // actually matters
      },
      flex: {},
      typography: theme => ({
        DEFAULT: {
          css: {
            // completely overriden in the most part
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
