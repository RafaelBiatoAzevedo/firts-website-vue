import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import type { ICommit } from "./interfaces/ICommit";

export type TLot = {
  _id: string;
  name: string;
  tag: string;
  status: "available" | "sold" | "reserved";
};

export type TBlock = {
  _id: string;
  name: string;
  tag: string;
  lots: TLot[];
};

export type TDimensionsBase = {
  width: number;
  height: number;
};

export type TCoordinatesLot = {
  lot: TLot;
  x: number;
  y: number;
};

type TState = {
  dimensionsBase: TDimensionsBase;
  coordinatesLots: TCoordinatesLot[];
  blocks: TBlock[];
};

const store = createStore<TState>({
  state() {
    return {
      dimensionsBase: {
        width: 0,
        height: 0,
      },
      coordinatesLots: [],
      blocks: [
        {
          _id: "blockScae01",
          name: "Quadra 01",
          tag: "Q-01",
          lots: [
            {
              _id: "block01lotScae1",
              name: "Lote 1 Scae",
              tag: "L-1",
              status: "available",
            },
            {
              _id: "block01lotScae2",
              name: "Lote 2 Scae",
              tag: "L-2",
              status: "available",
            },
            {
              _id: "block01lotScae3",
              name: "Lote 3 Scae",
              tag: "L-3",
              status: "sold",
            },
            {
              _id: "block01lotScae4",
              name: "Lote 4 Scae",
              tag: "L-4",
              status: "sold",
            },
            {
              _id: "block01lotScae5",
              name: "Lote 5 Scae",
              tag: "L-5",
              status: "reserved",
            },
            {
              _id: "block01lotScae6",
              name: "Lote 6 Scae",
              tag: "L-6",
              status: "reserved",
            },
          ] as TLot[],
        },
        {
          _id: "blockScae02",
          name: "Quadra 02",
          tag: "Q-02",
          lots: [
            {
              _id: "block02lotScae1",
              name: "Lote 1 Scae",
              tag: "L-1",
              status: "available",
            },
            {
              _id: "block02lotScae2",
              name: "Lote 2 Scae",
              tag: "L-2",
              status: "available",
            },
            {
              _id: "block02lotScae3",
              name: "Lote 3 Scae",
              tag: "L-3",
              status: "sold",
            },
            {
              _id: "block02lotScae4",
              name: "Lote 4 Scae",
              tag: "L-4",
              status: "sold",
            },
            {
              _id: "block02lotScae5",
              name: "Lote 5 Scae",
              tag: "L-5",
              status: "reserved",
            },
            {
              _id: "block02lotScae6",
              name: "Lote 6 Scae",
              tag: "L-6",
              status: "reserved",
            },
          ] as TLot[],
        },
      ],
    };
  },

  getters: {
    dimensionsBase: (state: { dimensionsBase: TDimensionsBase }) => {
      return state.dimensionsBase;
    },

    blocks: (state: { blocks: TBlock[] }) => {
      return state.blocks;
    },

    coordinatesLots: (state: { coordinatesLots: TCoordinatesLot[] }) => {
      return state.coordinatesLots;
    },
  },

  mutations: {
    saveDimensions(
      state: {
        dimensionsBase: TDimensionsBase;
        coordinatesLots: TCoordinatesLot[];
      },
      data
    ) {
      state.coordinatesLots = data.coordinatesLots;
      state.dimensionsBase = data.dimensionsBase;
    },
  },

  actions: {
    saveDimensionBase(
      { commit }: { commit: ICommit },
      data: {
        dimensionsBase: TDimensionsBase;
        coordinatesLots: TCoordinatesLot;
      }
    ) {
      commit("saveDimensions", data);
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
