const levelSelectBtn = document.querySelector(".level-select-btn");
levelSelectBtn.addEventListener("click", () => {
  const levelSelectLevel = document.querySelector(".level-select-level");

  if (levelSelectLevel.classList.contains("level-select-level--active")) {
    levelSelectLevel.classList.remove("level-select-level--active");

    levelSelectLevel.classList.remove("swing-in-left-fwd");
    levelSelectLevel.classList.add("swing-out-left-fwd");
  } else {
    levelSelectLevel.classList.add("level-select-level--active");

    levelSelectLevel.classList.remove("swing-out-left-fwd");
    levelSelectLevel.classList.add("swing-in-left-fwd");

    levelSelectLevel.style.display = "grid";
  }
});
