<template>
  <div class="form-wrapper">
    <h2 class="sign-in">Sign in</h2>
    <router-link to="/register" class="register">
      <p>Need an account?</p>
    </router-link>
    <form action="/login" method="POST" class="form">
      <label for="email">
        <input type="email" name="email" id="email" placeholder="Enter your email here">
      </label>
      <label for="password">
        <input type="password" name="password" id="password" placeholder="Enter your password here">
      </label>
      <div class="btn-wrapper">
        <button>Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "signin"
}
</script>

<style scoped>

</style>
