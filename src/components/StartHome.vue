<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="title-top">
      <h2>Azevedo Cyber Security</h2>
      <p>Cuidamos dos seus dados como se fosse nosso.</p>
    </div>

    <routerLink to="/create-map">
      <button>Cadastrar</button>
    </routerLink>
    <routerLink to="/view-map">
      <button>Visualizar</button>
    </routerLink>
  </div>
</template>

<style scoped>
h2 {
  color: #fff;
  border: none;
  font-size: 3.5rem;
  font-weight: bold;
}

button {
  border: none;
  color: gray;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 100px;
  padding: 1rem 4rem;
}

button:hover {
  background-color: #000;
  color: #fff;
  transition: background-color 500ms linear;
}

.main {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("@/assets/background-cyber-security.jpg.jpg");
  background-size: cover;
  height: 60rem;
  padding: 4rem;
  padding-top: 9rem;
}

.title-top {
  color: gray;
  border: none;
  font-size: 2rem;
  font-weight: bold;
}
</style>
