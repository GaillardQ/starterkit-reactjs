const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        'white-4': 'rgba(255, 255, 255, 0.04)',
        purple: {
          100: '#faf5ff',
          200: '#e9d8fd',
          300: '#d6bcfa',
          400: '#b794f4',
          500: '#9f7aea',
          600: '#805ad5',
          700: '#6b46c1',
          800: '#553c9a',
          900: '#44337a',
        },
      },
      fontFamily: {
        roboto: 'Roboto',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      height: {
        '1px': '1px',
        '4-1/2': '1.125rem',
        7: '1.75rem',
        9: '2.25rem',
        14: '3.5rem',
        28: '7rem',
        41: '10.25rem',
        45: '11.25rem',
        56: '14rem',
        57: '14.25rem',
        80: '20rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
      },
      inset: {
        2: '0.5rem',
        4: '1rem',
        8: '2rem',
        half: '50%',
      },
      margin: {
        '-2': '-0.5rem',
        '-4': '-1rem',
        '-8': '-2rem',
      },
      maxHeight: {
        '1/2': '50%',
        '2/3': '66.67%',
        '4/5': '80%',
      },
      maxWidth: {
        '1/2': '50%',
        '2/3': '66.67%',
        '4/5': '80%',
      },
      minWidth: {
        '1/2': '50%',
        '2/3': '66.67%',
        '4/5': '80%',
      },
      width: {
        '1px': '1px',
        '100px': '100px',
        '250px': '250px',
      },
    },
  },
  variants: {
    backgroundColor: ['disabled'],
    fill: ['svg'],
    textColor: ['svg'],
    opacity: ['disabled'],
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('svg', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`svg${separator}${className}`)} svg`;
        });
      });
    }),
  ],
};
