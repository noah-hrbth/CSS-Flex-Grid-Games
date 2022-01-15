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
  beforeMount() {
    this.checkCookie();
  },
  methods: {
    getLevel() {
      return this.$store.state.game.currentLevel;
    },

    setCookie(
      cookieName = "isOnLevel",
      level = this.getLevel(),
      expireDays = 30
    ) {
      let date = new Date();
      date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
      let expires = date.toUTCString();

      document.cookie = `${cookieName}=${level}; ${expires}; path=/`;
    },

    getCookie(cookieName = "isOnLevel") {
      let name = `${cookieName}=`;
      // Falls Cookie Sonderzeichen wie $ beinhaltet
      let decodedCookie = decodeURIComponent(document.cookie);
      let cookieArray = decodedCookie.split(";");

      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }
      return "";
    },

    checkCookie() {
      let level = this.getCookie();
      if (level !== "") {
        // this.$store.state.game.levelNr(level);
      } else {
        this.setCookie();
      }
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
