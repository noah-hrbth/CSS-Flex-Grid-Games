import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

import LevelData from "./level.json";
import LanguageData from "./language.json";

const store = createStore({
  state: {
    levelData: LevelData,
    languageData: LanguageData,

    game: {
      currentGame: 0,
      currentLevel: 0,
      colliding: false,
    },

    settings: {
      language: 0,
    },

    editor: {
      editorInput: "",
    },
  },
  getters: {
    getLevelById: (state) => (gameId, levelId) => {
      state.currentGame = gameId;
      state.currentLevel = levelId;

      if (gameId == 1) {
        return state.levelData.flex[levelId];
      } else if (gameId == 2) {
        return state.levelData.grid[levelId];
      }
    },
  },
});

// yo

createApp(App).use(store).mount("#app");
