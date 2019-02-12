<template>
  <div class="form-wrapper">
    <h2 class="sign-in">Sign up</h2>
    <router-link to="/login" class="register">
      <p>Have an account?</p>
    </router-link>
    <form action="/register" method="POST" @submit.prevent="signUp" class="form">
      <label for="userName">
        <input type="text" v-model="username"placeholder="Enter your user name here" name="username" id="userName">
      </label>
      <label for="email">
        <input type="email" v-model="email" name="email" id="email" placeholder="Enter your email here">
      </label>
      <label for="password">
        <input type="password" v-model="password" name="password" id="password" placeholder="Enter your password here">
      </label>
      <div class="btn-wrapper">
        <input type="submit" value="Sign up">
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default {
  name: "signup",
  data(){
    return{
      username :"",
      email:"",
      password:"",
      userData: null
    } 
  },
  methods: {
    signUp(){
      fetch('https://conduit.productionready.io/api/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username:this.username,
            email:this.email,
            password:this.password
          }
        })
      }).then(res => res.json()).then(data => {
        if ( data.user ) {
          this.userData = data.user;
          localStorage.setItem('jwt', JSON.stringify(data.user.token));
          localStorage.setItem('user', JSON.stringify(data.user));
          this.$router.push({path: '/'})
        }
      })
    }
  }
}
</script>

<style>
  .form-wrapper {
    text-align: center;
    padding-top: 60px;
  }
  .form {
    display: grid;
    grid-gap: 20px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }
  input#userName, input#email, input#password {
    width: 100%;
    height: 40px;
    padding: 5px;
    outline: none;
    font-size: 16px;
  }
  .sign-in {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 1px;
  }
  .register p {
    color: #42b983;
    margin: 15px;
  }
  .register {
    text-decoration: none;
  }
  .register:hover {
    text-decoration: underline;
    text-decoration-color: #42b983;
  }
  .btn-wrapper {
    text-align: end;
  }
  .btn-wrapper input[type="submit"] {
    background: #42b983;
    border: none;
    height: 45px;
    width: 100px;
    border-radius: 2px;
    color: aliceblue;
    font-size: 16px;
    cursor: pointer;
  }
  .btn-wrapper input[type="submit"]:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
