/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... senin mevcut content ayarların
  ],
  theme: {
    extend: {
      fontFamily: {
        // Buraya "garet" adında yeni bir font ailesi ekliyoruz
        // Layout.js'de tanımladığımız değişkeni burada çağırıyoruz
        garet: ["var(--font-garet)", "sans-serif"],
      },
    },
  },
  plugins: [],
};