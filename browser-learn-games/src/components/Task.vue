<template>
    <div class="aufgaben">
        <p>Colliding? <span id="result">false</span></p>
        <h2 class="aufgaben-titel">Aufgabe</h2>
        <p class="aufgaben-text">
            {{ this.$store.getters.getLevelById(1, this.$store.state.game.currentLevel).levelTxt }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    data: () => ({
        
    }),
    methods: {
        checkIfColliding(){
            const player = "";
            const target = "";

            let x1 = player.offset().left;
            let y1 = player.offset().top;
            let h1 = player.outerHeight(true);
            let w1 = player.outerWidth(true);
            let b1 = y1 + h1;
            let r1 = x1 + w1;
            let x2 = target.offset().left;
            let y2 = target.offset().top;
            let h2 = target.outerHeight(true);
            let w2 = target.outerWidth(true);
            let b2 = y2 + h2;
            let r2 = x2 + w2;

            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
                return false;
            }
            return true;
        }
    }
}
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