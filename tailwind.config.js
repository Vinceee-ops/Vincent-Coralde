/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#D3E97A',
          hover: '#C4E06A',
          muted: '#9db448',
          dim: 'rgba(211, 233, 122, 0.12)',
          glow: 'rgba(211, 233, 122, 0.35)',
        },
        dark: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#101520',
          800: '#161c2a',
          750: '#1d2538',
          700: '#252f46',
          card: 'rgba(16, 21, 32, 0.85)',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 25px rgba(211, 233, 122, 0.25)',
        'glow-accent-lg': '0 0 50px rgba(211, 233, 122, 0.35)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
};
