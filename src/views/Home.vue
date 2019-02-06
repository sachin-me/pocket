<template>
  <div class="home">
    <Header />
    <Article />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from './../components/Header';
import Article from './../components/Article';
export default {
  name: "home",
  components: {
    Header,
    Article
  }
};
</script>
