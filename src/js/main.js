import Plyr from "plyr";

const heroPlayer = new Plyr("#heroPlayer", {
  ratio: "16:9",
});

heroPlayer.on("ready", function () {
  document.getElementById("preloader").classList.add("hide");
});

const players = Array.from(document.querySelectorAll(".video_player")).map(
  (p) =>
    new Plyr(p, {
      ratio: "16:9",
    })
);
