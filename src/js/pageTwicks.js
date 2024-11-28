import { heroPlayer } from "./videoPlayer";
function pageTwicks() {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hide");
  }, 1200);

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
