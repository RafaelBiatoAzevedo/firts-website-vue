<script setup lang="ts">
import NavHome from "./NavHome.vue";
</script>

<template>
  <header>
    <a>
      <img alt="logo" src="@/assets/logo.png" />
    </a>
    <nav>
      <NavHome title="Inicio" />
      <NavHome title="Soluções" />
      <NavHome title="Parcerias" />
      <NavHome title="Sobre a empresa" />
      <NavHome title="Contato" />
    </nav>

    <div class="country">
      <p>Brasil</p>
    </div>
  </header>
</template>

<style>
nav {
  display: flex;
  flex-direction: row;
  flex: 1;
}

header {
  display: flex;
  align-items: center;
  background-color: #000;
}

img {
  height: 6rem;
  padding: 1rem 4rem;
}

.country {
  display: flex;
}

p {
  color: gray;
  padding: 2rem 4rem;
  border-left: solid gray 0.2px;
}
</style>
