<template>
  <div>
    <NavBar />
    <div class="article-wrapper" v-if="uniqTags.length">
      <div class="feed-wrapper">
        <Router-link to="/" class="tag-global">
          <h2 class="feed">Global Feed</h2>
        </Router-link>
        <h2 class="feed">#{{ $route.params.tag }}</h2>
      </div>
      <div class="article" v-for="article in uniqTags">
        <div class="user">
          <img class="user-image" src='https://static.productionready.io/images/smiley-cyrus.jpg' alt="">
          <div class="user-info">
            <router-link class="user-link" :to="{ name: 'profile', params: { username: article.author.username } }">
              <p class="user-name">{{ article.author.username }}</p>
            </router-link>
            <p class="user-created">{{ article.createdAt }}</p>
          </div>
          <div class="like-btn">
            <div class="like-count-wrapper">
              <span><i class="fas fa-heart"></i>{{ article.favoritesCount }}</span>
            </div>
          </div>
        </div>
        <router-link class="article-detail" :to="{name: 'uniqArticle', params: { slug: article.slug, data: uniqTags } }">
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
          <router-link :to="{name: 'tags', params: { tag: tag }}">
            <button @click="handleClick(tag)" class="tag-btn">{{ tag }}</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="loader" v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from "./Loader";
import NavBar from "./NavBar"
export default {
  name: "tags",
  components: {
    Loader,
    NavBar
  },
  data() {
    return {
      uniqTags: [],
      tags: []
    }
  },
  methods: {
    handleClick(tag) {
      fetch(`https://conduit.productionready.io/api/articles?tag=${tag}`)
      .then(res => res.json())
      .then(tags => { this.uniqTags = tags.articles }
      )
    }
  },
  mounted() {

    // Querying data using Tags from API
  
    fetch(`https://conduit.productionready.io/api/articles?tag=${this.$route.params.tag}`)
    .then(res => res.json())
    .then(tags => { this.uniqTags = tags.articles }
    )

  },
  created() {

    // Fetching Tags from API
    
    fetch('https://conduit.productionready.io/api/tags')
    .then(res => res.json())
    .then(tags => {this.tags = tags.tags})
  }
}
</script>

<style scoped>
  a.tag-global.router-link-active {
    text-decoration: none;
    color: #42b983;
  }
  h2.feed {
    color: #42b983;
  }
  .feed-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 200px);
  }
  /* a.router-link-exact-active {
  color: #42b983;
  } */
</style>
