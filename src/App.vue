<template>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheFooter,
  },
  data() {
    return {};
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
  margin-top: 60px;
}
</style>
