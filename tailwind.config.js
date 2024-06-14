/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}','./src/routes/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
     colors:{
      'svelte-orange':"#ff3c00"
     }
    },
  },
  plugins: []
};
