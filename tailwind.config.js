/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        avora: {
          ivory: '#FAF9F6',
          cream: '#F4F2EC',
          warm: '#FDFCFA',
          paper: '#F8F7F3',
          border: 'rgba(24, 24, 27, 0.08)',
          'border-light': 'rgba(24, 24, 27, 0.04)',
          charcoal: '#18181B',
          muted: '#71717A',
          subtle: '#A1A1AA',
          lavender: '#A855F7',
          'lavender-soft': '#E9D5FF',
          blue: '#60A5FA',
          'blue-soft': '#DBEAFE',
          pink: '#F472B6',
          cyan: '#38BDF8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Instrument Serif"', '"Cinzel"', 'Georgia', 'serif'],
        display: ['"Syne"', '"Playfair Display"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'glass-hover': '0 20px 48px -10px rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
        'glow-iridescent': '0 0 40px -10px rgba(168, 85, 247, 0.18), 0 0 40px -10px rgba(96, 165, 250, 0.18)',
      },
    },
  },
  plugins: [],
};
