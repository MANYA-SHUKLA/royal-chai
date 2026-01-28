import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        cream: '#fffaf0',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce': 'bounce 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 8s ease-in-out infinite',
        'pulse-orb': 'pulse-orb 8s ease-in-out infinite',
        'pulse-orb-reverse': 'pulse-orb-reverse 10s ease-in-out infinite',
        'spin-slow-reverse': 'spin-slow-reverse 6s linear infinite',
        'float-ornament-1': 'float-ornament-1 7s ease-in-out infinite',
        'float-ornament-2': 'float-ornament-2 9s ease-in-out infinite',
        'float-ornament-3': 'float-ornament-3 8s ease-in-out infinite',
        'float-ornament-4': 'float-ornament-4 6s ease-in-out infinite',
        'float-particle': 'float-particle 4s ease-in-out infinite',
        'orbit': 'orbit 12s linear infinite',
        'ray-rotate': 'ray-rotate 20s linear infinite',
        'ping-gentle': 'ping-gentle 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow-reverse': 'pulse-slow-reverse 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)',
          },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'ping': {
          '75%, 100%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slideIn': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(-15px)' },
          '50%': { transform: 'translateY(10px) translateX(15px)' },
          '75%': { transform: 'translateY(15px) translateX(-5px)' },
        },
        'pulse-orb': {
          '0%, 100%': { 
            opacity: '0.25',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.15',
            transform: 'scale(1.05)',
          },
        },
        'pulse-orb-reverse': {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.1',
            transform: 'scale(0.95)',
          },
        },
        'spin-slow-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'float-ornament-1': {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0.4',
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '0.2',
          },
        },
        'float-ornament-2': {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(45deg)',
            opacity: '0.3',
          },
          '50%': { 
            transform: 'translateY(15px) rotate(225deg)',
            opacity: '0.1',
          },
        },
        'float-ornament-3': {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '0.4',
          },
          '50%': { 
            transform: 'translateY(-15px) scale(1.2)',
            opacity: '0.6',
          },
        },
        'float-ornament-4': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            opacity: '0.25',
          },
          '50%': { 
            transform: 'translateY(20px)',
            opacity: '0.1',
          },
        },
        'float-particle': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)',
          },
          '25%': { 
            transform: 'translateY(-10px) translateX(5px)',
          },
          '50%': { 
            transform: 'translateY(0) translateX(10px)',
          },
          '75%': { 
            transform: 'translateY(10px) translateX(5px)',
          },
        },
        'orbit': {
          '0%': { 
            transform: 'rotate(0deg) translateX(40%) rotate(0deg)',
          },
          '100%': { 
            transform: 'rotate(360deg) translateX(40%) rotate(-360deg)',
          },
        },
        'ray-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ping-gentle': {
          '75%, 100%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
        },
        'pulse-slow-reverse': {
          '0%, 100%': { 
            opacity: '0.1',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.05',
            transform: 'scale(0.95)',
          },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config