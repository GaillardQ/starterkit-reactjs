const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        'white-4': 'rgba(255, 255, 255, 0.04)',
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
          1000: '#27293d',
          1500: '#1d8cf8',
        },
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          475: '#ee581e', //color-primary-main-b-full
          '475-60': 'rgba(238, 88, 30, 0.6)', //color-primary-main-b-opacity-60
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
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
          1400: '#1e1e2f',
          1450: '#1e1e24',
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
