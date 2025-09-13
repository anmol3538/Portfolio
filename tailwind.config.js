// tailwind.config.js
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"  // Make sure the paths to your components and files are correct
  ],
  darkMode: 'class',  // This enables dark mode using a class on the <html> element
  theme: {
    extend: {
      // Add customizations here if necessary
    },
  },
  plugins: [],
};
