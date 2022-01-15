<template>
  <div class="editor">
    <p class="editor-text">#sand {</p>
    <textarea
      class="editor-eingabe"
      v-model="this.$store.state.editor.editorInput"
      autocomplete="off"
      spellcheck="false"
      placeholder="Gib hier dein CSS ein!"
      autofocus
    ></textarea>
    <button class="continue-btn" @click="go_to_next_level()">
      <img
        class="continue-icon"
        src="../assets/images/continue-btn.png"
        alt="Nächstes Level"
        title="Nächstes Level"
      />
    </button>
    <p class="editor-text">}</p>
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
      if ((this.$store.state.game.currentLevel + 1) == null) {
        return true;
      }
      return false;
    },

    go_to_next_level() {
      if (this.is_last_level() === false) {
        this.$store.state.game.currentLevel += 1;
      }
    },

    // checkIfColliding(player, target) {
    //   let x1 = player.offset().left;
    //   let y1 = player.offset().top;
    //   let h1 = player.outerHeight(true);
    //   let w1 = player.outerWidth(true);
    //   let b1 = y1 + h1;
    //   let r1 = x1 + w1;
    //   let x2 = target.offset().left;
    //   let y2 = target.offset().top;
    //   let h2 = target.outerHeight(true);
    //   let w2 = target.outerWidth(true);
    //   let b2 = y2 + h2;
    //   let r2 = x2 + w2;

    //   if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
    //     return false;
    //   }
    //   return true;
    // },
  },
};
</script>

<style>
.editor {
  grid-area: Editor;
  margin-bottom: 10rem;
}

.editor-text {
  font-size: 1.75rem;
  font-weight: bold;
  word-spacing: 0.5rem;
}

.editor-eingabe {
  max-width: 64%;
  min-width: 45%;
  max-height: 95%;
  min-height: 35%;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-light);
  background-color: var(--color-darker);
  margin: 0.5rem 0;
  padding: 0.2rem 1.25rem;
  outline: 0;
  border-radius: 10px;
  border: 3px solid transparent;
}

.editor-eingabe:focus {
  background-color: var(--color-darker-focus);
}

.continue-btn {
  margin-left: 1.5vw;
  cursor: pointer;
  border-radius: 100%;
  filter: drop-shadow(2px 4px 8px black);
}

.continue-btn:active {
  transform: scale(0.95);
  box-shadow: inset 0px 57px 0px -18px rgba(0, 0, 0, 0.103);
}

.continue-icon {
  max-height: 4rem;
}
</style>
