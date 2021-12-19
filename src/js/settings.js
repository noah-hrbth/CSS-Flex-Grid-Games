const settingsBtn = document.querySelector(".settings-btn");
settingsBtn.addEventListener("click", () => {
  const settingsContent = document.querySelector(".settings-content");

  if (settingsContent.classList.contains("settings-content--active")) {
    settingsContent.classList.remove("settings-content--active");

    settingsContent.classList.remove("flip-in-hor-bottom");
    settingsContent.classList.add("flip-out-hor-top");
  } else {
    settingsContent.classList.add("settings-content--active");

    settingsContent.classList.remove("flip-out-hor-top");
    settingsContent.classList.add("flip-in-hor-bottom");

    settingsContent.style.display = 'flex';
  }
});
