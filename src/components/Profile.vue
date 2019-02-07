<template>
  <div>
    <div v-if="users.length">
      <div class="user-info">
        <div class="user-detail">
          <img :src="users[0].author.image" alt="">
          <p>{{ users[0].author.username }}</p>
        </div>
        <div class="follow-btn">
          <button>+ Follow {{ users[0].author.username }}</button>
        </div>
      </div>
      <div class="user-articles">
        <div v-for="user in users" class="single-user-des">
          <div>
            <div class="user">
              <img class="user-image" src='https://static.productionready.io/images/smiley-cyrus.jpg' alt="">
              <div class="main-user">
                <router-link class="user-link" :to="{ name: 'profile', params: { username: user.author.username } }">
                  <p class="user-name">{{ user.author.username }}</p>
                </router-link>
                <p class="user-created">{{ user.createdAt }}</p>
              </div>
            </div>
            <div>
              <p class="user-title">{{ user.title }}</p>
              <p class="user-des">{{ user.description }}</p>
            </div>
          </div>
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
  name: "profile",
  props: ['profile'],
  components: {
    Loader
  },
  data() {
    return {
      userProfile: [],
      users: [],
      uniqUser: this.$route.params.username
    }
  },
  mounted() {

    // Fetching Articles from API

    fetch('https://conduit.productionready.io/api/articles')
    .then(res => res.json())
    .then(articles => {
      this.userProfile = articles.articles,
      this.users = articles.articles.filter((v) => v.author.username == this.uniqUser)
    })
  }
}
</script>

<style scoped>
  .user-info {
    background: #f3f3f3;
    width: 100%;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 60px;
  }
  .user-detail {
    text-align: center;
  }
  .user-detail img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }
  .user-detail p {
    color: #222;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 20px;
  }
  .user-title {
    color: #222;
    font-weight: 700;
    font-size: 20px;
  }
  .main-user p {
    padding: 0;
    margin: 5px;
  }
  .user-articles {
    max-width: 1000px;
    width: 100%;
    padding: 50px;
  }
  .single-user-des {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px 0;
  }
  .follow-btn {
    position: absolute;
    right: 10%;
  }
  .follow-btn button {
    background: transparent;
    padding: 10px 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    color: rgba(187, 187, 187, 0.925);
    cursor: pointer;
    border-radius: 2px;
    font-size: 16px;
  }
  .follow-btn button:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
