<script setup lang="ts">
import HeaderHome from "../components/HeaderHome.vue";
import StartHome from "../components/StartHome.vue";
import FooterHome from "../components/FooterHome.vue";
import ModalWhatsapp from "../components/ModalWhatsapp.vue";
</script>

<template>
  <div class="wrapper-main">
    <HeaderHome />
    <StartHome />
    <FooterHome />
    <div class="wrapper-fixed">
      <ModalWhatsapp />
    </div>
  </div>
</template>

<style scoped>
.wrapper-fixed {
  position: fixed;
  bottom: 30px;
  right: 80px;
}
</style>
