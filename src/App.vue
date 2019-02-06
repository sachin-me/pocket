<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Pocket</router-link>
      </div>
      <div>
        <router-link to="/">Home</router-link> 
      </div>
    </div>
    <router-view />
  </div>
</template>

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

</style>
