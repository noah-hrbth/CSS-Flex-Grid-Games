<template>
    <div class="right">
        <div class="inner-right-target">
            <div class="target-container" id="target-container">
                <img
                class="
                image
                target-treasure
                animate__animated
                animate__bounce
                animate__slow
                animate__delay-1s
                animate__infinite
                "
                :src="treasureImage"
                alt="Ziel Truhe"
                />
            </div>
        </div>
        <div class="inner-right-player" v-bind:style="message">
            <div class="player-container" id="player-container">
                <img
                class="image player-pirate"
                :src="playerPirateImage"
                alt="Player Pirate"
                />
            </div>
        </div>
    </div>
</template>

<script>
import PlayerPirateImage from '../assets/images/pirate-player.png'
import TreasureImage from '../assets/images/treasure.png'
import WoodImage from '../assets/images/wood.jpg'

const gameId = 1;

export default {
    name: 'FlexGame',
    components: {

    },
    props: {
      levelData: {
        type: Number
      }
    },
    methods: {
      getLevelById(levelId) {
        return this.$store.getters.getLevelById(1, levelId)
      }
    },
    // mounted: {
    //   updateLevelId() {
    //     this.levelId = this.levelData;
    //   }
    // },
    data: () => ({
      playerPirateImage: PlayerPirateImage,
      treasureImage: TreasureImage,
      woodImage: WoodImage,

      gameId: gameId,
      levelId: 0,

      message: ""
    })
}
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
  z-index: 1000;
}

.player-pirate {
  max-width: 10rem;
}

.target-container {
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.target-treasure {
  max-width: 10rem;
}

</style>