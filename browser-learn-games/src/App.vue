<template>
    <div>
        <a v-on:click="goToFlex">Flex</a>
        <a v-on:click="goToGrid">Grid</a>

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
        <div v-else>
            <HomeScreen />
        </div>
    </div>
</template>

<script>
import FlexGame from './components/FlexGame.vue'
import GridGame from './components/GridGame.vue'
import HomeScreen from './components/HomeScreen.vue'

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
        }
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
