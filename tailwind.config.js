/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0F0D0B',      // deep warm charcoal
          soft: '#1A1614',          // soft surface
          muted: '#2A231E',         // border-friendly
        },
        cream: {
          DEFAULT: '#F5EDE0',       // warm off-white
          soft: '#EDE3D3',          // softer surface
        },
        ember: {
          DEFAULT: '#E8541E',       // primary accent — appetizing orange
          soft: '#F5774A',
          deep: '#B33D12',
        },
        brass: {
          DEFAULT: '#C9922E',       // used sparingly — dividers, prices
          soft: '#E0B45A',
          deep: '#9C6E1F',
        },
        halal: {
          DEFAULT: '#1F7A3F',
          soft: '#3AA55F',
        },
        muted: {
          DEFAULT: '#8B7A66',       // body text on dark
          soft: '#A89680',
        },
      },
      letterSpacing: {
        'ultra': '0.3em',
        'wider-2': '0.15em',
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-xl': ['6.5rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        'ember-glow': 'emberGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        emberGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 84, 30, 0)' },
          '50%': { boxShadow: '0 0 24px 0 rgba(232, 84, 30, 0.35)' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}