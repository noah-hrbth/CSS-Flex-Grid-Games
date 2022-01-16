<template>
  <div class="settings">
    <button class="settings-btn" @click="openSettings">
      <img
        :src="this.settingsOpen ? this.settingsBtnSrc : this.settingsIconImage"
        alt="Settings"
        class="settings-icon"
      />
    </button>
    <ul
      class="settings-content"
      :class="
        this.settingsOpen
          ? 'swing-in-top-fwd' + ' settings-content--active'
          : 'hinge-out-top'
      "
      :style="this.settingsLoaded ? '' : 'animation: none'"
    >
      <li class="settings-option language-change">
        <span>{{
          this.$store.state.languageData[this.$store.state.settings.language]
            .languageChange
        }}</span>
        <LanguageChange />
      </li>
      <li class="settings-option hint-change">
        <span>{{
          this.$store.state.languageData[this.$store.state.settings.language]
            .hints
        }}</span>
        <label class="hint-change__switch">
          <input type="checkbox" id="checkbox" @click="toggleHints" checked />
          <span class="slider round"></span>
        </label>
      </li>
    </ul>
    <img src="" alt="" class="watersplash-image-settings" />
  </div>
</template>

<script>
import LanguageChange from "./LanguageChange.vue";
import SettingsIconImage from "../assets/images/settings-icon.png";

export default {
  name: "Settings",
  components: {
    LanguageChange,
  },
  data: () => ({
    watersplashSrc: require("../assets/images/watersplash-settings.gif"),
    settingsBtnSrc: require("../assets/images/stone-close.png"),
    settingsIconImage: SettingsIconImage,
    settingsOpen: false,
    settingsLoaded: false,
  }),
  methods: {
    openSettings() {
      this.settingsOpen = !this.settingsOpen;
      this.settingsLoaded = true;
    },

    toggleHints() {
      const checkbox = document.getElementById("checkbox");
      const aufgaben = document.querySelector(".aufgaben");
      if (!checkbox.checked) {
        aufgaben.classList.remove("slide-in-top");
        aufgaben.classList.add("scale-out-center");
      } else {
        aufgaben.classList.remove("scale-out-center");
        aufgaben.classList.add("slide-in-top");
      }
    },
  },
  mounted() {
    const settingsBtn = document.querySelector(".settings-btn");
    settingsBtn.addEventListener("click", () => {
      const settingsContent = document.querySelector(".settings-content");

      if (settingsContent.classList.contains("hinge-out-top")) {
        const watersplashImageSettings = document.querySelector(
          ".watersplash-image-settings"
        );
        setTimeout(() => {
          watersplashImageSettings.src = this.watersplashSrc;
        }, 1850);
      }
    });
  },
};
</script>

<style>
.settings-btn {
  height: 100%;
  cursor: pointer;
  border-radius: 100%;
  filter: drop-shadow(2px 4px 8px black);
}

.settings-btn:active {
  transform: scale(0.95);
  filter: drop-shadow(2px 4px 8px black);
}

.settings-icon {
  max-height: 100%;
}

.settings-content {
  position: relative;
  display: flex;
  opacity: 0;
  background: url(../assets/images/settings-wood-sign.png);
  background-repeat: no-repeat;
  height: 8vw;
  width: 14vw;
  flex-direction: column;
  pointer-events: none;
  gap: 0.5rem;
  padding: 1.5vw 1.5vw 0 1vw;
}

.settings-content--active {
  opacity: 1;
  pointer-events: all;
}

.settings-option {
  display: flex;
  gap: 1rem;
}

.settings-option span:not(.slider) {
  width: 5rem;
}

.hint-change__switchtext {
  flex-basis: 20%;
  text-align: center;
}

.hint-change__switch {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
}

.hint-change__switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-darker);
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 5px;
  bottom: 4px;
  background-color: var(--color-light);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--color-darker-focus);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-darker-focus);
}

input:checked + .slider:before {
  transform: translateX(23px);
}

.slider.round {
  border-radius: 25rem;
}

.slider.round:before {
  border-radius: 50%;
}

.watersplash-image-settings {
  position: absolute;
  width: 20rem;
  top: 83%;
  left: 30%;
  pointer-events: none;
}
</style>
