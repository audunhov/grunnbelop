/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

export default {
  content: ['index.html', 'src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        nav: '#cf0006',
        select: '#f68282',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
}
