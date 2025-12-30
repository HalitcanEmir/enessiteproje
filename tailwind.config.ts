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
        primary: {
          DEFAULT: '#1e40af', // Mavi
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#000000', // Siyah
          dark: '#0a0a0a',
          light: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#2563eb',
          light: '#60a5fa',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

