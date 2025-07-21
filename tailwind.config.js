/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        panel: "var(--panel)",
        uBlack: "var(--uBlack)",
        uGray: "var(--uGray)",
        uGrayLight: "var(--uGrayLight)",
        uGrayLightLight: "var(--uGrayLightLight)",
        uRed: "var(--uRed)",
        uGreen: "var(--uGreen)",
        uBlue: "var(--uBlue)",
        score: {
          1: "var(--score-1)",
          2: "var(--score-2)",
          3: "var(--score-3)",
          4: "var(--score-4)",
          5: "var(--score-5)",
          6: "var(--score-6)",
          7: "var(--score-7)",
          8: "var(--score-8)",
          9: "var(--score-9)",
          10: "var(--score-10)",
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};