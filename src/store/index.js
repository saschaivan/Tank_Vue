import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = {
  Game: {}
};

export const getters = {
  Game: currentState => {
    return currentState.Game;
  }
};

export const mutations = {
  loadGame(state, Game) {
    state.Game = Game;
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
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
