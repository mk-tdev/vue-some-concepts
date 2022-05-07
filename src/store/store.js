import { createStore } from "vuex";
import todos from "./todo";

// Create a new store instance.
const store = createStore({
  modules: {
    todos,
  },
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
