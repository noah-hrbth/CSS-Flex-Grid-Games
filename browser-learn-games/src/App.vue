<template>
  <div>
    <div class="disable-smartphone">
      <img src="./assets/images/error.gif" alt="" class="error-gif">
      <p>
        Hey, das Spiel ist leider noch nicht für Geräte unter Tabletgröße
        ausgerichtet! :( <br />
        Aber gute Nachricht... du kannst es aber auf einem größeren Gerät deiner
        Wahl spielen :)
      </p>
      <hr>
      <p>
        Hey, the game is currently not responsive for devices smaller than a
        tablet! :( <br />
        But good news... you can play it on a bigger device of your choice :)
      </p>
    </div>
    <div v-if="this.$store.state.game.currentGame == 0">
      <HomeScreen />
    </div>
    <div class="main-container" v-else>
      <div class="left" v-if="this.$store.state.game.currentGame == 1">
        <div class="game-logo">
          <h1>Flex Pirate</h1>
          <button
            class="back-to-home"
            @click="
              this.$store.state.game.currentGame = 0;
              this.$store.state.game.currentLevel = 0;
            "
          >
            <a class="back-to-home-link">{{ this.$store.state.languageData[this.$store.state.settings.language].backToHome }}</a>
          </button>
        </div>

        <LevelSelect />

        <Settings />

        <Task />

        <Input />
      </div>
      <div class="left left-grid" v-if="this.$store.state.game.currentGame == 2">
        <div class="game-logo">
          <h1>Grid Chick</h1>
          <button
            class="back-to-home"
            @click="
              this.$store.state.game.currentGame = 0;
              this.$store.state.game.currentLevel = 0;
            "
          >
            <a class="back-to-home-link">{{ this.$store.state.languageData[this.$store.state.settings.language].backToHome }}</a>
          </button>
        </div>

        <LevelSelect />

        <Settings />

        <Task />

        <Input />
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
import LevelSelect from "./components/LevelSelect.vue";
import Settings from "./components/Settings.vue";
import Task from "./components/Task.vue";
import Input from "./components/Input.vue";

export default {
  name: "App",
  components: {
    FlexGame,
    GridGame,
    HomeScreen,
    LevelSelect,
    Settings,
    Task,
    Input,
  },
  data: () => ({
    currentGame: 0,
    currentGameData: {
      levelNr: 0,
      currentPosition: { x: 0, y: 0 },
    },
  }),
  methods: {
    getLevel() {
      return this.$store.state.game.currentLevel;
    },
  },
};
</script>

<style>
body {
  color: var(--color-light);
  font-family: var(--font-body), sans-serif;
  overflow: hidden;
  user-select: none;
}

.disable-smartphone {
  background-color: #03071e;
  z-index: 10000;
  position: absolute;
  height: 100vh;
  width: 100vw;
  font-family: sans-serif;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6vw;
  text-align: center;
  padding: 0 5vw;
  line-height: 1.5rem;
}

@media screen and (max-width: 685px) {
  .disable-smartphone {
    display: flex;
  }
}

.error-gif {
  margin-top: -4rem;
}

.disable-smartphone p {
  font-size: calc(5px + 2vw);
}

.disable-smartphone hr {
  width: 50%;
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
  grid-template-rows: 20% 7% 29% 40%;
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

.left-grid {
  background: url(./assets/images/holztextur.png) no-repeat;
  background-size: cover;
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
  font-size: 1rem;
  font-weight: bold;
}

.back-to-home:hover .back-to-home-link {
  text-decoration: underline;
}
</style>
