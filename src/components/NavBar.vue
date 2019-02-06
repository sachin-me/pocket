<template>
  <div id="banner">
    <div>
      <p class="pocket">Pocket</p>
      <p>A place to share your Knowledge.</p>
    </div>
  </div>
</template>

<script>

export default {
 name: "navbar"
}
</script>

<style scoped>
  #banner {
    height: 150px;
    width: 100%;
    background: #42b983;
    color: aliceblue;
    font-size: 20px;
    position: relative;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  #banner div {
    position: absolute;
    top: 25%;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .pocket {
    text-shadow: 0 1px 3px rgba(0,0,0,.3);
    font-weight: 700!important;
    text-align: center;
    font-size: 35px;
    letter-spacing: 1px;
    margin: 12px;
  }
</style>
