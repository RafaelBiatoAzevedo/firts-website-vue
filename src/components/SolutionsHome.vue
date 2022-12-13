<script setup lang="ts">
import type { ISolutions } from "@/interfaces/ISolutions";

import CartSolution from "./CartSolution.vue";

const solutions: ISolutions[] = [
  {
    _id: "001",
    title: "Assessment de Segurança",
    description:
      "Visibilidade da infraestrutura da sua rede local em relação às melhores práticas de segurança",
    link: "xabalu",
  },

  {
    _id: "002",
    title: "Análise de Vulnerabilidade",
    description:
      "Saiba antecipadamente as vulnerabilidades que a aplicação web possui",
    link: "xabalu",
  },

  {
    _id: "003",
    title: "Pentest Profissional",
    description:
      "Visibilidade da real segurança do seu sistema mediante um ataque hacker",
    link: "xabalu",
  },

  {
    _id: "004",
    title: "Consultoria LGPD",
    description:
      "Solução que auxilia na adequação à Regulamentação no uso de dados pessoais, através do mapeamento, avaliação de riscos e planos de ação",
    link: "xabalu",
  },

  {
    _id: "005",
    title: "VPN Corporativa",
    description: "Acesso remoto seguro aos dados da empresa",
    link: "xabalu",
  },

  {
    _id: "006",
    title: "DNS Security",
    description: "Proteção contra ameaças da internet",
    link: "xabalu",
  },
];
</script>

<template>
  <div class="wrapper-main">
    <h2>Soluções</h2>
    <div class="wrapper-carts">
      <CartSolution
        v-for="solution in solutions"
        :key="solution._id"
        v-bind:title="solution.title"
        v-bind:description="solution.description"
        v-bind:link="solution.link"
        v-bind:_id="solution._id"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper-main {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  min-height: 50rem;
}

.wrapper-carts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  flex: 1;
  row-gap: 3rem;
  column-gap: 3rem;
  padding: 3rem;
  padding-top: 1rem;
}

h2 {
  color: gray;
  font-size: 3.5rem;
  padding: 2rem;
}

@media (max-width: 800px) {
  h2 {
    padding: 1rem;
  }
  .wrapper-carts {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    padding: 1.5rem;
  }
}
</style>
