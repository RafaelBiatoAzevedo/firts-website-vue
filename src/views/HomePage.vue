<script setup lang="ts">
import HeaderHome from "../components/HeaderHome.vue";
import StartHome from "../components/StartHome.vue";
import SolutionsHome from "../components/SolutionsHome.vue";
import PartnerShips from "../components/PartnerShips.vue";
import FooterHome from "../components/FooterHome.vue";
import ModalWhatsapp from "../components/ModalWhatsapp.vue";
</script>

<template>
  <div class="wrapper-main">
    <div class="top-menu">
      <HeaderHome />
    </div>
    <div id="start">
      <StartHome />
    </div>
    <div id="solutions">
      <SolutionsHome />
    </div>
    <div id="partnerShips">
      <PartnerShips />
    </div>
    <div id="contact">
      <FooterHome />
    </div>
    <div class="wrapper-fixed">
      <ModalWhatsapp />
    </div>
  </div>
</template>

<style scoped>
.top-menu {
  position: fixed;
  width: 100%;
}

.wrapper-fixed {
  position: fixed;
  bottom: 30px;
  right: 80px;
}
</style>
