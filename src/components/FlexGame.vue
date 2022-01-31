<template>
  <div class="right">
    <div class="inner-right-target" :style="this.getLevelById(this.$store.state.game.currentLevel).solution">
      <div
        class="target-container"
        id="target-container-1"
      >
        <img
          class="image target-treasure"
          :src="treasureImage"
          alt="Ziel Truhe"
        />
        <img
          src="../assets/images/coin.gif"
          alt=""
          class="coin-gif"
          :style="
            this.$store.state.game.colliding
              ? 'display:block;'
              : 'display: none;'
          "
        />
      </div>
      <div
        class="target-container"
        id="target-container-2"
        :style="[
          this.getLevelById(this.$store.state.game.currentLevel).playerAmount >
          1
            ? ''
            : 'display:none;',
        ]"
      >
        <img
          class="image target-treasure"
          :src="treasureBlueImage"
          alt="Ziel Truhe"
        />
        <img
          src="../assets/images/coin.gif"
          alt=""
          class="coin-gif"
          :style="
            this.$store.state.game.colliding
              ? 'display:block;'
              : 'display: none;'
          "
        />
      </div>
      <div
        class="target-container"
        id="target-container-3"
        :style="[
          this.getLevelById(this.$store.state.game.currentLevel).playerAmount >
          2
            ? ''
            : 'display:none;',
        ]"
      >
        <img
          class="image target-treasure"
          :src="treasureYellowImage"
          alt="Ziel Truhe"
        />
        <img
          src="../assets/images/coin.gif"
          alt=""
          class="coin-gif"
          :style="
            this.$store.state.game.colliding
              ? 'display:block;'
              : 'display: none;'
          "
        />
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

    message: "",
  }),
  methods: {
    getLevelById(levelId) {
      return this.$store.getters.getLevelById(1, levelId);
    },
  },
};
</script>

<style scoped>
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
  height: 5vw;
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.player-pirate {
  max-width: 5vw;
}

.target-container {
  height: 5vw;
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.target-treasure {
  max-width: 5vw;
}

.coin-gif {
  position: absolute;
  z-index: 100;
  display: none;
  width: 15vw;
}
</style>
