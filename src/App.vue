<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">About</router-link>
    <router-link to="/success">
      <button>Yes</button>
    </router-link>
    <div style="display: flex; flex-wrap: wrap">
      <router-link to="/mission">Mission</router-link>
      <router-link to="/mission1">Mission1</router-link>
      <router-link to="/mission2">Mission2</router-link>
      <router-link to="/questions">Questions</router-link>
      <router-link to="/correct">Correct</router-link>
      <router-link to="/wrong">Wrong</router-link>
      <router-link to="/pass">Pass</router-link>
      <router-link to="/exchange">Exchange</router-link>
    </div>
  </div> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // color: $red;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
