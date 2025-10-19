import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#0EA5E9',
        accent: '#F59E0B',
        neutral: '#0F172A',
        surface: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
} satisfies Config

