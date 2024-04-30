import { createStore } from "vuex";

export default createStore({
  state: {
    isAdmin: false,
  },
  mutations: {
    setIsAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
  },
  actions: {
    // You can define actions here if needed
  },
  modules: {
    // You can define modules here if needed
  },
});
