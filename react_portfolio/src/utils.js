// JavaScript
// Vite / modern bundlers (ESM)
export const getImageUrl = (imagePath) => {
  return new URL(`/assets/${imagePath}`, import.meta.url).href;
};