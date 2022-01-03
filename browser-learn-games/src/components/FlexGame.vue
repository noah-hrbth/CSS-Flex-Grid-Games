<template>
    <div>
      

        <div class="editor">
          {{ this.getLevelById(levelData) }}
          <p class="editor-text">#output {</p>
          <textarea
            class="editor-eingabe"
            v-model="this.message"
            autocomplete="off"
            spellcheck="false"
            placeholder="Gib hier dein CSS ein!"
          ></textarea>
          <p class="editor-text">}</p>
        </div>
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
.editor-text {
  font-size: 1.75rem;
  font-weight: bold;
  word-spacing: 0.5rem;
}

.editor-eingabe {
  max-width: 90%;
  max-height: 90%;
  font-size: 1.25rem;
  font-weight: bold;
  color: #3B2718;
  margin: 0.5rem 0;
  padding: 0.2rem 1.25rem;
  outline: 0;
  border-radius: 10px;
  border: 3px solid transparent;
}

body {
  color: var(--color-light);
  font-family: var(--font-body), sans-serif;
  overflow: hidden;
}

.main-container {
  display: flex;
}

.left {
  width: 50vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 25%;
  grid-template-rows: 20% 7% 30% 40%;
  grid-template-areas:
    "Logo Logo"
    "Levelauswahl Settings"
    "Aufgaben Aufgaben"
    "Editor Editor";
  gap: 0.625rem;
  justify-content: space-around;
  align-items: stretch;
  background: url(../assets/images/wood.jpg) no-repeat;
  background-size: cover;
  border-right: 5px solid var(--color-darker);
}

.game-logo {
  grid-area: Logo;
  font-family: var(--font-heading);
  font-size: 2rem;
}

.level-select {
  grid-area: Levelauswahl;
  z-index: 10;
}

.settings {
  grid-area: Settings;
  z-index: 10;
}

.aufgaben {
  grid-area: Aufgaben;
  width: 40vw;
  margin-bottom: -5rem;
}

.aufgaben-titel {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

.aufgaben-text {
  font-size: 1.5rem;
}

.aufgaben-text-important {
  background-color: rgb(105, 105, 105);
  padding: 0 0.3rem;
}

.editor {
  grid-area: Editor;
  margin-bottom: 10rem;
}

.watersplash-image-level-select {
  position: absolute;
  width: 30rem;
  top: 75%;
  right: 80%;
}

.watersplash-image-settings {
  position: absolute;
  width: 20rem;
  top: 83%;
  left: 30%;
}

/** Rechte Seite **/

.right {
  width: 50vw;
  height: 100vh;
  background: url(/assets/images/sand.jpg) no-repeat;
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