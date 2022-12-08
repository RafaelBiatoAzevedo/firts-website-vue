<script></script>

<template>
  <div class="wrapper-main">
    <div class="wrapper-message">
      <p>Ficou com alguma dúvida ?</p>
      <p>Fale com gente</p>
    </div>
    <div class="wrapper-icon"></div>
  </div>
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
  position: absolute;
  background-color: #25d366;
  border-radius: 100%;

  width: 5rem;
  height: 5rem;
  right: -50px;
}
</style>
