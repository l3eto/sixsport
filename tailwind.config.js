/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Asegúrate de incluir los archivos Vue
  ],
  theme: {
    extend: {
      minHeight: {
        inherit: 'inherit',
      }
    },
  },
  plugins: [],
}

