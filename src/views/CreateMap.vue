<script setup lang="ts">
import router from "@/router";
import type { TCoordinatesLot, TLot } from "@/main";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const goBack = () => {
  router.push("/");
};

const VALUE_AJUST_COORDINATE = 14;

type TModalCoordinate = {
  x: number;
  y: number;
};

const lots = ref<TLot[]>(store.getters.lots);
const coordinatesLots = ref<TCoordinatesLot[]>([
  ...store.getters.coordinatesLots,
]);
const lotsFiltereds = ref<TLot[]>(
  lots.value.filter(
    (lot) => !coordinatesLots.value.some((cLot) => cLot.lot._id === lot._id)
  )
);
const openModal = ref<boolean>(false);
const modalCoordinates = ref<TModalCoordinate>({
  x: 0,
  y: 0,
});

function refreshLotsFiltereds() {
  lotsFiltereds.value = lots.value.filter(
    (lot) => !coordinatesLots.value.some((cLot) => cLot.lot._id === lot._id)
  );
}

function saveData() {
  const dimensionsBase = {
    height: document.getElementById("wrapperPlant")?.clientHeight || 0,
    width: document.getElementById("wrapperPlant")?.clientWidth || 0,
  };

  store.dispatch("saveDimensionBase", { coordinatesLots, dimensionsBase });

  goBack();
}

function addPoint(e: any) {
  if (!openModal.value) {
    const x = e.clientX - VALUE_AJUST_COORDINATE;
    const y = e.clientY - VALUE_AJUST_COORDINATE;

    modalCoordinates.value = { x, y };
    openModal.value = true;
  }
}

function rejectPoint() {
  //setTimeout necessary to not conflict with click on the map.
  setTimeout(() => {
    openModal.value = false;
    modalCoordinates.value = { x: 0, y: 0 };
  }, 100);
}

function savePoint() {
  const selectElement = document.getElementById("selectLots");
  //@ts-ignore
  const value = selectElement.options[selectElement.selectedIndex].value;

  const lotFound = lots.value.find((lot: TLot) => lot._id === value);

  if (lotFound) {
    //setTimeout necessary to not conflict with click on the map.
    setTimeout(() => {
      const newCoordanates = {
        lot: lotFound,
        x: modalCoordinates.value.x,
        y: modalCoordinates.value.y,
      };

      coordinatesLots.value.push(newCoordanates);
      refreshLotsFiltereds();

      openModal.value = false;
    }, 100);
  } else {
    //Put warning SCAE alert here.
    console.log("Lot not found");
  }
}
</script>
<template>
  <div class="wrapper-main">
    <div class="wrapper-plant" id="wrapperPlant" @click="addPoint">
      <div v-if="openModal" class="modal">
        <label class="label-select">Selecione o lote</label>
        <select name="select-lots" id="selectLots">
          <option value="" class="option-select-lot">
            Por favor, selecione um lote
          </option>
          <option
            class="option-select-lot"
            v-for="lot in lotsFiltereds"
            v-bind:value="lot._id"
            :key="lot._id"
          >
            {{ lot.name }}
          </option>
        </select>
        <div class="wrapper-buttons-modal">
          <button class="error" @click="rejectPoint">Cancelar</button>
          <button class="success" @click="savePoint">Confirmar</button>
        </div>
      </div>
      <img src="@/assets/plantTest.png" alt="teste img" />
      <div
        v-for="(coord, index) in coordinatesLots"
        class="point-absolute"
        v-bind:style="{ left: `${coord.x}px`, top: `${coord.y}px` }"
        :key="index"
      >
        <p class="label-point">{{ coord.lot.tag }}</p>
      </div>
    </div>
    <div class="wrapper-buttons">
      <button class="error" @click="goBack">Voltar</button>
      <button class="success" @click="saveData">Salvar</button>
    </div>
  </div>
</template>
<style scoped>
.point-absolute {
  background-color: orange;
  position: absolute;
  border-radius: 100%;
  padding: 0.4rem 0.2rem;
}

.modal {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  padding: 1rem;
  position: absolute;

  gap: 1rem;
  z-index: 1000;
}

.wrapper-buttons-modal {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  gap: 2rem;
}

.label-select {
  font-size: 1.5rem;
}

select {
  width: 17rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 1rem;
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
