import PhotoSwipeLightbox from "./ps/photoswipe-lightbox.esm";
const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery-box",
  children: ".img-target",
  pswpModule: () => import("./ps/photoswipe.esm"),
  preload: [2,4]
});
lightbox.init();
