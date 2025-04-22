/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        runningTime: {
          'from': { width: '100%' },
          'to': { width: '0%' }
        }
      },
      animation: {
        runningTime: 'runningTime 3s linear forwards'
      },
      // Add these new extensions for 3D transforms
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        '1000': '1000px',
      }
    }
  },
  plugins: [],
}