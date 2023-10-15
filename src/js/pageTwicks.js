import { heroPlayer } from "./videoPlayer";
function pageTwicks() {
  heroPlayer.on("ready", function () {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hide");
    }, 0);
  });

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
}

export default pageTwicks;
