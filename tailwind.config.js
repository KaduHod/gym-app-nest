/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/views/**/*.{hbs,js,html}",
    "./public/views/partials/**/*.{hbs,js,html}",
    "./public/views/partials/components/**/*.{hbs,js,html}",
    "./public/js/**/*.{hbs,js,html}"
  ],
  theme: {
    extend: {
      textDecoration: {
        'underline': 'underline', // Add 'underline' class for text-decoration: underline;
        'line-through': 'line-through', // Add 'line-through' class for text-decoration: line-through;
      },
    },
  },
  plugins: [],
}