<script setup lang="ts">
import NavHome from "./NavHome.vue";
//@ts-ignore
import Web from "vue-material-design-icons/Web.vue";
</script>

<template>
  <header>
    <a>
      <img alt="logo" src="@/assets/logo.png" />
    </a>
    <nav>
      <NavHome title="Inicio" link="#start" />
      <NavHome title="Soluções" link="#solutions" />
      <NavHome title="Parcerias" link="#partnerShips" />
      <!-- <NavHome title="Sobre a empresa" link="#about" /> -->
      <NavHome title="Contato" link="#contact" />
    </nav>

    <div class="country">
      <Web fillColor="gray" />
      <p>Brasil</p>
    </div>
  </header>
</template>

<style scoped>
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
  align-items: center;
  border-left: solid gray 0.2px;
  padding: 2rem 4rem;

  gap: 1rem;
}

p {
  color: gray;
}

@media (max-width: 800px) {
  .country {
    padding: 1rem;
  }
}
</style>
