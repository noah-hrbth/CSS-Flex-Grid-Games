<template>
  <div class="settings">
    <button
      class="settings-btn"
      @click="this.settingsOpen = !this.settingsOpen"
    >
      <img :src="settingsIconImage" alt="Settings" class="settings-icon" />
    </button>
    <ul
      class="settings-content"
      :class="{ 'settings-content--active': this.settingsOpen }"
    >
      <li class="settings-option language-change">
        <span>Sprache</span>
        <select id="language" class="language-change__dropdown">
          <option value="de">Deutsch</option>
          <option value="en">Englisch</option>
        </select>
      </li>
      <li class="settings-option hint-change">
        <span>Hinweise</span>
        <span class="hint-change__switchtext"> an </span>
        <label class="hint-change__switch">
          <input type="checkbox" id="checkbox" />
          <span class="slider round"></span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import SettingsIconImage from "../assets/images/settings-icon.png";

export default {
  name: "Settings",
  data: () => ({
    settingsIconImage: SettingsIconImage,
    settingsOpen: false,
  }),
  methods: {},
};
</script>

<style>
.settings-btn {
  height: 100%;
  cursor: pointer;
  border-radius: 100%;
  box-shadow: inset 0px 57px 0px -18px rgba(0, 0, 0, 0.24);
}

.settings-btn:active {
  transform: scale(0.95);
  box-shadow: inset 0px 57px 0px -18px rgba(0, 0, 0, 0.103);
}

.settings-icon {
  max-height: 100%;
}

.settings-content {
  display: flex;
  opacity: 0;
  background: url(../assets/images/settings-sign.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 6.625rem;
  width: 13.313rem;
  flex-direction: column;
  z-index: -1;
  pointer-events: none;
  gap: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 1.5rem;
}

.settings-content--active {
  opacity: 1;
  pointer-events: all;
}

.settings-option {
  display: flex;
  justify-content: center;
}

.language-change {
  gap: 1rem;
}

.language-change__dropdown {
  padding: 0.2rem;
  background: var(--color-grey);
  color: var(--color-light);
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
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

/* Hide default HTML checkbox */
.hint-change__switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-grey);
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
  background-color: var(--color-lightgrey);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-lightgrey);
}

input:checked + .slider:before {
  transform: translateX(23px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 25rem;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
