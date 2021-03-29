<template>
  <button :class="mode"><slot></slot></button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #0076bb;
  border: 1px solid #0076bb;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  border-color: #1a037e;
  background-color: #1a037e;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
