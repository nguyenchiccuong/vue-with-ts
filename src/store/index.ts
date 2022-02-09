import { createStore } from "vuex";

export default createStore({
  state: {
    username: "" as string,
  },
  mutations: {
    UPDATE_USERNAME(state, payload: string) {
      state.username = payload;
    },
  },
  actions: {
    updateUsername({ commit }, username: string) {
      commit("UPDATE_USERNAME", username);
    },
  },
  getters: {
    getUsername: (state) => state.username,
  },
  modules: {},
});
