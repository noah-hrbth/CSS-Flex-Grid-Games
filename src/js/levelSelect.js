const levelSelectBtn = document.querySelector(".level-select-btn");
levelSelectBtn.addEventListener("click", () => {
  const levelSelectLevel = document.querySelector(".level-select-level");

  if (levelSelectLevel.classList.contains("level-select-level--active")) {
    levelSelectLevel.classList.remove("level-select-level--active");

    levelSelectLevel.classList.remove("swing-in-left-fwd");
    levelSelectLevel.classList.add("hinge-out-tl");
  } else {
    levelSelectLevel.classList.add("level-select-level--active");

    levelSelectLevel.classList.remove("hinge-out-tl");
    levelSelectLevel.classList.add("swing-in-left-fwd");
  }

  if (levelSelectLevel.classList.contains("hinge-out-tl")) {
    const watersplashImageLevelSelect = document.querySelector(
      ".watersplash-image-level-select"
    );
    setTimeout(() => {
      watersplashImageLevelSelect.src = "/assets/images/watersplash-level-select.gif";
    }, 1800);
  }
});
