<template>
  <div class="home">
    <div class="preview-flex preview">
      <h1 class="gametitle">Flex Pirate</h1>
      <img
        src="../assets/images/flex_preview.gif"
        alt=""
        class="game-preview"
      />
    </div>
    <div class="preview-grid preview">
      <h1 class="gametitle">Grid Chick</h1>
      <img
        src="../assets/images/flex_preview.gif"
        alt=""
        class="game-preview"
      />
    </div>

    <Navigation />
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  components: {
    Navigation,
  },
  name: "HomeScreen",
  props: {},
};
</script>

<style>
body {
  background-color: #cccccc;
}

.home {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.preview {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%;
}

.preview-flex {
  background: url(../assets/images/wood.jpg) no-repeat;
  background-size: cover;
}

.preview-grid {
  background-image: url(../assets/images/leaves.png);
  background-size: cover;
}

.game-preview {
  border: var(--color-light) solid 5px;
  border-radius: 1rem;
  height: 20rem;
  width: 20rem;
  box-shadow: 7px 6px 8px 0px rgba(0, 0, 0, 0.705);
}

.navigation {
  position: absolute;
}

.link_button {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  background-color: white;
  border: 1px solid black;
  padding: 1rem;
  align-content: center;
  text-align: center;
}
</style>
