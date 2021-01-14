import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = {
  Game: {},
  Map: {},
  Update: {}
};

export const getters = {
  Game: currentState => {
    return currentState.Game;
  },
  Map: currentState => {
    return currentState.Map;
  },
  Update: currentState => {
    return currentState.Update;
  }
};

export const mutations = {
  loadGame(state, Game) {
    state.Game = Game;
  },
  loadMap(state, Map) {
    state.Map = Map;
  },
  updateGame(state, Update) {
    state.Update = Update;
  }
};

export const actions = {
  async getGame({ commit }) {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/game/json", {
      method: "GET",
      credentials: "same-origin"
    }).then(async function(response) {
      const game = await response.json();
      //console.log("Gamejson: ", game);
      commit("loadGame", game);
    })
  },
  async getMapCoordinates({ commit }) {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/game/mapcoordinates", {
      method: "GET",
      credentials: "same-origin"
    }).then(async function(response) {
      const map = await response.json();
      commit("loadMap", map)
    })
  },
  async updateGame({ commit }, { direction }) {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/game/" + direction.toString(), {
      method: "GET",
      credentials: "same-origin"
    }).then(async function (response) {
      const update = await response.json();
      commit("updateGame", update);
    })
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
