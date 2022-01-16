<template>
  <div class="right">
    <div class="inner-right-target">
      <div
        class="target-container"
        id="target-container-1"
        :style="this.getLevelById(this.$store.state.game.currentLevel).solution"
      >
        <img
          class="image target-treasure animate__animated animate__bounce animate__slow animate__delay-1s animate__infinite"
          :src="treasureImage"
          alt="Ziel Truhe"
        />

        <img src="../assets/images/coin.gif" alt="" class="coin-gif" />
      </div>
      <div
        class="target-container"
        id="target-container-2"
        :style="[
          this.getLevelById(this.$store.state.game.currentLevel).solution,
          this.getLevelById(this.$store.state.game.currentLevel).playerAmount >
          1
            ? ''
            : 'display:none;',
        ]"
      >
        <img
          class="image target-treasure animate__animated animate__bounce animate__slow animate__delay-1s animate__infinite"
          :src="treasureBlueImage"
          alt="Ziel Truhe"
        />

        <img src="../assets/images/coin.gif" alt="" class="coin-gif" />
      </div>
      <div
        class="target-container"
        id="target-container-3"
        :style="[
          this.getLevelById(this.$store.state.game.currentLevel).solution,
          this.getLevelById(this.$store.state.game.currentLevel).playerAmount >
          2
            ? ''
            : 'display:none;',
        ]"
      >
        <img
          class="image target-treasure animate__animated animate__bounce animate__slow animate__delay-1s animate__infinite"
          :src="treasureYellowImage"
          alt="Ziel Truhe"
        />

        <img src="../assets/images/coin.gif" alt="" class="coin-gif" />
      </div>
    </div>
    <div
      class="inner-right-player"
      v-bind:style="this.$store.state.editor.editorInput"
    >
      <div class="player-container" id="player-container-1">
        <img
          class="image player-pirate"
          :src="playerPirateImage"
          alt="Player Pirate"
        />
      </div>
      <div
        class="player-container"
        id="player-container-2"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).playerAmount >
          1
            ? ''
            : 'display:none;'
        "
      >
        <img
          class="image player-pirate"
          :src="playerPirateBlueImage"
          alt="Player Pirate"
        />
      </div>
      <div
        class="player-container"
        id="player-container-3"
        :style="
          this.getLevelById(this.$store.state.game.currentLevel).playerAmount >
          2
            ? ''
            : 'display:none;'
        "
      >
        <img
          class="image player-pirate"
          :src="playerPirateYellowImage"
          alt="Player Pirate"
        />
      </div>
    </div>
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
  methods: {
    getLevelById(levelId) {
      return this.$store.getters.getLevelById(1, levelId);
    },

    isCollision(div1, div2) {
      let x1 = div1.getBoundingClientRect().left;
      let y1 = div1.getBoundingClientRect().top;
      let h1 = div1.offsetHeight();
      let w1 = div1.offsetWidth();
      let b1 = y1 + h1;
      let r1 = x1 + w1;
      let x2 = div2.getBoundingClientRect().left;
      let y2 = div2.getBoundingClientRect().top;
      let h2 = div2.offsetHeight();
      let w2 = div2.offsetWidth();
      let b2 = y2 + h2;
      let r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return false;
      }
      return true;
    },
  },
  // mounted: {
  //   updateLevelId() {
  //     this.levelId = this.levelData;
  //   }
  // },
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
