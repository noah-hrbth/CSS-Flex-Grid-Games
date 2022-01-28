<template>
  <div class="aufgaben">
    <h2 class="aufgaben-titel">
      {{
        this.$store.getters.getLevelById(this.$store.state.game.currentGame, this.$store.state.game.currentLevel)
          .levelTitle
      }}
    </h2>
    <p
      class="aufgaben-text"
      v-html="
        this.$store.getters.getLevelById(this.$store.state.game.currentGame, this.$store.state.game.currentLevel)
          .levelTxt[this.$store.state.settings.language]
      "
    ></p>
  </div>
</template>

<script>
export default {
  name: "Task",
  data: () => ({}),
  methods: {},
};
</script>

<style>
.aufgaben {
  grid-area: Aufgaben;
  width: 40vw;
}

.aufgaben-text {
  height: 15rem;
  overflow-y: scroll;
}

</style>
