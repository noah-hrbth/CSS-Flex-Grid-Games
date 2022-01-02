<template>
    <div>
        <a v-on:click="goToFlex">Flex</a>
        <a v-on:click="goToGrid">Grid</a>

        <div v-if="this.currentGame == 1">
            <FlexGame />
        </div>
        <div v-else-if="this.currentGame == 2">
            <GridGame />
        </div>
    </div>
</template>

<script>
import FlexGame from './components/FlexGame.vue'
import GridGame from './components/GridGame.vue'
import LevelData from './level.json'

console.log(LevelData);

export default {
    name: 'App',
    components: {
        FlexGame,
        GridGame
    },
    methods: {
        goToFlex() {
            this.currentGame = 1;
        },
        goToGrid() {
            this.currentGame = 2;
        }
    },
    data: () => ({
        currentGame: 0,
        currentGameData: {
            levelNr: 
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
