const settingsBtn = document.querySelector(".settings-btn");
settingsBtn.addEventListener("click", () => {
  const settingsContent = document.querySelector(".settings-content");

  if (settingsContent.classList.contains("settings-content--active")) {
    settingsContent.classList.remove("settings-content--active");

    settingsContent.classList.remove("swing-in-top-fwd");
    settingsContent.classList.add("hinge-out-top");
  } else {
    settingsContent.classList.add("settings-content--active");

    settingsContent.classList.remove("hinge-out-top");
    settingsContent.classList.add("swing-in-top-fwd");
  }

  if (settingsContent.classList.contains("hinge-out-top")) {
    const watersplashImageSettings = document.querySelector('.watersplash-image-settings');
    setTimeout(() => {
      watersplashImageSettings.src = "/assets/images/watersplash-settings.gif";
    }, 1800);
  }

});


