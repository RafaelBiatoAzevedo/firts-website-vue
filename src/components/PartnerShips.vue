<script setup lang="ts"></script>

<template>
  <div class="wrapper-main">
    <H2>Nossos Parceiros</H2>
    <div class="wrapper-links">
      <a class="others-link" href="https://www.scae.adm.br" target="blank">
        <img alt="logo scae" src="@/assets/logoScae.png" />
      </a>
      <a
        class="link-top"
        href="https://portifoliorafaelazevedo.netlify.app/"
        target="blank"
      >
        <img
          class="azevedo-logo"
          alt="logo azevedo digital"
          src="@/assets/logoAzevedoDigital.png"
        />
      </a>
      <a class="others-link">
        <img alt="logo pileup" src="@/assets/logoPileup.png" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.wrapper-main {
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  height: 50rem;
  background-color: #444444;
  gap: 3rem;
}
.wrapper-links {
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  width: 45rem;
  height: 35rem;
}

h2 {
  color: #000;
  font-size: 3.5rem;
}

a {
  cursor: pointer;
  height: 14rem;
  width: 14rem;
  align-items: center;
  justify-content: center;
  display: flex;

  background-color: #181818;
  padding: 8px;
  border-radius: 100%;
}

.azevedo-logo {
  height: 8rem;
  width: 9rem;
  border-radius: 20%;
}

.others-link {
  align-self: flex-end;
}

.link-top {
  align-self: flex-start;
}

img {
  height: 12rem;
  width: 12rem;
  border-radius: 100%;
}
</style>
