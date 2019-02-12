<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Pocket</router-link>
      </div>
      <div class="nav-links">
        <div>
          <router-link to="/">Home</router-link> 
        </div>
        <div v-if="jwt" class="loggedIn-user">
          <div>
            <router-link to="/editor">New Article</router-link>
          </div>
          <div>
            <router-link to="/settings">Settings</router-link>
          </div>
          <div>
            <router-link :to="{ name: 'user', params: {user: user.username} }">{{ user.username }}</router-link>
          </div>
        </div>
        <div v-else>
          <div>
            <router-link to="/login">Sign in</router-link>
          </div>
          <div>
            <router-link to="/register">Sign up</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      jwt: '',
      user: ''
    }
  },
  mounted() {
    this.jwt = JSON.parse(localStorage.getItem('jwt'));
    fetch('https://conduit.productionready.io/api/user', {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Token ${this.jwt}`		
      }
    }).then(res => res.json())
    .then(data => this.user = data.user)
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid rgba(0, 0, 0, 0.2);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-links {
  display: grid;
  grid-template-columns: repeat(3, 130px);
}

.loggedIn-user {
  display: grid;
  grid-template-columns: repeat(3, 100px);
}

</style>
