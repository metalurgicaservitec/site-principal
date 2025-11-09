/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'servitec-orange': '#f97316',
        'servitec-dark': '#1f2937',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    // Plugin para otimizações de performance
    function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.will-change-opacity': {
          'will-change': 'opacity',
        },
        '.contain-layout': {
          'contain': 'layout',
        },
        '.contain-paint': {
          'contain': 'paint',
        },
        '.contain-strict': {
          'contain': 'strict',
        },
      });
      
      addComponents({
        '.btn-primary': {
          '@apply bg-servitec-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl': {},
        },
        '.btn-secondary': {
          '@apply bg-transparent border-2 border-servitec-orange text-servitec-orange hover:bg-servitec-orange hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300': {},
        },
        '.card': {
          '@apply bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300': {},
        },
        '.section-padding': {
          '@apply py-16 px-4 sm:px-6 lg:px-8': {},
        },
        '.container-custom': {
          '@apply max-w-7xl mx-auto': {},
        },
      });
    },
  ],
  // Otimizações de build
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};