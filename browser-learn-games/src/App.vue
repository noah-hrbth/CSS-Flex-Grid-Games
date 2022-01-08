<template>
  <div>
    <div v-if="this.$store.state.game.currentGame == 0">
      <HomeScreen />
    </div>
    <div class="main-container" v-else>
      <div class="left">
        <div class="game-logo">
          <h1>Flex Pirate</h1>
          <button class="back-to-home">
            <a
              @click="
                this.$store.state.game.currentGame = 0;
                this.$store.state.game.currentLevel = 0;
              "
              class="back-to-home-link"
              >Zurück zur Übersicht</a
            >
          </button>
        </div>
        <div class="level-select">
          <button class="level-select-btn" @click="openLevelSelect()">
            <img
              :src="levelSelectImage"
              alt="Level select"
              class="level-icon"
            />
          </button>
          <div
            class="level-select-level"
            :class="{ 'level-select-level--active': this.levelSelectOpen }"
          >
            <div v-if="this.$store.state.game.currentGame == 1">
              <div
                v-for="level in this.$store.state.levelData.flex"
                :key="level.levelNr"
                v-on:click="goToLevel(1, level.levelNr - 1)"
              >
                <span class="level-nr">{{ level.levelNr }}</span>
              </div>
            </div>
            <div v-if="this.$store.state.game.currentGame == 2">
              <div
                v-for="level in this.$store.state.levelData.grid"
                :key="level.levelNr"
                v-on:click="goToLevel(2, level.levelNr - 1)"
              >
                <span class="level-nr">{{ level.levelNr }}</span>
              </div>
            </div>
          </div>
        </div>

        <Settings />

        <Task />

        <Input />

        <img src="" alt="" class="watersplash-image-level-select" />
        <img src="" alt="" class="watersplash-image-settings" />
      </div>

      <div v-if="this.$store.state.game.currentGame == 1">
        <FlexGame :level-data="this.currentGameData.levelNr" />
      </div>
      <div v-if="this.$store.state.game.currentGame == 2">
        <GridGame :level-data="this.currentGameData.levelNr" />
      </div>
    </div>
  </div>
</template>

<script>
import "./assets/css/_variables.css";
import "./assets/css/_animation.css";
import "./assets/css/_reset.css";

import FlexGame from "./components/FlexGame.vue";
import GridGame from "./components/GridGame.vue";
import HomeScreen from "./components/HomeScreen.vue";
import Settings from "./components/Settings.vue";
import Task from "./components/Task.vue";
import Input from "./components/Input.vue";

import LevelSelectImage from "./assets/images/level-select.png";

export default {
  name: "App",
  components: {
    FlexGame,
    GridGame,
    HomeScreen,
    Settings,
    Task,
    Input,
  },
  methods: {
    goToLevel(game, level) {
      this.currentGame = game;
      this.currentGameData.levelNr = level;
      this.$store.state.game.currentGame = game;
      this.$store.state.game.currentLevel = level;
      this.$store.state.editor.editorInput = "";
    },

    openLevelSelect() {
      if (!this.levelSelectOpen) {
        this.levelSelectOpen = true;
        this.levelSelectClassArray.push("level-select-level--active");
      } else {
        this.levelSelectOpen = false;
        this.levelSelectClassArray = [];
      }
    },
  },
  data: () => ({
    currentGame: 0,
    currentGameData: {
      levelNr: 0,
      currentPosition: { x: 0, y: 0 },
    },

    levelSelectOpen: false,
    levelSelectClassArray: [],
    levelSelectImage: LevelSelectImage,
  }),
};
</script>

<style>
body {
  color: var(--color-light);
  font-family: var(--font-body), sans-serif;
  overflow: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-container {
  display: flex;
}

.left {
  width: 50vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 25%;
  grid-template-rows: 20% 7% 30% 40%;
  grid-template-areas:
    "Logo Logo"
    "Levelauswahl Settings"
    "Aufgaben Aufgaben"
    "Editor Editor";
  gap: 0.625rem;
  justify-content: space-around;
  align-items: stretch;
  background: url(./assets/images/wood.jpg) no-repeat;
  background-size: cover;
  border-right: 5px solid var(--color-darker);
}

.game-logo {
  grid-area: Logo;
  font-family: var(--font-heading);
}

.back-to-home {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border: solid 3px var(--color-light);
}

.back-to-home-link {
  color: var(--color-light);
  font-size: 1.25rem;
  font-weight: bold;
}

.back-to-home:hover .back-to-home-link {
  text-decoration: underline;
}

.level-select {
  grid-area: Levelauswahl;
  z-index: 10;
}

.level-select-btn {
  height: 100%;
  cursor: pointer;
}

.level-icon {
  max-height: 100%;
}

.level-select-level {
  display: grid;
  opacity: 0;
  background: url(./assets/images/level-sign.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 10rem;
  height: 21rem;
  grid-template-columns: repeat(auto-fit, minmax(30px, 0fr));
  padding-left: 1.5rem;
  padding-top: 1rem;
  z-index: -1;
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

.level-nr {
  cursor: pointer;
}

.watersplash-image-level-select {
  position: absolute;
  width: 30rem;
  top: 75%;
  right: 80%;
}

.watersplash-image-settings {
  position: absolute;
  width: 20rem;
  top: 83%;
  left: 30%;
}
</style>
