<template>
  <div class="right">
    <div class="inner-right-target">
      <div class="target-container" id="target-container" :style="this.getLevelById(this.$store.state.game.currentLevel).solution">
        <img
          class="image target-treasure animate__animated animate__bounce animate__slow animate__delay-1s animate__infinite"
          :src="treasureImage"
          alt="Ziel Truhe"
        />
      </div>
      <div class="target-container" id="target-container" :style="[this.getLevelById(this.$store.state.game.currentLevel).solution, this.getLevelById(this.$store.state.game.currentLevel).playerAmount > 1 ? '' : 'display:none;']">
        <img
          class="image target-treasure animate__animated animate__bounce animate__slow animate__delay-1s animate__infinite"
          :src="treasureBlueImage"
          alt="Ziel Truhe"
        />
      </div>
      <div class="target-container" id="target-container" :style="[this.getLevelById(this.$store.state.game.currentLevel).solution, this.getLevelById(this.$store.state.game.currentLevel).playerAmount > 2 ? '' : 'display:none;']">
        <img
          class="image target-treasure animate__animated animate__bounce animate__slow animate__delay-1s animate__infinite"
          :src="treasureYellowImage"
          alt="Ziel Truhe"
        />
      </div>
    </div>
    <div
      class="inner-right-player"
      v-bind:style="this.$store.state.editor.editorInput"
    >
      <div class="player-container" id="player-container">
        <img
          class="image player-pirate"
          :src="playerPirateImage"
          alt="Player Pirate"
        />
      </div>
      <div class="player-container" id="player-container" :style="this.getLevelById(this.$store.state.game.currentLevel).playerAmount > 1 ? '' : 'display:none;'">
        <img
          class="image player-pirate"
          :src="playerPirateBlueImage"
          alt="Player Pirate"
        />
      </div>
      <div class="player-container" id="player-container" :style="this.getLevelById(this.$store.state.game.currentLevel).playerAmount > 2 ? '' : 'display:none;'">
        <img
          class="image player-pirate"
          :src="playerPirateYellowImage"
          alt="Player Pirate"
        />
      </div>
    </div>
    <img src="../assets/images/coin.gif" alt="" class="coin-gif">
  </div>
</template>

<script>
import PlayerPirateImage from "../assets/images/pirate-player.png";
import PlayerPirateBlueImage from "../assets/images/pirate-player-blue.png";
import PlayerPirateYellowImage from "../assets/images/pirate-player-yellow.png";
import TreasureImage from "../assets/images/treasure.png";
import TreasureBlueImage from "../assets/images/treasure-blue.png";
import TreasureYellowImage from "../assets/images/treasure-yellow.png";
import WoodImage from "../assets/images/wood.jpg";

const gameId = 1;

export default {
  name: "FlexGame",
  components: {},
  props: {
    levelData: {
      type: Number,
    },
  },
  methods: {
    getLevelById(levelId) {
      return this.$store.getters.getLevelById(1, levelId);
    },
  },
  // mounted: {
  //   updateLevelId() {
  //     this.levelId = this.levelData;
  //   }
  // },
  data: () => ({
    playerPirateImage: PlayerPirateImage,
    playerPirateBlueImage: PlayerPirateBlueImage,
    playerPirateYellowImage: PlayerPirateYellowImage,
    treasureImage: TreasureImage,
    treasureBlueImage: TreasureBlueImage,
    treasureYellowImage: TreasureYellowImage,
    woodImage: WoodImage,

    gameId: gameId,
    levelId: 0,

    message: "",
  }),
};
</script>

<style>
.settings {
  grid-area: Settings;
  z-index: 10;
}

.right {
  width: 50vw;
  height: 100vh;
  background: url(../assets/images/sand.jpg) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-right-player {
  width: 100%;
  height: 100%;
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
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.player-pirate {
  max-width: 10rem;
}

.target-container {
  height: 10rem;
  width: 10rem;
  display: flex;
}

.target-treasure {
  max-width: 10rem;
}

.coin-gif {
  position: absolute;
  bottom: 13rem;
  z-index: 100;
}
</style>
