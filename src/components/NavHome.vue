<script setup lang="ts">
defineProps<{ title: string; link: string }>();

const getEvent = (event: any) => {
  console.log(event.target.offsetTop);
};
</script>

<template>
  <a @click="getEvent" :href="link">{{ title }}</a>
</template>

<style scoped>
a {
  align-items: center;
  color: gray;
  border-bottom: 0.3rem solid #000;
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 2.5rem 0;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  border-bottom: 0.3rem solid gray;
}
</style>
