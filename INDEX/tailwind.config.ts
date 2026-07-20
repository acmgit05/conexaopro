import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
    "./src/componentes/**/*.{js,ts,jsx,tsx}"
  ],
    theme: {
    extend: {
      colors: {
        senai: {
          dark: '#004A7F',
          light: '#62C3D0',
          background: '#F8FAFC'
        }
      },
      // 🚀 Animação estilo Bolsa de Valores (B3) inserida aqui
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
