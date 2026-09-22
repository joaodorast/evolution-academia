import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#04050A',
        coal: '#090C14',
        slab: '#0E121C',
        bone: '#EDF0F7',
        ash: '#7A8296',
        dim: '#4C5365',
        lav: { DEFAULT: '#8E9FDA', deep: '#5E6CA6' },
        haze: '#C2CADE',
        hair: 'rgba(226,232,246,0.10)',
      },
      fontFamily: {
        display: ['Archivo', 'Impact', 'Arial Narrow', 'sans-serif'],
        sans: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        micro: ['clamp(9.5px,0.78vw,11px)', { lineHeight: '1.5', letterSpacing: '0.17em' }],
        d3: ['clamp(1.35rem,2.7vw,2.3rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        d2: ['clamp(1.9rem,5.4vw,4.4rem)', { lineHeight: '0.88', letterSpacing: '-0.028em' }],
        d1: ['clamp(2.45rem,8.4vw,7.6rem)', { lineHeight: '0.86', letterSpacing: '-0.03em' }],
        mark: ['clamp(3.35rem,16.3vw,15.4rem)', { lineHeight: '0.76', letterSpacing: '-0.05em' }],
      },
      spacing: { gut: 'clamp(18px,4.2vw,64px)', sec: 'clamp(72px,9.5vw,150px)' },
      maxWidth: { frame: '1560px' },
      borderRadius: { frame: '16px' },
      transitionTimingFunction: { out: 'cubic-bezier(0.2,0.8,0.2,1)' },
      keyframes: {
        slide: { to: { transform: 'translateX(-50%)' } },
        rise: { from: { opacity: '0', transform: 'translateY(26px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: { slide: 'slide 34s linear infinite', rise: 'rise .9s cubic-bezier(.2,.8,.2,1) both' },
    },
  },
  plugins: [animate, typography],
} satisfies Config
