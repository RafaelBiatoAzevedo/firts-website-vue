<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  link: string;
}>();
</script>

<template>
  <div class="cart">
    <h2>{{ title }}</h2>
    <p>
      {{ description }}
    </p>
    <a href="link">Conhecer</a>
  </div>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid gray 2px;
  border-radius: 6px;
  padding: 2rem;
}

div > h2,
p,
a {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  color: gray;
  padding: 1rem;
}

p {
  flex: 1;
  font-size: 1.2rem;
}

h2 {
  align-self: center;
  font-size: 1.8rem;
}

a {
  text-decoration: none;
  background-color: gray;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  flex: 0.2;
  padding: 0.5rem 2rem;
  border-radius: 100px;
  color: #000;
  align-self: flex-start;
}

a:hover {
  background-color: #fff;
  transition: background-color 500ms linear;
}
</style>
