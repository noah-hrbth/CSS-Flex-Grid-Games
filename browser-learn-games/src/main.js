import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import LevelData from './level.json'

const store = createStore({
    state: {
        levelData: LevelData,

        currentGame: 0,

        gameLanguage: 0,
    },
    getters: {
        getLevelById: (state) => (gameId, levelId) => {           
            if(gameId == 1){
                return state.levelData.flex[levelId]
            } else if(gameId == 2) {
                return state.levelData.grid[levelId]
            }
        }
    }
})

createApp(App).use(store).mount('#app')

