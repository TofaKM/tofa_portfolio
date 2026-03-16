import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use CSS variables injected by next/font — guaranteed zero flash
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      colors: {
        cream: {
          50:  '#FDFCF9',
          100: '#F8F6F2',
          200: '#F1EEE8',
          300: '#E9E4DB',
          400: '#DDD8CE',
        },
        border:        '#E5E1D8',
        accent:        '#D6B98C',
        'accent-dark': '#B8956A',
        ink: {
          900: '#1F1F1F',
          700: '#3D3D3D',
          500: '#6B6B6B',
          300: '#A8A8A8',
          100: '#D4D4D4',
        },
      },
      animation: {
        'fade-up': 'fadeUp .5s ease forwards',
        'fade-in': 'fadeIn .4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
