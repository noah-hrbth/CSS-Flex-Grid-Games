<template>
  <div class="editor">
    <p
      :class="this.$store.state.game.currentGame == 2 ? 'editor-text-grid' : ''"
      class="editor-text"
      v-html="
        this.$store.getters.getLevelById(
          this.$store.state.game.currentGame,
          this.$store.state.game.currentLevel
        ).preTxt
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
    ></textarea>
    <p class="editor-text">}</p>
    <button
      class="continue-btn"
      @click="go_to_next_level()"
      style="display: none"
      onclick="document.querySelector('.editor-eingabe').value = ''; document.querySelectorAll('.coin-gif').forEach(coin => coin.style.display = 'none')"
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
      this.$store.state.editor.editorInput = "";
      document.querySelector(".continue-btn").style.display = "none";

      if (this.is_last_level() === false) {
        this.$store.state.game.currentLevel += 1;
      }
      // TODO: Add case for the last level
    },

    isCollisionGrid(div1, div2) {
      let x1 = div1.getBoundingClientRect().left;
      let w1 = div1.offsetWidth;
      let r1 = x1 + w1;
      let x2 = div2.getBoundingClientRect().left;
      let w2 = div2.offsetWidth;
      let r2 = x2 + w2;

      if(x1 == x2 && r1 == r2){
        this.$store.state.game.colliding = true;
        document.querySelector(".continue-btn").style.display = "block";
        return true;
      }
      this.$store.state.game.colliding = false;
      document.querySelector(".continue-btn").style.display = "none";
      return false;
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
        this.$store.state.game.colliding = false;
        document.querySelector(".continue-btn").style.display = "none";
        console.log(false);
        return false;
      }
      this.$store.state.game.colliding = true;
      document.querySelector(".continue-btn").style.display = "block";
      console.log(true);
      return true;
    },
  },
  watch: {
    editorInput: async function () {
      this.$store.state.editor.editorInput = this.editorInput;

      for (
        let i = 0;
        i <
        this.$store.getters.getPlayerAmount(
          this.$store.state.game.currentGame,
          this.$store.state.game.currentLevel
        );
        i++
      ) {
        let pId = "player-container-" + (i + 1);
        let tId = "target-container-" + (i + 1);

        let p = document.getElementById(pId);
        let t = document.getElementById(tId);

        await this.$nextTick();

        if(this.$store.state.game.currentGame == 1){
          this.isCollision(p, t);
        } else {
          this.isCollisionGrid(p, t);
        }
      }
    },
  },
};
</script>

<style>
.editor {
  grid-area: Editor;
  margin-bottom: 10rem;
  width: 45vw;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.editor-text {
  font-size: calc(16px + 0.2vw);
  font-weight: bold;
  font-family: sans-serif;
}

.editor-text-grid {
  font-size: calc(11.5px + 0.4vw);
}

.editor-eingabe {
  margin: 1% 0 1% 1.1rem;
  resize: none;
  font-size: calc(16px + 0.2vw);
  font-weight: bold;
  border: 0;
  outline: 0;
  border-radius: 5px;
  background-color: var(--color-darker);
  width: 22rem;
  min-width: 250px;
  min-height: 60%;
  color: var(--color-light);
  padding: 0.2rem;
  font-family: sans-serif;
}

@media screen and (max-width: 1100px) {
  .editor-eingabe {
    width: 15rem;
  }
}

.editor-eingabe:focus {
  background-color: var(--color-darker-focus);
}

.continue-btn {
  cursor: pointer;
  border-radius: 100%;
  filter: drop-shadow(2px 4px 8px black);
  width: 10%;
  position: relative;
  bottom: 3vw;
  left: 25rem;
}

@media screen and (max-width: 1100px) {
  .continue-btn {
    left: 18rem;
  }
}

.continue-btn:active {
  transform: scale(0.95);
  box-shadow: inset 0px 57px 0px -18px rgba(0, 0, 0, 0.103);
}

.continue-icon {
  max-height: 4vw;
}
</style>
