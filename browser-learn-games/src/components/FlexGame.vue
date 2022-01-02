<template>
    <div>
        <div class="editor">
          <p class="editor-text">#output {</p>
          <textarea
            class="editor-eingabe"
            v-model="this.message"
            autocomplete="off"
            spellcheck="false"
            placeholder="Gib hier dein CSS ein!"
          ></textarea>
          <p class="editor-text">}</p>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlexGame',
    components: {

    },
    data: () =>  ({
        message: ""
    })
}
</script>

<style>
.editor-text {
  font-size: 1.75rem;
  font-weight: bold;
  word-spacing: 0.5rem;
}

.editor-eingabe {
  max-width: 90%;
  max-height: 90%;
  font-size: 1.25rem;
  font-weight: bold;
  color: #3B2718;
  margin: 0.5rem 0;
  padding: 0.2rem 1.25rem;
  outline: 0;
  border-radius: 10px;
  border: 3px solid transparent;
}
</style>