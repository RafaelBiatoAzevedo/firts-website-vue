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
  lots: TLot[];
};

const store = createStore<TState>({
  state() {
    return {
      dimensionsBase: {
        width: 0,
        height: 0,
      },
      coordinatesLots: [],
      lots: [
        {
          _id: "lotScae1",
          name: "Lote 1 Scae",
          tag: "L-1",
          status: "available",
        },
        {
          _id: "lotScae2",
          name: "Lote 2 Scae",
          tag: "L-2",
          status: "available",
        },
        { _id: "lotScae3", name: "Lote 3 Scae", tag: "L-3", status: "sold" },
        { _id: "lotScae4", name: "Lote 4 Scae", tag: "L-4", status: "sold" },
        {
          _id: "lotScae5",
          name: "Lote 5 Scae",
          tag: "L-5",
          status: "reserved",
        },
        {
          _id: "lotScae6",
          name: "Lote 6 Scae",
          tag: "L-6",
          status: "reserved",
        },
        {
          _id: "mansionAzevedoSCAE",
          name: "Mansão Azevedo",
          tag: "M-A1",
          status: "reserved",
        },
      ],
    };
  },

  getters: {
    dimensionsBase: (state: { dimensionsBase: TDimensionsBase }) => {
      return state.dimensionsBase;
    },

    lots: (state: { lots: TLot[] }) => {
      return state.lots;
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
