/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'garden-green': '#4B7251',
        'garden-green-dark': '#405F45',
        'sea-teal': '#3F7F87',
        'prickly-pear': '#C8575A',
        'cycladic-white': '#F8F5F0',
        'warm-sand': '#E0C9A6',
        'charcoal': '#2D2A28',
      },
      fontFamily: {
        'serif': ['Tinos', 'serif'],
        'sans': ['Open Sans', 'sans-serif'],
        'accent': ['Aka-Acid-Around', 'cursive'],
      },
    },
  },
  plugins: [],
}
{
  "name": "fragkosyko",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/tailwind": "^5.1.0",
    "astro": "^4.0.0",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.7"
  }
}

