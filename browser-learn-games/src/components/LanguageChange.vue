<template>
  <select
    id="language"
    class="language-change__dropdown"
    @click="changeLanguage"
  >
    <option value="de" id="language-de">Deutsch</option>
    <option value="en" id="language-en">English</option>
  </select>
</template>

<script>
export default {
  name: "LanguageChange",
  props: {},
  methods: {
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
  mounted() {
    if (this.$store.state.settings.language == 0) {
      document.querySelector("#language-de").setAttribute("selected", true);
    } else if (this.$store.state.settings.language == 1) {
      document.querySelector("#language-en").setAttribute("selected", true);
    }
  },
};
</script>

<style scoped>
.language-change__dropdown {
  padding: 0.2rem;
  background: var(--color-darker);
  color: var(--color-light);
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
}

.language-change__dropdown:hover {
  background-color: var(--color-darker-focus);
}
</style>
