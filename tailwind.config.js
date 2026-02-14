/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sea: {
          50: '#e6f4fb',
          100: '#b3def5',
          200: '#80c8ef',
          300: '#4db2e9',
          400: '#1a9ce3',
          500: '#0077BE',
          600: '#006098',
          700: '#004872',
          800: '#00304c',
          900: '#001826',
        },
        forest: {
          50: '#e9f5e9',
          100: '#c0e3c0',
          200: '#96d196',
          300: '#6dbf6d',
          400: '#43ad43',
          500: '#228B22',
          600: '#1b6f1b',
          700: '#145314',
          800: '#0e380e',
          900: '#071c07',
        },
        aqua: {
          50: '#e6f9ff',
          100: '#b3eeff',
          200: '#80e3ff',
          300: '#4dd8ff',
          400: '#1acdff',
          500: '#00BFFF',
          600: '#0099cc',
          700: '#007399',
          800: '#004d66',
          900: '#002633',
        },
        sand: {
          50: '#fdf8f0',
          100: '#f9edd6',
          200: '#f4e1bb',
          300: '#efd5a0',
          400: '#eaca86',
          500: '#e5be6b',
          600: '#d4a84a',
          700: '#b38c3a',
          800: '#8a6c2d',
          900: '#614c20',
        },
        coral: {
          500: '#E8634A',
          600: '#D14E36',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
