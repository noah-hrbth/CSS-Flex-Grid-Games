<template>
  <div class="editor">
    <p
      class="editor-text"
      v-html="
        this.$store.getters.getLevelById(1, this.$store.state.game.currentLevel)
          .preTxt
      "
    ></p>
    <textarea
      class="editor-eingabe"
      v-model="editorInput"
      autocomplete="off"
      spellcheck="false"
      v-bind:placeholder="
        this.$store.state.languageData[this.$store.state.settings.language]
          .inputPlaceholder
      "
      autofocus
    ></textarea>
    <p class="editor-text">}</p>
    <button
      class="continue-btn"
      @click="go_to_next_level();"
      style="display: none"
      onclick="document.querySelector('.editor-eingabe').value = ''"
    >
      <img
        class="continue-icon"
        src="../assets/images/continue-btn.png"
        alt=""
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "Input",
  data: () => ({
    editorInput: "",
  }),
  methods: {
    is_last_level() {
      if (this.$store.state.game.currentLevel + 1 == null) {
        return true;
      }
      return false;
    },

    go_to_next_level() {
      if (this.is_last_level() === false) {
        this.$store.state.game.currentLevel += 1;
      }
    },

    isCollision(div1, div2) {
      let x1 = div1.getBoundingClientRect().left;
      let y1 = div1.getBoundingClientRect().top;
      let h1 = div1.offsetHeight;
      let w1 = div1.offsetWidth;
      let b1 = y1 + h1;
      let r1 = x1 + w1;
      let x2 = div2.getBoundingClientRect().left;
      let y2 = div2.getBoundingClientRect().top;
      let h2 = div2.offsetHeight;
      let w2 = div2.offsetWidth;
      let b2 = y2 + h2;
      let r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        document.querySelector(".continue-btn").style.display = "none";
        return false;
      }
      document.querySelector(".continue-btn").style.display = "block";
      return true;
    },
  },
  watch: {
    editorInput: function () {
      this.$store.state.editor.editorInput = this.editorInput;

      for (
        let i = 0;
        i <
        this.$store.getters.getLevelById(
          this.$store.state.game.currentGame,
          this.$store.state.game.currentLevel
        ).playerAmount;
        i++
      ) {
        let pId = "player-container-" + (i + 1);
        let tId = "target-container-" + (i + 1);

        let p = document.getElementById(pId);
        let t = document.getElementById(tId);

        this.isCollision(p, t);
      }
    },
  },
};
</script>

<style>
.editor {
  grid-area: Editor;
  margin-bottom: 10rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
}

.editor-text {
  font-size: 1.35rem;
  font-weight: bold;
  font-family: sans-serif;
}

.editor-eingabe {
  margin: 1% 0 1% 4.2%;
  resize: none;
  font-size: 1.35rem;
  font-weight: bold;
  border: 0;
  outline: 0;
  border-radius: 5px;
  background-color: var(--color-darker);
  width: 80%;
  min-height: 60%;
  color: var(--color-light);
  padding: 0.2rem;
  font-family: sans-serif;
}

.editor-eingabe:focus {
  background-color: var(--color-darker-focus);
}

.continue-btn {
  cursor: pointer;
  border-radius: 100%;
  filter: drop-shadow(2px 4px 8px black);
  position: absolute;
  left: 30vw;
  top: 35vw;
}

.continue-btn:active {
  transform: scale(0.95);
  box-shadow: inset 0px 57px 0px -18px rgba(0, 0, 0, 0.103);
}

.continue-icon {
  max-height: 4rem;
}
</style>
