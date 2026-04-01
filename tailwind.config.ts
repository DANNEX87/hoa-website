import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9f0',
          100: '#dcf0dc',
          500: '#2d7a2d',
          600: '#246024',
          700: '#1a471a',
        }
      }
    },
  },
  plugins: [],
}
export default config
