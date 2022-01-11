<template>
  <div>
    <div v-if="this.$store.state.game.currentGame == 0">
      <HomeScreen />
    </div>
    <div class="main-container" v-else>
      <div class="left">
        <div class="game-logo">
          <h1>Flex Pirate</h1>
          <button
            class="back-to-home"
            @click="
              this.$store.state.game.currentGame = 0;
              this.$store.state.game.currentLevel = 0;
            "
          >
            <a class="back-to-home-link">Zurück zur Übersicht</a>
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
    checkIfColliding() {
      const player = "";
      const target = "";

      let x1 = player.offset().left;
      let y1 = player.offset().top;
      let h1 = player.outerHeight(true);
      let w1 = player.outerWidth(true);
      let b1 = y1 + h1;
      let r1 = x1 + w1;
      let x2 = target.offset().left;
      let y2 = target.offset().top;
      let h2 = target.outerHeight(true);
      let w2 = target.outerWidth(true);
      let b2 = y2 + h2;
      let r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return false;
      }
      return true;
    },
  },
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


</style>
