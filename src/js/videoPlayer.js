import Plyr from "plyr";
export const ytPlayers = Array.from(
  document.querySelectorAll(".yt-player")
).map(
  (p) =>
    new Plyr(p, {
      ratio: "16:9",
    })
);
export const ytPlayersForSlider = Array.from(
  document.querySelectorAll(".yt-player-slider")
).map(
  (p) =>
    new Plyr(p, {
      ratio: "16:9",
    })
);

export const heroPlayer = new Plyr(".hero-player", {
  ratio: "16:9",
});
