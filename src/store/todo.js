export default {
  namespaced: true,
  state() {
    return {
      todos: [],
      isItTooMany: false,
    };
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos = [...state.todos, todo];
    },
    updateTooMany(state) {
      state.isItTooMany = state.todos.length > 5;
    },
  },
  actions: {
    setTodos({ commit }, todos) {
      commit("setTodos", todos);
    },
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
    updateTooMany({ commit }) {
      commit("updateTooMany");
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    isItTooMany(state) {
      return state.isItTooMany;
    },
  },
};
