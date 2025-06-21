// Wait for the window to load before removing the loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");

  setTimeout(() => {
    loader.style.display = "none";
    main.classList.remove("hidden");
  }, 1500); // Duration of loading screen
});

// Handle hover image swap for team members
const teamImages = document.querySelectorAll(".team-img");
teamImages.forEach((img) => {
  const original = img.src;
  const color = img.getAttribute("data-color");

  img.addEventListener("mouseenter", () => {
    img.src = color;
  });

  img.addEventListener("mouseleave", () => {
    img.src = original;
  });
});
