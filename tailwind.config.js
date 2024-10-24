/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        L: '24px',
        M: '16px',
        R: '14px',
        S: '12px',
      },
      fontWeight: {
        Bold: '700',
        Medium: '500',
      },
      grayscale: {
        50: '#EFEFEF',
        100: '#E4EBF3',
        200: '#D1D6DA',
        300: '#949494',
        400: '#43434A',
        500: '#1C1C1C',
      },
      orange: {
        100: '#DF5D50',
        500: '#C84331',
      },
      opacity: {
        50: '0.5', // opacity-80
      },
      borderRadius: {
        full: '999px',
        100: '8px',
      },
      boxShadow: {
        popup:
          '0px 4px 2px rgba(20, 33, 43, 0.02), 0px 2px 18px rgba(20, 33, 43, 0.08)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textUtils = {
        '.BoldL-none': {
          fontSize: theme('fontSize.L'),
          fontWeight: theme('fontWeight.bold'),
          textDecoration: 'none',
        },
        '.BoldM-none': {
          fontSize: theme('fontSize.M'),
          fontWeight: theme('fontWeight.bold'),
          textDecoration: 'none',
        },
        '.BoldR-none': {
          fontSize: theme('fontSize.R'),
          fontWeight: theme('fontWeight.bold'),
          textDecoration: 'none',
        },
        '.BoldS-none': {
          fontSize: theme('fontSize.S'),
          fontWeight: theme('fontWeight.bold'),
          textDecoration: 'none',
        },
        '.MediumL-none': {
          fontSize: theme('fontSize.L'),
          fontWeight: theme('fontWeight.medium'),
          textDecoration: 'none',
        },
        '.MediumM-none': {
          fontSize: theme('fontSize.M'),
          fontWeight: theme('fontWeight.medium'),
          textDecoration: 'none',
        },
        '.MediumR-none': {
          fontSize: theme('fontSize.R'),
          fontWeight: theme('fontWeight.medium'),
          textDecoration: 'none',
        },
        '.MediumS-none': {
          fontSize: theme('fontSize.S'),
          fontWeight: theme('fontWeight.medium'),
          textDecoration: 'none',
        },
        '.MediumR-underline': {
          fontSize: theme('fontSize.R'),
          fontWeight: theme('fontWeight.medium'),
          textDecoration: 'underline',
        },
        '.MediumS-underline': {
          fontSize: theme('fontSize.S'),
          fontWeight: theme('fontWeight.medium'),
          textDecoration: 'underline',
        },
      }
      const colorUtils = {
        '.text-default': {
          color: theme('grayscale.400'),
        },
        '.text-strong': {
          color: theme('grayscale.500'),
        },
        '.text-white': {
          color: theme('grayscale.50'),
        },
        '.text-orange': {
          color: theme('orange.500'),
        },
        '.surface-default': {
          backgroundColor: theme('grayscale.100'),
        },
        '.surface-box-light': {
          backgroundColor: theme('grayscale.50'),
        },
        '.surface-box-dark': {
          backgroundColor: theme('grayscale.200'),
        },
        '.surface-orange': {
          backgroundColor: theme('orange.100'),
        },
      }
      addUtilities(textUtils)
      addUtilities(colorUtils)
    },
  ],
}
