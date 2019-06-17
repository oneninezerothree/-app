import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0,
    count: 1,
    car : [],
  },
  mutations: {
    increment(state, data) {
      state.count = data;
    },
    add: (state) => state.number++,
    addgoods(state, data) {
      // state.goodsList.push(data);
    },
  },
  actions: {

  },
});
