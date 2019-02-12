<template>
  <div class="form-wrapper">
    <h2 class="sign-in">Sign in</h2>
    <router-link to="/register" class="register">
      <p>Need an account?</p>
    </router-link>
    <form action="/login" method="POST" class="form" @submit.prevent="signIn">
      <label for="email">
        <input type="email" name="email" id="email" placeholder="Enter your email here">
      </label>
      <label for="password">
        <input type="password" name="password" id="password" placeholder="Enter your password here">
      </label>
      <div class="btn-wrapper">
        <input type="submit" value="Sign in">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: "",
      userData: null,
      jwt: ''
    }
  },
  mounted() {
    this.jwt = JSON.parse(localStorage.getItem('jwt')); 
    if (this.jwt) {
      this.$router.push({path: '/'});
    }
  },
  methods: {
    signIn() {
      fetch('https://conduit.productionready.io/api/users/login', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          user: {
            email: this.email,
            password: this.password
          }
        })
      }).then(res => res.json())
      .then(data => {
        if ( data.user ) {
          this.userData = data.user;
          localStorage.setItem('jwt', JSON.stringify(data.user.token));
          this.$router.push({path: '/'});
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
