/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  prefix: 'tw-',
  theme: {
    colors: {
      'overlay': 'rgba(10, 11, 12, .65)',
      'bg': '#F6F6F6',
      'white': '#FFF',
      'black': '#000',
      primary: {
        'light': '#FFE19C',
        DEFAULT: '#FDB713',
        'dark': '#E3A107',
      },
      secondary: {
        100: '#F2F9FF',
        200: '#C9E3F8',
        300: '#51A2E7',
        400: '#0077DB',
        500: '#00569E',
        600: '#004075',
        700: '#001C33'
      },
      grays: {
        100: '#F8FAFB',
        150: '#E2E6E9',
        200: '#BEC6CC',
        300: '#959EA6',
        400: '#6C7680',
        500: '#4B5259',
        600: '#2B2F33',
        700: '#0A0B0C'
      },
      success: {
        100: '#EAFAEE',
        300: '#84E199',
        400: '#28A745',
        500: '#1E7B33',
        700: '#11461D'
      },
      warning: {
        100: '#FFF5E5',
        300: '#FFCE85',
        400: '#FF9800',
        500: '#A85D00',
        700: '#4D2800'
      },
      info: {
        100: '#E8F9FC',
        300: '#A0E8F3',
        400: '#17A2B8',
        500: '#0F697A',
        700: '#072F36'
      },
      danger: {
        100: '#FDF2F3',
        300: '#F2B5BB',
        400: '#DC3545',
        500: '#871722',
        700: '#410B10'
      }
    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
      'iPhone-6-plus': { 'max': '414px' },
      'iPhone-6': { 'max': '375px' },
      'android-portrait': { 'max': '360px' },
      'iPhone-4': { 'max': '320px' },
    },
    borderColor:{
      1: 'rgba(0, 0, 0, .12)',
      2: 'rgba(0, 0, 0, .2)'
    },
    extend: {
      spacing: {
        'nav-height': '120px',
        'md-nav-height': '90px',
        'iPhone-6-plus-nav-height': '60px',
        'android-portrait-nav-height': '170px'
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    }
  },
  plugins: [],
}