<template>
  <nav class="app">
    <router-link to="/">Log in</router-link> |
    <router-link to="/about">Sign up</router-link> |
    <router-link to="/latest">Latest</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/friends">Friends</router-link> |
    

  </nav>
  <router-view/>

</template>

<script>

</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}



nav {
  padding: 20px;
  background-color: #000;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

}

nav a.router-link-exact-active {
  color: #fff;

}
</style>
