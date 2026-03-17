/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Architects Daughter"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        rose:    { DEFAULT: '#e36397', light: '#ffddd2', dark: '#c94a60' },
        bleu:    { DEFAULT: '#33658a', light: '#a8c8e0', dark: '#1e4d6b' },
        menthe:  { DEFAULT: '#0cbaba', light: '#c8ebeb' },
        peche:   { DEFAULT: '#ff8b60', light: '#fff0e8' },
        lavande: { DEFAULT: '#7b5ea7', light: '#e8dcf5' },
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
}
