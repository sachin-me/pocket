<template>
  <div>
    <div v-if="Object.keys(uniqArticle).length">
      <div v-for="article in uniqArticle">
        <div class="uniqArticle-wrapper">
          <div>
            <p class="article-title">{{ article.title }}</p>
          </div>
          <div class="uniqArticle-user">
            <img class="user-image" src='https://static.productionready.io/images/smiley-cyrus.jpg' alt="">
            <div class="user-info">
              <p class="user-name">{{ article.author.username }}</p>
              <p class="user-created">{{ article.createdAt }}</p>
            </div>
            <div class="buttons">
              <button class="flw-btn">+ Follow {{ article.author.username }}</button>
              <button class="fav-btn">Favorite Article ({{ article.favoritesCount }})</button>
            </div>
          </div>
        </div>
        <div class="uniqArticle-body">
          <p class="article-body" v-html="article.body"></p>
        </div>
      </div>
    </div>
    <div class="loader" v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from './Loader';
export default {
  name: "uniqArticle",
  components: {
    Loader
  },
  data(){
    return {
      uniqArticle: [],
      articleSlug: this.$route.params.slug
    }
  },
  mounted() {

    // Fetching data from API using slug 

    fetch(`https://conduit.productionready.io/api/articles/${this.articleSlug}`)
    .then(res => res.json())
    .then(articles => {this.uniqArticle = articles})
  }
}
</script>

<style scoped>
  .uniqArticle-wrapper {
    padding: 30px 50px;
    height: 150px;
    width: 100%;
    background: #333;
    color: aliceblue;
    font-size: 20px;
    position: relative;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .article-title {
    color: aliceblue;
    font-size: 30px;
    letter-spacing: 1px;
    margin: 20px 0;
  }
  .uniqArticle-body {
    padding: 30px 50px;
    font-size: 20px;
  }
  .article-body {
    color: #333;
  }
  .uniqArticle-user {
    display: grid;
    grid-template-columns: 50px 300px 1fr;
  }
  .buttons {
    padding: 6px;
  } 
  .buttons button {
    background: transparent;
    border: 1px solid;
    margin: 0 5px;
    padding: 10px;
    cursor: pointer;
    border-radius: 2px;
  }

  .fav-btn {
    color: #42b983;
  }
  .fav-btn:hover {
    background: #42b983;
    color: aliceblue;
    border: 1px solid transparent;
  }
  .flw-btn:hover {
    background: #a1a1a1;
    border: 1px solid transparent;
    color: aliceblue;
  }

</style>
