import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#111827',
        card: '#ffffff',
        primary: '#2563eb',
        muted: '#6b7280'
      }
    }
  },
  plugins: []
} satisfies Config;
