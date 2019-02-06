<template>
  <div class="main-loader">
    <line-scale-pulse-out-loader color="#42b983" size="50px" letter-spacing="1px" />
  </div>
</template>

<script>
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { LineScalePulseOutLoader } from 'vue-loaders';

export default {
  name: "loaders",
  components: {
    LineScalePulseOutLoader
  }
}
</script>

<style scoped>
  .main-loader {
    padding: 100px 0;
  }
</style>


