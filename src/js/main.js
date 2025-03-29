import pageTwicks from "./pageTwicks";
import setupSlider from "./slider-config";
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("preloader") !== null) {
    pageTwicks();
    setupSlider();

    const calendlyArea = document.getElementById("calendlyArea");
    const moveableBg = document.getElementById("moveable-bg");
    let isInViewport = false; // Track whether the section is in the viewport

    // Function to handle scroll inside the calendly section
    function handleScroll() {
      if (!isInViewport) return; // Don't expand/shrink the background if section is not in viewport

      const sectionHeight = calendlyArea.scrollHeight;
      const scrollTop = calendlyArea.scrollTop;

      // Calculate the scroll percentage relative to the section
      const scrollPercentage = scrollTop / (sectionHeight - window.innerHeight);

      // Calculate the new width of the background, expanding and shrinking based on scroll percentage
      const newWidth = 1050 + scrollPercentage * 100; // Increase width up to 100vw
      moveableBg.style.width = `${Math.min(newWidth, 100)}vw`; // Max width of 100vw (full screen width)
    }

    // IntersectionObserver to detect when the calendlyArea is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // The section is in the viewport, start expanding/shrinking the background
            isInViewport = true;
            handleScroll(); // Run scroll handler immediately in case it's already partially visible
          } else {
            // The section is out of the viewport, reset the background width
            isInViewport = false;
            moveableBg.style.width = "1050px"; // Reset to initial width
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the section is in view
      }
    );

    // Observe the calendlyArea section for visibility changes

    observer.observe(calendlyArea);

    // Add scroll event listener to the calendlyArea section
    calendlyArea.addEventListener("scroll", handleScroll);
  }
}); // DOM ended
