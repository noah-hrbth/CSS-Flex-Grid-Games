<template>
  <div class="right">
    <div id="board">
      <div id="overlay">
        <span v-for="n in 39" class="plot" v-bind:key="n"></span>
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
        <span v-for="n in 39" class="plot" v-bind:key="n"></span>
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
        <img class="image target-treasure" :src="nestImage" alt="Ziel" />
      </div>
      <div
        class="target-container"
        id="target-container-2"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).targetAmount >
          1
            ? 'this.getLevelById(this.$store.state.game.currentLevel).targetPos'
            : 'display:none;'
        "
      >
        <img class="image target-treasure" :src="nestBlueImage" alt="Ziel" />
      </div>
      <div
        class="target-container"
        id="target-container-3"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).targetAmount >
          2
            ? 'this.getLevelById(this.$store.state.game.currentLevel).targetPos'
            : 'display:none;'
        "
      >
        <img class="image target-treasure" :src="nestGreenImage" alt="Ziel" />
      </div>
      <div
        class="target-container"
        id="target-container-4"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).targetAmount >
          3
            ? 'this.getLevelById(this.$store.state.game.currentLevel).targetPos'
            : 'display:none;'
        "
      >
        <img class="image target-treasure" :src="nestPinkImage" alt="Ziel" />
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
        <img :src="playerImage" alt="" />
      </div>
      <div
        class="player-container"
        id="player-container-2"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).targetAmount >
          1
            ? ''
            : 'display:none;'
        "
      >
        <img :src="playerBlueImage" alt="" />
      </div>
      <div
        class="player-container"
        id="player-container-3"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).targetAmount >
          2
            ? ''
            : 'display:none;'
        "
      >
        <img :src="playerGreenImage" alt="" />
      </div>
      <div
        class="player-container"
        id="player-container-4"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).targetAmount >
          3
            ? ''
            : 'display:none;'
        "
      >
        <img :src="playerPinkImage" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerImage from "../assets/images/egg_chick.png";
import PlayerBlueImage from "../assets/images/egg_chick_blue.png";
import PlayerGreenImage from "../assets/images/egg_chick_green.png";
import PlayerPinkImage from "../assets/images/egg_chick_pink.png";
import NestImage from "../assets/images/nest.png";
import NestBlueImage from "../assets/images/nest.png";
import NestGreenImage from "../assets/images/nest.png";
import NestPinkImage from "../assets/images/nest.png";

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
    playerBlueImage: PlayerBlueImage,
    playerGreenImage: PlayerGreenImage,
    playerPinkImage: PlayerPinkImage,
    nestImage: NestImage,
    nestBlueImage: NestBlueImage,
    nestGreenImage: NestGreenImage,
    nestPinkImage: NestPinkImage,

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
  margin: 1vw 2vw 0 2vw;
  height: 7rem;
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.player-pirate {
  max-width: 10vw;
}

.target-container {
  margin: 4vw 2vw 0 2vw;
  height: 10vw;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.target-treasure {
  max-width: 10vw;
}
</style>
