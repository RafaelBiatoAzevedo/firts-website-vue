<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <a>{{ title }}</a>
</template>

<style scoped>
a {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: gray;
  padding: 2.5rem 0;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: #000;
  background-color: gray;

  transition: background-color 1000ms linear;
}
</style>
