<template>
  <div class="article-wrapper">
    <div class="article" v-for="article in articles" v-if="articles">
      <div class="user">
        <img class="user-image" src='https://static.productionready.io/images/smiley-cyrus.jpg' alt="">
        <div class="user-info">
          <p class="user-name">{{ article.author.username }}</p>
          <p class="user-created">{{ article.createdAt }}</p>
        </div>
      </div>
      <p class="article-title">{{ article.title }}</p>
      <p class="article-body">{{ article.body }}</p>
      <p>{{ article.tag }}</p>
    </div>
    <div class="loader">
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from './Loader';
export default {
  name: "Article",
  show: true,
  components: {
    Loader
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    fetch('https://conduit.productionready.io/api/articles')
    .then(res => res.json())
    .then(articles => {this.articles = articles.articles})
  }
}
</script>

<style scoped>
  .article-wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
  }
  .article {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px 0;
  }
  .user {
    display: flex;
  }
  .user-image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .user-info {
    display: inline-block;
    padding: 0 10px;
  }
  .user-info p {
    margin: 5px;
  }
  .user-name {
    color: #42b983;
  }
  .user-created {
    color: #bbb;
  }
  .article-title {
    color: #222;
    font-weight: 700;
    font-size: 20px;
  }
  .article-body {
    color: rgb(128, 125, 125);
  }
  .loader {
    text-align: center;
    padding: 50px 0;
  }
</style>
