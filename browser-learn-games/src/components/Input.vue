<template>
    <div class="editor">
        <p class="editor-text">#output {</p>
            <textarea
                class="editor-eingabe"
                v-model="this.$store.state.editor.editorInput"
                autocomplete="off"
                spellcheck="false"
                placeholder="Gib hier dein CSS ein!"
            ></textarea>
        <p class="editor-text">}</p>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data: () => ({
        editorInput: "",
    }),
}
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