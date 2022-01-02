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
    }, 1850);
  }

});

const hintChangeSwitch = document.querySelector('.hint-change__switch');
const checkbox = document.getElementById('checkbox');

hintChangeSwitch.addEventListener('click', () => {
  checkbox.toggleAttribute('checked');
  if (checkbox.checked) {
    document.querySelector('.hint-change__switchtext').innerHTML = "aus";
  } else {
    document.querySelector('.hint-change__switchtext').innerHTML = "an";

  }
  console.log('lol')
})


