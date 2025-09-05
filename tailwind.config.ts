import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Method 1: Direct reference
        celestial: ['CelestialFont', 'Petrona', 'serif'],
        
        // Alternative Method 2: Using CSS variables
        // celestial: ['var(--font-celestial)', 'Garamond', 'serif'],
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
      keyframes: {
        popup: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        popup: 'popup 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
