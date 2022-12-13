<script setup lang="ts">
import HeaderHome from "../components/HeaderHome.vue";
import StartHome from "../components/StartHome.vue";
import SolutionsHome from "../components/SolutionsHome.vue";
import PartnerShips from "../components/PartnerShips.vue";
import FooterHome from "../components/FooterHome.vue";
import ModalWhatsapp from "../components/ModalWhatsapp.vue";
</script>

<template>
  <div class="wrapper-home">
    <div class="top-menu">
      <HeaderHome />
    </div>
    <StartHome id="start" />
    <SolutionsHome id="solutions" />
    <PartnerShips id="partnerShips" />
    <FooterHome id="contact" />
    <div class="wrapper-fixed">
      <ModalWhatsapp />
    </div>
  </div>
</template>

<style scoped>
.wrapper-home {
  width: 100%;
}
.top-menu {
  position: fixed;
  width: 100%;
}

.wrapper-fixed {
  position: fixed;
  bottom: 30px;
  right: 80px;
}

@media (max-width: 1440px) {
  .wrapper-fixed {
    bottom: 25px;
    right: 70px;
  }
}

@media (max-width: 800px) {
  .wrapper-fixed {
    bottom: 20px;
    right: 60px;
  }
}

@media (max-width: 600px) {
  .wrapper-fixed {
    bottom: 20px;
    right: 50px;
  }
}
</style>
