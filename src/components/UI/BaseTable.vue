<template>
  <table>
    <slot name="default"></slot>
  </table>
</template>

<script>
export default {};
</script>

<style>
table,
th,
td {
  border-collapse: collapse;
  border: 1px solid black;
}
table {
  margin: 5px;
  width: 100%;
}
th {
  height: 70px;
}
th,
td {
  padding: 5px;
}
tr:hover {
  background-color: #f5f5f5;
}
</style>
