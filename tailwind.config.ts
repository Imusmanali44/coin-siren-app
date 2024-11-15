import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--footer-background)',
        highlightText: '#343741',
        normalText: '#5E626F',
        animationText: '#FFE76B',
      },
      container: {
        center: true,
        screens: {
          lg: '1320px',
        },
      },
      animation: {
        'text-bounce': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
