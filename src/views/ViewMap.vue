<script setup lang="ts">
import type { TCoordinatesLot, TLot } from "@/main";
import router from "@/router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const STATUS = [
  {
    name: "available",
    translate: "Disponível",
    color: "#36962e",
  },
  { name: "sold", translate: "Vendido", color: "#fb6340" },
  { name: "reserved", translate: "Reservado", color: "#d7191c" },
];

const goBack = () => {
  router.push("/");
};

const coordinatesLots = ref<TCoordinatesLot[]>(store.getters.coordinatesLots);

const dimensionsBase = ref(store.getters.dimensionsBase);

onMounted(() => {
  const dimensionsBaseLoad = {
    height: document.getElementById("wrapperPlant")?.clientHeight || 0,
    width: document.getElementById("wrapperPlant")?.clientWidth || 0,
  };

  console.log("antes", dimensionsBase);
  console.log("depois", dimensionsBaseLoad);

  if (dimensionsBaseLoad.height > dimensionsBase.value.height) {
    coordinatesLots.value = coordinatesLots.value.map((coord) => ({
      ...coord,
      y:
        coord.y + (dimensionsBaseLoad.height - dimensionsBase.value.height) / 2,
    }));
  }

  if (dimensionsBaseLoad.height < dimensionsBase.value.height) {
    coordinatesLots.value = coordinatesLots.value.map((coord) => ({
      ...coord,
      y:
        coord.y - (dimensionsBase.value.height - dimensionsBaseLoad.height) / 2,
    }));
  }

  if (dimensionsBaseLoad.width > dimensionsBase.value.width) {
    coordinatesLots.value = coordinatesLots.value.map((coord) => ({
      ...coord,
      x: coord.x + (dimensionsBaseLoad.width - dimensionsBase.value.width) / 2,
    }));
  }

  if (dimensionsBaseLoad.width < dimensionsBase.value.width) {
    coordinatesLots.value = coordinatesLots.value.map((coord) => ({
      ...coord,
      x: coord.x - (dimensionsBase.value.width - dimensionsBaseLoad.width) / 2,
    }));
  }
});

function navigateFor(lot: TLot) {
  // navigate for data lot or page lot
  console.log(lot);
}
</script>
<template>
  <div class="wrapper-main">
    <div class="wrapper-plant" id="wrapperPlant">
      <div class="legend">
        <h3>LEGENDA</h3>
        <div
          v-for="status in STATUS"
          v-bind:key="status.name"
          class="status-line"
        >
          <div
            class="status-color"
            v-bind:style="{ backgroundColor: status.color }"
          ></div>
          <p class="status-label">
            {{ status.translate }}
          </p>
        </div>
      </div>
      <img src="@/assets/plantTest.png" alt="teste img" />
      <button
        v-for="(coord, index) in coordinatesLots"
        class="point-absolute"
        v-bind:style="{
          left: `${coord.x}px`,
          top: `${coord.y}px`,
          backgroundColor: STATUS.find(
            (status) => status.name === coord.lot.status
          )?.color,
        }"
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
.legend {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border: solid 1px gray;
  border-radius: 6px;
  position: absolute;

  gap: 1.5rem;

  top: 10px;
  left: 10px;
}
h3 {
  align-self: center;
  color: gray;
  font-weight: bold;
}

.status-line {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.status-color {
  border-radius: 20px;
  width: 1.6rem;
  height: 1.6rem;
}

.status-label {
  font-size: 1.2rem;
  color: gray;
}
.point-absolute {
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
  color: black;
}
</style>
