<script setup lang="ts">
//@ts-ignore
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
//@ts-ignore
import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
//@ts-ignore
import GithubIcon from "vue-material-design-icons/Github.vue";

{
  InstagramIcon;
  LinkedinIcon;
  GithubIcon;
}
</script>

<template>
  <div class="wrapper-main">
    <H2>Contato</H2>
    <diV class="address">
      <p>rafaelazevedo321@gmail.com</p>
      <p>rafael.azevedo@rssolutions.com.br</p>
      <p>Cel. (19) 99742-6983</p>
      <p>Rua Agostinho Rossi 131, Bela vista - Pedreira/SP</p>
    </diV>
    <h2>Redes Sociais</h2>
    <div class="social">
      <a
        href="https://www.instagram.com/rafael_azevedo_55/?hl=pt-br"
        target="blank"
      >
        <InstagramIcon :size="40" fillColor="gray" />
      </a>
      <a
        href="https://www.linkedin.com/in/rafael-azevedo-530889195/"
        target="blank"
      >
        <LinkedinIcon :size="40" fillColor="gray" />
      </a>
      <a href="https://github.com/RafaelBiatoAzevedo" target="blank">
        <GithubIcon :size="40" fillColor="gray" />
      </a>
    </div>
  </div>
</template>

<style scoped>
p {
  color: gray;
  font-size: 1.3rem;
  font-weight: bold;
}

.wrapper-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  height: 20rem;
  padding: 4rem;

  gap: 4rem;
}

.address {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-right: solid 0.5px gray;
  padding: 3rem 6rem;
}
.social {
  display: flex;
  flex: 1;
  padding: 3rem;

  gap: 1.5rem;
}

a {
  cursor: pointer;
  text-decoration: none;
}

h2 {
  font-size: 2rem;
  color: gray;
}

@media (max-width: 800px) {
  .wrapper-main {
    height: 20rem;
    padding: 1rem;

    gap: 1rem;
  }

  .social {
    padding: 1rem;
  }

  .address {
    padding: 3rem 2rem;
  }
}
</style>
