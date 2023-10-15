import Plyr from "plyr";

const heroPlayer = new Plyr("#heroPlayer", {
  ratio: "16:9",
});

const players = Array.from(document.querySelectorAll(".video_player")).map(
  (p) =>
    new Plyr(p, {
      ratio: "16:9",
    })
);

// Hide the preloader when the page is fully loaded
window.onload = function () {
  document.getElementById("preloader").classList.add("hide");
};
