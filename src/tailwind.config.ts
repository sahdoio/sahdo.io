import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#f0a030',
        surface: {
          primary: '#0f1117',
          secondary: '#1a1d26',
          tertiary: '#21242f',
        },
        border: {
          subtle: '#2a2d3a',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
}

export default config
