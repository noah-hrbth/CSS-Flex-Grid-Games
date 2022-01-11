<template>
  <div class="home">
    <!-- <img id="canon-shoot" src="" alt=""> -->
    <div class="welcome-container">
      <p class="welcome-text">
        <span class="welcome-text-first">Willkommen!</span>
        <br />
        Wähle ein Game aus:
      </p>
    </div>
    <div class="preview-flex preview">
      <h1 class="gametitle">Flex Pirate</h1>
      <img
        src="../assets/images/game-preview-flex.gif"
        alt=""
        class="game-preview-gif"
        v-on:click="goToFlex"
      />
    </div>
    <div class="preview-grid preview">
      <h1 class="gametitle">Grid Chick</h1>
      <img
        src="../assets/images/game-preview-flex.gif"
        alt=""
        class="game-preview-gif"
        v-on:click="goToGrid"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  props: {},
  methods: {
    goToFlex() {
      // const canonShoot = document.getElementById('canon-shoot');
      // canonShoot.src = "../assets/images/canon-shoot.gif";
      this.$store.state.game.currentGame = 1;
    },
    goToGrid() {
      this.$store.state.game.currentGame = 2;
    },
  },
};
</script>

<style>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
}

/* 
#canon-shoot {
  position: absolute;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
} */

.welcome-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
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
  margin-top: 15%;
  font-size: 0rem;
  text-align: center;
  font-family: var(--font-homescreen);
  color: #575e40;
  padding: 1rem 1.5rem;
  animation: change-font forwards 1.5s 1.5s;
}

@keyframes change-font {
  from {
    margin-top: 15%;
    font-size: 0rem;
  }
  to {
    margin-top: 1%;
    font-size: 3rem;
    background-color: #ffe8d6c7;
    border-radius: 1rem;
  }
}

.welcome-text-first {
  color: var(--color-light);
  font-size: 9rem;
  animation: change-font-size forwards 1.5s 1.5s;
}

@keyframes change-font-size {
  from {
    font-size: 9rem;
    color: var(--color-light);
  }
  to {
    font-size: 2rem;
    color: #575e40;
  }
}

.preview {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 12%;
  padding-left: 8%;
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
  height: 20rem;
  width: 35rem;
  box-shadow: 7px 6px 8px 0px rgba(0, 0, 0, 0.705);
  object-fit: fill;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.game-preview-gif:hover {
  transform: scale(1.05);
}
</style>
