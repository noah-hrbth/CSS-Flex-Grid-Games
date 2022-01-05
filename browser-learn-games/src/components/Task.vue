<template>
    <div class="aufgaben">
        <p>Colliding? <span id="result">false</span></p>
        <h2 class="aufgaben-titel">Aufgabe</h2>
        <p class="aufgaben-text">
            
        </p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    data: () => ({
        
    }),
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
  font-size: 1.5rem;
}

.aufgaben-text-important {
  background-color: rgb(105, 105, 105);
  padding: 0 0.3rem;
}
</style>