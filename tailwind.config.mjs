/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f2',
          100: '#dcf2e0',
          200: '#bce4c6',
          300: '#8dd0a0',
          400: '#5cb574',
          500: '#729177', // Main brand green from CSS
          600: '#527a5a',
          700: '#446349',
          800: '#394f3c',
          900: '#304233',
        },
        secondary: {
          50: '#eff8ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3898ec', // Accent blue from CSS
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f7f7f7', // Light grey from CSS
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#7c7c7c', // Medium grey from CSS
          600: '#525252',
          700: '#404040',
          800: '#333333', // Dark text from CSS
          900: '#222222', // Darkest text from CSS
        },
        background: {
          DEFAULT: '#f5f3ef', // Main background from CSS
          light: '#f6f8f5', // Light background from CSS
          white: '#f7fbf2', // White background from CSS
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        decorative: ['El Messiri', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2rem, 8vw, 5.25rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['clamp(1.75rem, 5vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.4', fontWeight: '500' }],
        'h4': ['clamp(1.125rem, 2.5vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '500' }],
        'responsive': ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.5' }],
        'responsive-lg': ['clamp(1rem, 2.5vw, 1.125rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        'screen-2xl': '1536px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}