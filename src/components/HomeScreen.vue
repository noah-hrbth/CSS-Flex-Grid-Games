<template>
  <div class="home">
    <LanguageChange />
    <div class="welcome-container">
      <p class="welcome-text">
        <span class="welcome-text-first">
          {{
            this.$store.state.languageData[this.$store.state.settings.language]
              .welcomeText
          }}
        </span>
        <br />
        {{
          this.$store.state.languageData[this.$store.state.settings.language]
            .chooseGameText
        }}
      </p>
    </div>
    <div class="preview-flex preview">
      <h1 class="gametitle">Flex Pirate</h1>
      <img
        src="../assets/images/flex_preview.gif"
        alt=""
        class="game-preview-gif"
        v-on:click="goToFlex"
      />
      <p
        class="game-description"
        v-html="
          this.$store.state.languageData[this.$store.state.settings.language]
            .descriptionFlex
        "
      ></p>
    </div>
    <div class="preview-grid preview">
      <h1 class="gametitle gametitle-grid">Grid Chick</h1>
      <img
        src="../assets/images/game-preview-flex.gif"
        alt=""
        class="game-preview-gif"
        v-on:click="goToGrid"
      />
      <p
        class="game-description game-description-grid"
        v-html="
          this.$store.state.languageData[this.$store.state.settings.language]
            .descriptionGrid
        "
      ></p>
    </div>
    <p class="signature">
      Made with &#10084;&#65039; by Browser-Learn-Games Team
    </p>
  </div>
</template>

<script>
import LanguageChange from "./LanguageChange.vue";

export default {
  name: "HomeScreen",
  components: {
    LanguageChange,
  },
  props: {},
  methods: {
    goToFlex() {
      this.$store.state.game.currentGame = 1;
    },
    goToGrid() {
      this.$store.state.game.currentGame = 2;
    },
    changeLanguage() {
      const languageChange = document.querySelector(
        ".language-change__dropdown"
      );
      if (languageChange.value == "de") {
        this.$store.state.settings.language = 0;
      } else if (languageChange.value == "en") {
        this.$store.state.settings.language = 1;
      }
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.language-change__dropdown {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
}

.welcome-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  pointer-events: none;
  animation: blur-out forwards 1.5s 1.5s;
}

@keyframes blur-out {
  from {
    backdrop-filter: blur(10px);
  }
  to {
    backdrop-filter: blur(0);
  }
}

.welcome-text {
  margin-top: 15vw;
  font-size: 0vw;
  text-align: center;
  font-family: var(--font-homescreen);
  color: #575e40;
  padding: 1rem 1.5rem;
  animation: change-font forwards 1.5s 1.5s;
}

@keyframes change-font {
  from {
    margin-top: 15vw;
    font-size: 0vw;
  }
  to {
    margin-top: 1vw;
    font-size: 3vw;
    background-color: #ffe8d6c7;
    border-radius: 1vw;
  }
}

.welcome-text-first {
  color: var(--color-light);
  font-size: 9vw;
  animation: change-font-size forwards 1.5s 1.5s;
}

@keyframes change-font-size {
  from {
    font-size: 9vw;
    color: var(--color-light);
  }
  to {
    font-size: 2vw;
    color: #575e40;
  }
}

.preview {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 5vw;
  padding-left: 8vw;
}

.preview-flex {
  background: url(../assets/images/wood.jpg) no-repeat;
  background-size: cover;
  border-right: var(--color-light) 10px solid;
  filter: grayscale(70%);
  transition: all 0.3s;
}

.preview-flex:hover {
  filter: grayscale(0);
}

.preview-grid {
  background-image: url(../assets/images/leaves.png);
  background-size: cover;
  filter: grayscale(70%);
  transition: all 0.3s;
  text-align: right;
}

.gametitle {
  width: 35vw;
}

.gametitle-grid {
  font-family: var(--font-heading-grid) !important;
  font-size: calc(35px + 1vw);
  margin-top: 1rem;
}

@media screen and (max-width: 768px) {
  .gametitle-grid {
    margin-top: 1.25rem;
  }
}

.preview-grid:hover {
  filter: grayscale(0);
}

.gametitle:first-child {
  font-family: var(--font-heading);
}

.game-preview-gif {
  border: var(--color-light) solid 5px;
  border-radius: 1rem;
  height: 20vw;
  width: 35vw;
  box-shadow: 7px 6px 8px 0px rgba(0, 0, 0, 0.705);
  object-fit: fill;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.game-preview-gif:hover {
  transform: scale(1.05);
}

.game-description {
  width: 35vw;
  font-size: calc(12px + 0.5vw);
}

.game-description-grid {
  font-family: var(--font-body-grid) !important;
}

.signature {
  position: absolute;
  bottom: 0;
  left: 1vw;
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
  font-family: sans-serif;
  background-color: var(--color-darker);
}
</style>
