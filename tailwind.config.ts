import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#05070f',
        foreground: '#e2e8f0',
        card: '#0b1224',
        primary: '#8b5cf6',
        muted: '#94a3b8'
      }
    }
  },
  plugins: []
} satisfies Config;
