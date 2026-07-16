import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          deep:    '#080F26',
          dark:    '#0A1530',
          mid:     '#152040',
          light:   '#1E3358',
        },
        gold: {
          DEFAULT: '#B8962E',
          light:   '#D4AE4E',
          pale:    '#F7F0DE',
          rule:    '#DCC06A',
        },
        cream:   '#FAF8F3',
        surface: '#F4F1EB',
        ink: {
          DEFAULT: '#1C1A16',
          mid:     '#3E3B34',
          muted:   '#6C6860',
          faint:   '#9A9790',
        },
        border: {
          DEFAULT: '#E3DDD4',
          light:   '#EDEAD3',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0D1B3E 0%, #162444 60%, #0F2847 100%)',
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-md': '0 4px 12px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 32px rgba(0,0,0,0.12)',
        'gold':    '0 3px 16px rgba(184,150,46,0.35)',
        'wa':      '0 3px 16px rgba(37,211,102,0.4)',
      },
    },
  },
  plugins: [],
}
export default config
