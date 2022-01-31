<template>
  <div class="right">
    <div id="board">
      <div id="overlay">
        <span v-for="n in 25" class="plot" v-bind:key="n"></span>
      </div>
      <div id="plants">
        <div class="plant carrot" style="grid-column-start: 3">
          <div class="bg"></div>
        </div>
      </div>
      <div id="garden">
        <div class="treatment carrot">
          <div class="bg"></div>
        </div>
      </div>
      <div id="leaves">
        <span v-for="n in 25" class="plot" v-bind:key="n"></span>
      </div>
    </div>
    <div
      class="inner-right-target"
      :style="
        this.$store.state.game.currentGame == 2
          ? 'display: grid; grid-template-columns: repeat(5, 20%); grid-template-rows: repeat(5, 20%);'
          : ''
      "
    >
      <div
        class="target-container"
        id="target-container-1"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).targetPos
        "
      >
        <div class="image-wrapper">
          <div class="image target-treasure"></div>
        </div>
      </div>
    </div>
    <div
      class="inner-right-player"
      :style="
        this.$store.state.game.currentGame == 2
          ? 'display: grid; grid-template-columns: repeat(5, 20%); grid-template-rows: repeat(5, 20%);'
          : ''
      "
    >
      <div
        class="player-container"
        id="player-container-1"
        v-bind:style="[
          this.getLevelById(this.$store.state.game.currentLevel).playerPos,
          this.$store.state.editor.editorInput,
        ]"
      >
        <div class="image-wrapper player-bird">
          <div class="image "></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerImage from "../assets/images/egg_chick.png";
import NestImage from "../assets/images/nest.png";

export default {
  name: "GridGame",
  components: {},
  props: {
    levelData: {
      type: Number,
    },
  },

  data: () => ({
    playerImage: PlayerImage,
    nestImage: NestImage,

    message: "",
  }),
  methods: {
    getLevelById(levelId) {
      return this.$store.getters.getLevelById(2, levelId);
    },
  },
};
</script>

<style scoped>
.right {
  width: 50vw;
  height: 100vh;
  background: url(../assets/images/leaves.png) no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
}

#board {
  position: absolute;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
}

#garden,
#plants,
#leaves,
#overlay {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#overlay .plot {
  z-index: 50;
  background: none;
  box-shadow: inset 2px 2px 0 rgb(255 255 255 / 5%), inset -2px -2px 0 #133e14;
}

.plot {
  width: 100%;
  height: 100%;
  background-color: #6f532a;
  background-color: #836b32;
  background-image: url(../assets/images/leaves.png);
  background-size: calc(10vw - 4px);
}

#plants {
  z-index: 30;
}

.plant,
.treatment {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.plant .bg,
.treatment .bg {
  width: 100%;
  height: 100%;
  background-position: left top;
  background-size: calc(10vw - 4px);
}

#garden {
  z-index: 20;
}

#leaves {
  background-color: #523d1f;
  background-image: url(../assets/images/leaves.png);
  overflow: hidden;
}

.inner-right-player {
  width: 50vw;
  height: 100vh;
  display: flex;
}

.inner-right-target {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  top: 0;
  right: 0;
}

.player-container {
  z-index: 1000;
}

.player-pirate {
  max-width: 10vw;
}

.target-container {
  height: 10vw;
  z-index: 50;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
}

.target-treasure {
  max-width: 100%;
  min-width: 10vw;
  min-height: 100%;
  background-image: url(../assets/images/nest_small.png);
  background-repeat: repeat-x;
  background-size: 10vw;
  background-position: center;
}

.player-bird {
  max-width: 100%;
  min-width: 10vw;
  min-height: 100%;
  background-image: url(../assets/images/egg_chicken_small.png);
  background-repeat: repeat-x;
  background-size: 10vw;
  background-position: bottom;
}

.image {
  width: 100%;
}
</style>
