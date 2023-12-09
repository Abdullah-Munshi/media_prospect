import Splide from "@splidejs/splide";
import { ytPlayersForSlider } from "./videoPlayer";
function setupSlider() {
  const mainSliderObj = {
    type: "fade",
    pagination: false,
    arrows: false,
    cover: true,
  };
  const thumbSliderObj = {
    rewind: true,
    fixedWidth: 104,
    fixedHeight: 58,
    isNavigation: true,
    radius: 10,
    gap: 10,
    focus: -1,
    pagination: false,
    arrows: false,
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints: {
      640: {
        fixedWidth: 66,
        fixedHeight: 38,
      },
    },
  };
  const exampleMain = new Splide(".example-slider", mainSliderObj);

  const exampleThumbnails = new Splide(
    ".example-slider-thumbnail",
    thumbSliderObj
  );
  exampleMain.sync(exampleThumbnails);
  exampleMain.mount();
  exampleThumbnails.mount();
  exampleMain.on("move", () => {
    ytPlayersForSlider.forEach((ytPlayer) => ytPlayer.pause());
  });

  const testimonialMain = new Splide(".testimonial-slider", mainSliderObj);
  const testimonialThumbnails = new Splide(
    ".testimonial-slider-thumbnail",
    thumbSliderObj
  );

  testimonialMain.sync(testimonialThumbnails);
  testimonialMain.mount();
  testimonialThumbnails.mount();
  testimonialMain.on("move", () => {
    ytPlayersForSlider.forEach((ytPlayer) => ytPlayer.pause());
  });
}

export default setupSlider;
