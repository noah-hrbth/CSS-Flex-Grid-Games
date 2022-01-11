<template>
  <div class="aufgaben">
    <h2 class="aufgaben-titel">
      {{
        this.$store.getters.getLevelById(1, this.$store.state.game.currentLevel)
          .levelTitle
      }}
    </h2>
    <p class="aufgaben-text">
      {{
        this.$store.getters.getLevelById(1, this.$store.state.game.currentLevel)
          .levelTxt
      }}
    </p>
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
  margin-bottom: -5rem;
}

.aufgaben-titel {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

.aufgaben-text {
  font-size: 0.8rem;
}

.aufgaben-text-important {
  background-color: rgb(105, 105, 105);
  padding: 0 0.3rem;
}
</style>
