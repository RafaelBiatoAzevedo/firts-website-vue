<script setup lang="ts">
import type { TCoordinatesLot, TLot } from "@/main";
import router from "@/router";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const goBack = () => {
  router.push("/");
};

const coordinatesLots = ref<TCoordinatesLot[]>(store.getters.coordinatesLots);

const dimensionsBase = ref(store.getters.dimensionsBase);

function navigateFor(lot: TLot) {
  // navigate for data lot or page lot
  console.log(lot);
}
</script>
<template>
  <div class="wrapper-main">
    <div class="wrapper-plant" id="wrapperPlant">
      <img src="@/assets/plantTest.png" alt="teste img" />
      <button
        v-for="(coord, index) in coordinatesLots"
        class="point-absolute"
        v-bind:style="{ left: `${coord.x}px`, top: `${coord.y}px` }"
        :key="index"
        @click="() => navigateFor(coord.lot)"
      >
        <p class="label-point">{{ coord.lot.tag }}</p>
      </button>
    </div>
    <div class="wrapper-buttons">
      <button class="error classic-button" @click="goBack">Voltar</button>
    </div>
  </div>
</template>
<style scoped>
.point-absolute {
  background-color: orange;
  position: absolute;
  border-radius: 100%;
  padding: 0.4rem 0.2rem;
  cursor: pointer;
  border: none;
}
.wrapper-buttons {
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 3rem;
  padding: 3rem;
}

.wrapper-plant {
  background-color: #141414;
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  position: relative;
}
.wrapper-main {
  width: 100vw;
  height: 100vh;
  background-color: #141414;
}

.classic-button {
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
  padding: 1rem;
  gap: 0.5rem;
  min-width: 140px;
}

.error {
  background-color: #d7191c;
  color: white;
}

.success {
  background-color: #36962e;
  color: white;
}

.label-point {
  font-size: 1rem;
  font-weight: bold;
  color: gray;
}
</style>
