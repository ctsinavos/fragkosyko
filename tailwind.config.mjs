/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'primary': '#9b392b',           // Terracotta Red - main brand
        'primary-dark': '#A84739',      // Darker terracotta for hovers
        'secondary': '#e4712b',         // Burnt Orange - secondary actions
        'secondary-dark': '#D17330',    // Darker orange for hovers

        // Accent Colors
        'accent-bright': '#f8cb48',     // Golden Yellow - highlights
        'accent-fresh': '#d9e35a',      // Lime Green - success/fresh

        // Text Colors
        'text-primary': '#4c2e20',      // Dark Brown - main text
        'text-secondary': '#a8703b',    // Medium Brown - muted text
        'text-dark': '#2B2828',         // Charcoal - high contrast text

        // Surface & Background Colors
        'surface': '#D4A888',           // Tan - cards, subtle backgrounds
        'background': '#F5F4F0',        // Off-White - page background

        // Legacy aliases (for gradual migration)
        'garden-green': '#9b392b',      // Now maps to primary
        'garden-green-dark': '#A84739', // Now maps to primary-dark
        'sea-teal': '#e4712b',          // Now maps to secondary
        'prickly-pear': '#9b392b',      // Now maps to primary
        'cycladic-white': '#F5F4F0',    // Now maps to background
        'warm-sand': '#D4A888',         // Now maps to surface
        'charcoal': '#4c2e20',          // Now maps to text-primary
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

