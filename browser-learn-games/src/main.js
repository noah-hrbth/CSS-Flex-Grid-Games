import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import LevelData from './level.json'

const store = createStore({
    state: {
        levelData: LevelData
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

const app = createApp(App)

app.mount('#app')

app.use(store)
