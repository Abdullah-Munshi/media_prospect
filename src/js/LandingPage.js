import videojs from "video.js";
import "videojs-youtube";
export default class LandingPage {
  constructor() {
    this.elements = {
      bookBtnContainer: document.querySelectorAll(".book-btn-container"),
      heroVideoId: document.getElementById("heroVideo"),
      // heroVideoIframe: document.getElementById("hero-video-iframe"),
      // blurOverlay: document.getElementById("blur-overlay"),
      // playSoundBtn: document.getElementById("play-sound-btn"),
    };

    this.init();
  }

  // Initialize the landing page functionalities
  init() {
    this.bookBtn();
    this.initHeroVideo();
  }

  bookBtn() {
    this.elements.bookBtnContainer.forEach((element) => {
      element.innerHTML = `<a
            href="#calendlyArea"
            class="text-white bg-gradient-to-r from-[#5ca4dd] to-[#0375ff99] px-6 py-4 rounded-md uppercase leading-[1.136] font-poppins font-medium text-[1.1rem] hover:bg-secondary transition duration-200 inline-block"
          >
            Book A Call</a>`;
    });
  }

  initHeroVideo() {
    videojs(this.elements.heroVideoId, {
      muted: true,
      autoplay: true,
      controls: true,
      techOrder: ["youtube"],
      sources: [
        {
          src: "https://www.youtube.com/watch?v=gogjG0IW7mo",
          type: "video/youtube",
        },
      ],
      youtube: {
        modestbranding: 1, // Disable YouTube logo (minimal branding)
        rel: 0, // Disable related videos at the end
        iv_load_policy: 3, // Disable annotations
        playsinline: 1, // Prevent full-screen on mobile devices
        disablekb: 1, // Disable keyboard controls (optional)
        fs: 0, // Disable fullscreen button
      },
    });
  }
}
