<script setup lang="ts">
import router from "@/router";
import type { TBlock, TCoordinatesLot, TDimensionsBase, TLot } from "@/main";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const goBack = () => {
  router.push("/");
};

const VALUE_AJUST_COORDINATE = 14;
const VALUE_AJUST_POINTER_MODAL_WIDTH = 155;
const VALUE_AJUST_POINTER_MODAL_HEIGHT = 30;

const STATUS = [
  {
    name: "available",
    translate: "Disponível",
    color: "#36962e",
  },
  { name: "sold", translate: "Vendido", color: "#fb6340" },
  { name: "reserved", translate: "Reservado", color: "#d7191c" },
];

type TModalCoordinate = {
  x: number;
  y: number;
};

const blocks = ref<TBlock[]>(store.getters.blocks);
const dimensionsBase = ref<TDimensionsBase>(store.getters.dimensionsBase);
const coordinatesLots = ref<TCoordinatesLot[]>([
  ...store.getters.coordinatesLots,
]);

const blockSelected = ref<TBlock | undefined>(undefined);

const lotsFiltereds = ref<TLot[] | undefined>(undefined);

const openModal = ref<boolean>(false);
const modalCoordinates = ref<TModalCoordinate>({
  x: 0,
  y: 0,
});

function refreshLotsFiltereds() {
  lotsFiltereds.value = blockSelected.value?.lots.filter(
    (lot) => !coordinatesLots.value.some((cLot) => cLot.lot._id === lot._id)
  );
}

function handleSelectBlock(e: any) {
  const blockId = e.target.value;

  blockSelected.value = blocks.value.find(
    (block: TBlock) => block._id == blockId
  );

  refreshLotsFiltereds();
}

function saveData() {
  const dimensionsBase = {
    height: document.getElementById("wrapperPlant")?.clientHeight || 0,
    width: document.getElementById("wrapperPlant")?.clientWidth || 0,
  };

  store.dispatch("saveDimensionBase", { coordinatesLots, dimensionsBase });

  goBack();
}

function removePoint(lot: TLot) {
  openModal.value = false;
  coordinatesLots.value = coordinatesLots.value.filter(
    (lotC) => lotC.lot._id !== lot._id
  );
  blockSelected.value = undefined;
  refreshLotsFiltereds();
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
    blockSelected.value = undefined;
  }, 100);
}

function savePoint() {
  const selectElement = document.getElementById("selectLots");
  //@ts-ignore
  const value = selectElement.options[selectElement.selectedIndex].value;

  if (blockSelected.value) {
    const lotFound = blockSelected.value.lots.find(
      (lot: TLot) => lot._id === value
    );

    if (lotFound) {
      //setTimeout necessary to not conflict with click on the map.
      setTimeout(() => {
        const newCoordanates = {
          lot: lotFound,
          x: modalCoordinates.value.x,
          y: modalCoordinates.value.y,
        };

        coordinatesLots.value.push(newCoordanates);
        blockSelected.value = undefined;

        refreshLotsFiltereds();

        openModal.value = false;
      }, 100);
    } else {
      //Put warning SCAE alert here.
      console.log("Lot not found");
    }
  }
}

onMounted(() => {
  const dimensionsBaseLoad = {
    height: document.getElementById("wrapperPlant")?.clientHeight || 0,
    width: document.getElementById("wrapperPlant")?.clientWidth || 0,
  };

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
</script>
<template>
  <div class="wrapper-main">
    <div class="wrapper-plant" id="wrapperPlant" @click="addPoint">
      <div
        v-if="openModal"
        class="modal"
        id="selectModal"
        v-bind:style="{
          left: `${modalCoordinates.x - VALUE_AJUST_POINTER_MODAL_WIDTH}px`,
          top: `${modalCoordinates.y + VALUE_AJUST_POINTER_MODAL_HEIGHT}px`,
        }"
      >
        <h3 class="label-select">Selecione o lote</h3>
        <select
          name="select-block"
          id="selectBlock"
          @change="handleSelectBlock"
        >
          <option value="" class="option-select-block">
            Por favor, selecione uma quadra
          </option>
          <option
            class="option-select-block"
            v-for="block in blocks"
            v-bind:value="block._id"
            :key="block._id"
          >
            {{ block.name }}
          </option>
        </select>
        <select
          v-if="blockSelected !== undefined"
          name="select-lots"
          id="selectLots"
        >
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
          <button class="error classic-button" @click="rejectPoint">
            Cancelar
          </button>
          <button class="success classic-button" @click="savePoint">
            Confirmar
          </button>
        </div>
      </div>
      <img src="@/assets/mapLots.jpeg" alt="teste img" />
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
        @click="() => removePoint(coord.lot)"
      >
        <p class="label-point">{{ coord.lot.tag }}</p>
      </button>
    </div>
    <div class="wrapper-buttons">
      <button class="error classic-button" @click="goBack">Voltar</button>
      <button class="success classic-button" @click="saveData">Salvar</button>
    </div>
  </div>
</template>
<style scoped>
.point-absolute {
  position: absolute;
  border-radius: 100%;
  padding: 0.4rem 0.2rem;
  cursor: pointer;
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

.modal::after {
  content: "";
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  background-color: white;
  top: -0.4rem;
  transform: rotate(45deg);
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
  width: 22rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 1.2rem;
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
  height: 80%;
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
