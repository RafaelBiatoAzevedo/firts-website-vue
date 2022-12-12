<script setup lang="ts">
//@ts-ignore
import WhatsappIcon from "vue-material-design-icons/Whatsapp.vue";

{
  WhatsappIcon;
}
</script>

<template>
  <a href="https://wa.me/19997426983" target="blank">
    <div class="wrapper-main">
      <div class="wrapper-message">
        <p>Ficou com alguma dúvida ?</p>
        <p>Fale com gente</p>
      </div>
      <div class="wrapper-icon">
        <WhatsappIcon :size="40" fillColor="#ffffff" />
      </div>
    </div>
  </a>
</template>

<style scoped>
.wrapper-main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.wrapper-message {
  border-radius: 4px;
  flex-direction: column;
  background-color: #fff;
  padding: 0.6rem 2rem 0.6rem 1rem;

  gap: 5px;
}

p {
  font-weight: 500;
}

.wrapper-icon {
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: #25d366;
  border-radius: 100%;

  width: 5rem;
  height: 5rem;
  right: -50px;
}

a {
  text-decoration: none;
}
</style>
