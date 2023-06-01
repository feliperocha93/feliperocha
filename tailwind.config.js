/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    colors: {
      white: {
        100: '#F1F5FD',
        200: '#E5EAF6',
        300: '#D9E0F2',
        400: '#C4CDE4',
        500: '#BBC5DD',
      },
      black: {
        100: '#1A3363',
        200: '#132953',
        300: '#0E1E3D',
        400: '#09142A',
        500: '#050D1C',
      },
      primary: {
        100: '#2958B3',
        200: '#27509E',
        300: '#19408A',
        400: '#13377C',
        500: '#0B2964',
      },
    },
  },
};
