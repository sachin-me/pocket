<template>
  <div>
    <div class="article-wrapper" v-if="articles.length">
      <div class="article" v-for="article in articles">
        <div class="user">
          <img class="user-image" src='https://static.productionready.io/images/smiley-cyrus.jpg' alt="">
          <div class="user-info">
            <router-link class="user-link" :to="{ name: 'profile', params: { username: article.author.username } }">
              <p class="user-name">{{ article.author.username }}</p>
            </router-link>
            <p class="user-created">{{ article.createdAt }}</p>
          </div>
        </div>
        <router-link class="article-detail" :to="{name: 'uniqArticle', params: { slug: article.slug, data: articles } }">
          <div>
            <p class="article-title">{{ article.title }}</p>
            <p class="article-body">{{ article.description }}</p>
          </div>
        </router-link>
        <p v-for="userTag in article.tagList" class="tag-wrapper">
          <button class="tag-btn">{{ userTag }}</button>
        </p>
      </div>
      <div class="tag-wrapper">
        <p class="tag-title">Popular Tags</p>
        <div v-for="tag in tags" class="tags">
          <button class="tag-btn">{{ tag }}</button>
        </div>
      </div>
    </div>
    <div class="loader" v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from './Loader.vue';
import uniqArticle from './UniqArticle';
import Profile from './Profile';
export default {
  name: "Article",
  components: {
    Loader,
    uniqArticle,
    Profile
  },
  data() {
    return {
      articles: [],
      tags: [],
    }
  },
  mounted() {

    // Fetching Articles from API

    fetch('https://conduit.productionready.io/api/articles')
    .then(res => res.json())
    .then(articles => {this.articles = articles.articles})

    // Fetching Tags from API
    
    fetch('https://conduit.productionready.io/api/tags')
    .then(res => res.json())
    .then(tags => {this.tags = tags.tags})
  }
}
</script>

<style>
  .article-wrapper {
    max-width: 800px;
    width: 100%;
    padding: 50px;
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
  .user-link {
    text-decoration: none;
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
  .tag-wrapper {
    float: right;
    position: absolute;
    right: 8%;
    top: 47%;
    background: #bbb;
    padding: 10px;
    width: 24%;
  }
  .tag-title {
    margin: 0;
  }
  .tags {
    display: inline-block;
    margin: 2px;
  }
  .tag-btn {
    background: #373a3c;
    border: none;
    color: aliceblue;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 2px;
  }
  .article-detail {
    text-decoration: none;
  }
</style>
