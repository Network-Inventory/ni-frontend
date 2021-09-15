<template>
  <router-link><slot></slot></router-link>
</template>

<style scoped>
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #0076bb;
  border: 1px solid #0076bb;
  color: white;
  cursor: pointer;
}

a:hover,
a:active {
  border-color: #1a037e;
  background-color: #1a037e;
}
</style>
