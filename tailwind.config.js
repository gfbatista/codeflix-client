import scrollbarHide from 'tailwind-scrollbar-hide';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [
    scrollbarHide,
  ],
};
