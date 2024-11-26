import Swiper from "swiper";
import "swiper/css/bundle";
import VideoPlayer from "./videoPlayer";

export default class Carousel {
  constructor(id, data, options = {}) {
    this.id = id;
    this.data = data;
    this.options = options; // { arrow: true/false, thumbnail: true/false }
    this.mainSwiper = null;
    this.thumbSwiper = null;
    this.videoInstances = new Map(); // Use Map for efficient tracking of VideoPlayer instances
  }

  // Generate structure dynamically
  generateStructure() {
    const container = document.getElementById(this.id);

    // Create main Swiper
    const mainSwiperContainer = document.createElement("div");
    mainSwiperContainer.className = "swiper-container main-swiper";
    mainSwiperContainer.innerHTML = '<div class="swiper-wrapper"></div>';

    // Append main Swiper to container
    container.appendChild(mainSwiperContainer);

    // Create thumbnail Swiper if enabled
    if (this.options.thumbnail) {
      const thumbSwiperContainer = document.createElement("div");
      thumbSwiperContainer.className = "swiper-container thumb-swiper";
      thumbSwiperContainer.innerHTML = '<div class="swiper-wrapper"></div>';

      // Append thumbnail Swiper to container
      container.appendChild(thumbSwiperContainer);
    }
  }

  // Generate slides dynamically
  generateSlides() {
    const mainWrapper = document.querySelector(
      `#${this.id} .main-swiper .swiper-wrapper`
    );
    const thumbWrapper = this.options.thumbnail
      ? document.querySelector(`#${this.id} .thumb-swiper .swiper-wrapper`)
      : null;

    this.data.forEach((item, index) => {
      // Create main slide
      const mainSlide = document.createElement("div");
      mainSlide.className = "swiper-slide";

      if (item.type === "video") {
        const videoId = `video-${index}`;
        mainSlide.innerHTML = `
          <video
            id="${videoId}"
            class="video-js"
            controls
            preload="auto"
            width="640"
            height="360"
          ></video>
        `;
      }

      mainWrapper.appendChild(mainSlide);

      // Create thumbnail slide
      if (thumbWrapper) {
        const thumbSlide = document.createElement("div");
        thumbSlide.className = "swiper-slide";
        if (item.type === "video") {
          const youtubeThumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
          thumbSlide.innerHTML = `<img src="${youtubeThumbnailUrl}" alt="Video Thumbnail" />`;
        }
        thumbWrapper.appendChild(thumbSlide);
      }
    });
  }

  // Initialize Video.js Player for a slide if not already initialized
  initializeVideoPlayerIfNeeded(elementId, videoId) {
    const videoElement = document.getElementById(elementId);
    if (!videoElement) {
      console.error(`Video element with ID "${elementId}" not found.`);
      return;
    }

    if (!this.videoInstances.has(elementId)) {
      const videoPlayer = new VideoPlayer(elementId, { videoId });
      videoPlayer.init();

      // Store the instance in the Map
      this.videoInstances.set(elementId, videoPlayer);
      console.log(`Initialized VideoPlayer for: ${elementId}`);
    }
  }

  // Initialize the carousel
  init() {
    // Generate structure and slides
    this.generateStructure();
    this.generateSlides();

    // Initialize thumbnail Swiper first (if enabled)
    if (this.options.thumbnail) {
      console.log("Initializing Thumbnail Swiper...");
      this.thumbSwiper = new Swiper(`#${this.id} .thumb-swiper`, {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
    }

    // Initialize main Swiper
    console.log("Initializing Main Swiper...");
    this.mainSwiper = new Swiper(`#${this.id} .main-swiper`, {
      loop: true,
      navigation: this.options.arrow
        ? {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
        : false,
      thumbs: this.options.thumbnail
        ? {
            swiper: this.thumbSwiper,
          }
        : null,
      on: {
        slideChange: () => {
          if (!this.mainSwiper) {
            console.error("Main Swiper is not initialized!");
            return;
          }

          const activeIndex = this.mainSwiper.realIndex;
          console.log(`Active Index: ${activeIndex}`);

          const activeSlide = document.querySelectorAll(
            `#${this.id} .main-swiper .swiper-slide`
          )[activeIndex];
          const videoElement = activeSlide.querySelector("video");

          if (videoElement) {
            const elementId = videoElement.id;
            const videoId = this.data[activeIndex].videoId;
            this.initializeVideoPlayerIfNeeded(elementId, videoId);
          }
        },
      },
    });

    console.log("Main Swiper Initialized:", this.mainSwiper);
  }

  // Cleanup all resources
  destroy() {
    this.videoInstances.forEach((player) => player.destroy());
    this.videoInstances.clear(); // Clear the Map
    if (this.mainSwiper) this.mainSwiper.destroy(true, true);
    if (this.thumbSwiper) this.thumbSwiper.destroy(true, true);
  }
}
