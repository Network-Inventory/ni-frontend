<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
    <the-footer></the-footer>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
