<template>
    <div class="settings">
        <button class="settings-btn" @click="this.settingsOpen = !this.settingsOpen">
            <img
            :src="settingsIconImage"
            alt="Settings"
            class="settings-icon"
            />
        </button>
        <ul class="settings-content" :class="{ 'settings-content--active': this.settingsOpen }">
            <br>
            <section>
                <p id="labelLanguage" class="Sprachenauswahl">Sprache</p>
                <select id="language">
                  <option value="de">Deutsch</option>
                  <option value="en">Englisch</option>
                </select>
            </section>
            <li class="setting-options"> Lautstärke</li>
            <li class="setting-options"> Settings3</li>
        </ul>
    </div>
</template>

<script>
import SettingsIconImage from '../assets/images/settings-icon.png'

export default {
    name: 'Settings',
    data: () => ({
        settingsIconImage: SettingsIconImage,
        settingsOpen: false,
    }),
    methods: {

    },
}
</script>

<style>
.settings-btn {
  height: 100%;
  cursor: pointer;
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
  align-items: center;
  flex-direction: column;
  z-index: -1;
  pointer-events: none;
}

.setting-options {
 cursor: pointer;
}

.settings-content--active {
  opacity: 1;
  pointer-events: all;
}
</style>