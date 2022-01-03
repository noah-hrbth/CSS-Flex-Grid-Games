<template>
    <div>
        <div v-if="this.currentGame == 0">
            <HomeScreen />
        </div>
        <div v-if="this.currentGame == 1">
            
        </div>
        <a v-on:click="goToFlex">Flex</a>
        <a v-on:click="goToGrid">Grid</a>

        <div class="left">
            <div class="game-logo">HSD Flex Pirate</div>
            <div class="level-select">
            <button class="level-select-btn">
                <img
                :src="levelSelectImage"
                alt="Level select"
                class="level-icon"
                />
            </button>
            <div class="level-select-level">
                <div class="level"><span class="level-nr">1</span></div>
            </div>
            </div>
            <div class="settings">
            <button class="settings-btn">
                <img
                :src="settingsIconImage"
                alt="Settings"
                class="settings-icon"
                />
            </button>
            <ul class="settings-content">
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
            


            <img src="" alt="" class="watersplash-image-level-select">
            <img src="" alt="" class="watersplash-image-settings">
        </div>

        <div v-if="this.currentGame == 1">
            <a v-for="level in this.$store.state.levelData.flex" :key="level.levelNr" v-on:click="goToLevel(1, (level.levelNr - 1))">
                {{ level.levelNr }}
            </a>

            <FlexGame :level-data="this.currentGameData.levelNr" />
        </div>
        <div v-else-if="this.currentGame == 2">
            <a v-for="level in this.$store.state.levelData.grid" :key="level.levelNr" v-on:click="goToLevel(2, (level.levelNr - 1))">
                {{ level.levelNr }}
            </a>

            <GridGame :level-data="this.currentGameData.levelNr" />
        </div>
        
    </div>
</template>

<script>
import './assets/css/_variables.css'

import FlexGame from './components/FlexGame.vue'
import GridGame from './components/GridGame.vue'
import HomeScreen from './components/HomeScreen.vue'

import LevelSelectImage from './assets/images/level-select.png'
import SettingsIconImage from './assets/images/settings-icon.png'

export default {
    name: 'App',
    components: {
        FlexGame,
        GridGame,
        HomeScreen
    },
    methods: {
        goToFlex() {
            this.currentGame = 1;
        },
        goToGrid() {
            this.currentGame = 2;
        },
        goToLevel(game, level) {
            if(game == 1){
                this.currentGame = game;
                this.currentGameData.levelNr = level;
            }
            else if (game == 2) {
                this.currentGame = game;
                this.currentGameData.levelNr = level;
            }
        }
    },
    data: () => ({
        currentGame: 0,
        currentGameData: {
            levelNr: 0,
            currentPosition: {x: 0, y: 0}
        },

        levelSelectImage: LevelSelectImage,
        settingsIconImage: SettingsIconImage,
    })
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
