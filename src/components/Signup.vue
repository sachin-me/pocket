<template>
  <div class="form-wrapper">
    <h2 class="sign-in">Sign up</h2>
    <router-link to="/login" class="register">
      <p>Have an account?</p>
    </router-link>
    <form action="/register" method="POST" class="form">
      <label for="userName">
        <input type="text" placeholder="Enter your user name here" name="userName" id="userName">
      </label>
      <label for="email">
        <input type="email" name="email" id="email" placeholder="Enter your email here">
      </label>
      <label for="password">
        <input type="password" name="password" id="password" placeholder="Enter your password here">
      </label>
      <div class="btn-wrapper">
        <button>Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "signup"
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
  .btn-wrapper button {
    background: #42b983;
    border: none;
    height: 45px;
    width: 100px;
    border-radius: 2px;
    color: aliceblue;
    font-size: 16px;
    cursor: pointer;
  }
  .btn-wrapper button:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
