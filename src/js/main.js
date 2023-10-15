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

// Header background change
function changeHeader() {
  const header = document.querySelector("header");
  if (window.scrollY > 5) {
    header.classList.add("change");
  } else {
    header.classList.remove("change");
  }
}
window.addEventListener("scroll", changeHeader);

// Scroll to a tergeted section
const scrollToSectionButton = document.querySelectorAll(
  "[href='#calendlyArea']"
);
const targetSection = document.getElementById("calendlyArea");
scrollToSectionButton.forEach((each) => {
  each.addEventListener("click", (e) => {
    e.preventDefault();
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
