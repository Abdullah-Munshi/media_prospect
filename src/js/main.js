import videojs from "video.js";

// Calculate Hero video height base on screen height
const heroVideoHeight =
  (window.innerHeight || document.documentElement.clientHeight) - 270;

let player1 = videojs("#video-frame-1", {
  height: heroVideoHeight,
});
let player2 = videojs("#video-frame-2", {
  fluid: true,
});
let player3 = videojs("#video-frame-3", {
  fluid: true,
});
