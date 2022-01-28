<template>
  <div class="level-select">
    <button class="level-select-btn" @click="openLevelSelect">
      <img
        :src="
          this.levelSelectOpen ? this.levelSelectBtnSrc : this.levelSelectImage
        "
        alt="Level select"
        class="level-icon"
        v-if="this.$store.state.game.currentGame == 1"
      />
      <img
        :src="this.levelSelectImageGrid"
        alt="Level select"
        class="level-icon"
        v-if="this.$store.state.game.currentGame == 2"
      />
    </button>
    <div
      class="level-select-level"
      :class="
        this.levelSelectOpen
          ? 'swing-in-left-fwd' + ' level-select-level--active'
          : 'hinge-out-tl'
      "
      :style="this.levelSelectLoaded ? '' : 'animation: none'"
    >
      <div v-if="this.$store.state.game.currentGame == 1" class="level-wrapper">
        <div
          v-for="level in this.$store.state.levelData.flex"
          :key="level.levelNr"
          v-on:click="goToLevel(1, level.levelNr - 1)"
          class="level-nr"
          onclick="document.querySelector('.editor-eingabe').value = ''; document.querySelectorAll('.coin-gif').forEach(item => item.style.display = 'none')"
        >
          <span>{{ level.levelNr }}</span>
        </div>
      </div>
      <div v-if="this.$store.state.game.currentGame == 2" class="level-wrapper">
        <div
          v-for="level in this.$store.state.levelData.grid"
          :key="level.levelNr"
          v-on:click="goToLevel(2, level.levelNr - 1)"
          onclick="document.querySelector('.editor-eingabe').value = ''; document.querySelectorAll('.coin-gif').forEach(item => item.style.display = 'none')"
          class="level-nr"
        >
          <span>{{ level.levelNr }}</span>
        </div>
      </div>
    </div>
    <img src="" alt="" class="watersplash-image-level-select" />
  </div>
</template>

<script>
import LevelSelectImage from "../assets/images/level-select.png";
import LevelSelectImageGrid from "../assets/images/levelauswahl.png";

export default {
  name: "LevelSelect",
  data: () => ({
    currentGame: 0,
    currentGameData: {
      levelNr: 0,
      currentPosition: { x: 0, y: 0 },
    },

    levelSelectOpen: false,
    levelSelectLoaded: false,
    levelSelectImage: LevelSelectImage,
    levelSelectImageGrid: LevelSelectImageGrid,
    watersplashLevelSelectSrc: require("../assets/images/watersplash-level-select.gif"),
    levelSelectBtnSrc: require("../assets/images/stone-close.png"),
  }),
  methods: {
    goToLevel(game, level) {
      this.currentGame = game;
      this.currentGameData.levelNr = level;
      this.$store.state.game.currentGame = game;
      this.$store.state.game.currentLevel = level;
      this.$store.state.editor.editorInput = "";
    },

    openLevelSelect() {
      this.levelSelectOpen = !this.levelSelectOpen;
      this.levelSelectLoaded = true;
      document
        .querySelector(".level-select-level")
        .classList.add("level-select-level--active");
    },
  },
  mounted() {
    const levelSelectBtn = document.querySelector(".level-select-btn");
    levelSelectBtn.addEventListener("click", () => {
      const levelSelectLevel = document.querySelector(".level-select-level");

      if (levelSelectLevel.classList.contains("hinge-out-tl")) {
        const watersplashImageLevelSelect = document.querySelector(
          ".watersplash-image-level-select"
        );
        setTimeout(() => {
          watersplashImageLevelSelect.src = this.watersplashLevelSelectSrc;
        }, 1850);
      }
    });
  },
};
</script>

<style>
.level-select {
  z-index: 100;
}

.level-select-btn {
  height: 100%;
  cursor: pointer;
  border-radius: 100%;
  filter: drop-shadow(2px 4px 8px black);
}

.level-select-btn:active {
  transform: scale(0.95);
  filter: drop-shadow(2px 4px 8px black);
}

.level-icon {
  max-height: 100%;
}

.level-select-level {
  opacity: 0;
  background-image: url(../assets/images/level-sign.png);
  background-repeat: no-repeat;
  width: 9.5rem;
  height: 18.5rem;
  padding-left: 1.75rem;
  padding-top: 1.5rem;
  pointer-events: none;
}

.level-select-level--active {
  opacity: 1;
  pointer-events: all;
}

.level {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.level-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.level-nr {
  cursor: pointer;
  background-color: var(--color-grey);
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
  text-align: center;
  line-height: 1.8rem;
}

.watersplash-image-level-select {
  position: absolute;
  width: 30rem;
  top: 75%;
  right: 80vw;
  pointer-events: none;
}
</style>
