<template>
  <div class="page-loader" v-if="!isloaded">
    <img :src="this.loadingGif" alt="Loading..." />
  </div>
</template>

<script>
import LoadingGif from "../assets/images/loading.gif";

export default {
  name: "PageLoader",
  data: () => ({
    loadingGif: LoadingGif,
      isloaded: false,
  }),
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    };
  },
};
</script>

<style scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #03071e;
  z-index: 1000;
}
</style>
