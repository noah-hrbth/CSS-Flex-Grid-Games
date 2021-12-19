const toggleSettings = () => {
  const settingsContent = document.querySelector(".settings-content");

  settingsContent.classList.toggle("settings-content--active");
};

const settingsBtn = document.querySelector(".settings-btn");

settingsBtn.addEventListener("click", toggleSettings);
