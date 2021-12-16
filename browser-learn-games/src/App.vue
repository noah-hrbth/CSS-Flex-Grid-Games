<template>
    <div>
        <div v-if="this.$store.state.currentGame == 0">
            <HomeScreen />

            <Navigation />
        </div>
        <div v-else>
            <div class="left">
                <div class="game-logo">HSD Flex Pirate</div>
                <div class="level-select">
                    <button class="level-select-btn" @click="this.levelSelectOpen = !this.levelSelectOpen">
                        <img
                        :src="levelSelectImage"
                        alt="Level select"
                        class="level-icon"
                        />
                    </button>
                    <div class="level-select-level" :class="{ 'level-select-level--active': this.levelSelectOpen }">
                        <div v-if="this.$store.state.currentGame == 1">
                            <Navigation />

                            <div v-for="level in this.$store.state.levelData.flex" :key="level.levelNr" v-on:click="goToLevel(1, (level.levelNr - 1))">
                                <span class="level-nr">{{ level.levelNr }}</span>
                            </div>
                        </div>
                        <div v-if="this.$store.state.currentGame == 2">
                            <Navigation />

                            <div v-for="level in this.$store.state.levelData.grid" :key="level.levelNr" v-on:click="goToLevel(1, (level.levelNr - 1))">
                                <span class="level-nr">{{ level.levelNr }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Settings />
                
                <img src="" alt="" class="watersplash-image-level-select">
                <img src="" alt="" class="watersplash-image-settings">
            </div>

            <div v-if="this.$store.state.currentGame == 1">
                

                <FlexGame :level-data="this.currentGameData.levelNr" />
            </div>
            <div v-if="this.$store.state.currentGame == 2">


                <GridGame :level-data="this.currentGameData.levelNr" />
            </div>
        </div>
    </div>
</template>

<script>
import './assets/css/_variables.css'

import FlexGame from './components/FlexGame.vue'
import GridGame from './components/GridGame.vue'
import HomeScreen from './components/HomeScreen.vue'
import Settings from './components/Settings.vue'
import Navigation from './components/Navigation.vue'

import LevelSelectImage from './assets/images/level-select.png'

export default {
    name: 'App',
    components: {
        FlexGame,
        GridGame,
        HomeScreen,
        Settings,
        Navigation
    },
    methods: {
        goToLevel(game, level) {
            this.currentGame = game;
            this.currentGameData.levelNr = level;
        }
    },
    data: () => ({
        currentGame: 0,
        currentGameData: {
            levelNr: 0,
            currentPosition: {x: 0, y: 0}
        },

        levelSelectOpen: false,
        levelSelectImage: LevelSelectImage,
    })
}
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
}

img {
  object-fit: cover;
  max-width: 100%;
}

ul {
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
</style>
