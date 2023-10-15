import videojs from "video.js";
import Plyr from "plyr";
import "../../node_modules/plyr/dist/plyr.css";

// Calculate Hero video height base on screen height
const heroVideoHeight =
  (window.innerHeight || document.documentElement.clientHeight) - 270;

// let player2 = videojs("#video-frame-2", {
//   fluid: true,
// });
// let player3 = videojs("#video-frame-3", {
//   fluid: true,
// });

const heroPlayer = new Plyr("#heroPlayer", {
  // ratio: "16:9",
});

const players = Array.from(document.querySelectorAll(".video_player")).map(
  (p) =>
    new Plyr(p, {
      ratio: "16:9",
    })
);

console.log(players);
