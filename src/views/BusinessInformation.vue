<script setup lang="ts">
import router from "@/router";
//@ts-ignore
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";

const goBack = () => {
  router.push("/");
};
</script>
<template>
  <diV class="wrapper-main">
    <button @click="goBack">
      <ArrowLeft size="25" fillColor="#000" /> Voltar
    </button>
    <div class="wrapper-information">
      <h2>Nossa magia</h2>

      <p>
        Cibersegurança é a prática proteger ativos de informação tais sistemas,
        computadores e servidores entre outros contra ameaças cibernéticas ou
        ataques maliciosos. A segurança cibernética deve ser trabalhada em
        vários níveis desde a segurança das redes físicas e dos aplicativos até
        a educação do usuário final Segundo levantamento da empresa de segurança
        cibernética Fortinet, em 2020 o Brasil sofreu mais de 8,4 bilhões de
        tentativas e ameaças de ataques cibernéticos. O número impressiona e
        representa mais de 20% dos casos registrados em toda a América Latina,
        que somaram 41 bilhões. Se antes da pandemia de Covid-19 já vivíamos em
        um mundo conectado, o salto digital entre 2020 e 2021 acelerou todas as
        estimativas sobre a produção e troca de dados cibernéticos. O home
        office e outras práticas de trabalho a distância, como espaços
        colaborativos e compartilhados, vieram para ficar e empresas de todo o
        planeta já manifestaram intenção de de incorporar novos modelos de
        atendimento e de manter seus colaboradores trabalhando, pelo menos
        parcialmente, de casa. Por outro lado, também cresceram vertiginosamente
        os crimes e as ameaças virtuais. Os hackers se aproveitam das
        vulnerabilidades de nossos dispositivos eletrônicos e das redes que
        utilizamos para realizar ataques que podem gerar prejuízos
        incalculáveis.
      </p>
    </div>
  </diV>
</template>
<style scoped>
.wrapper-main {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #141414;
  padding: 3rem;
  min-height: 100vh;
}
.wrapper-information {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;
  width: 80%;
}

p,
h2 {
  color: gray;
  font-size: 2rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.4rem;
  line-height: 1.5;
}

button {
  align-items: center;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  border: solid gray 1px;
  border-radius: 100px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 0;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
}

button:hover {
  background-color: #fff;
  transition: background-color 500ms linear;
}
</style>
