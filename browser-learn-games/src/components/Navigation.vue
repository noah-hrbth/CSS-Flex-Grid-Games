<template>
  <div class="navigation">
    <a class="link_button" v-on:click="goToFlex"> </a>
    <a class="link_button" v-on:click="goToGrid"> </a>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({}),
  methods: {
    goToFlex() {
      this.$store.state.game.currentGame = 1;
    },
    goToGrid() {
      this.$store.state.game.currentGame = 2;
    },
  },
};
</script>

<style scoped></style>
