export const getImageUrl = (imageName) => {
  return require(`./assets/${imageName}`, import.meta.url).href;
};
//dynmaically imort images from assets folder