<template>
  <div>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 80rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
</style>
