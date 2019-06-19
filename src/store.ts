import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0,
    count: 1,
    goodsList: localStorage.goodsList ? JSON.parse(localStorage.goodsList) : [],
  },

  mutations: {
    increment(state, data) {
      state.count = data;
    },
    addshop(state, goodsinfo) {
      let flag = true;
      state.goodsList.map((item) => {
        if (item.id == goodsinfo.arr.id) {
          flag = false;
          return true;
        }
      });
      if (flag) {
        goodsinfo.arr.img = goodsinfo.img;
        goodsinfo.arr.count = goodsinfo.count;
        goodsinfo.arr.selected = goodsinfo.selected;
        state.goodsList.push(goodsinfo.arr);
        console.log(goodsinfo.arr);

      }
      // 当 shopcar 更新之后，把 shopcar 数组，存储到本地的 localStorage中
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },

    updataCar(state, goodsinfo) {
      // 修改购物车中商品的数量值
      state.goodsList.some((item) => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      });
      // 当修改完商品的数量，把最新的购物车数据保存到 本地存储中
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    removeFormCar(state, id) {
      // 根据id从store中的购物车中删除对应的那条数据
      state.goodsList.forEach((item, i) => {
        if (item.id == id) {
          state.goodsList.splice(i, 1);
          return true;
        }
      });

      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    updataGoodsSelected(state, info) {
      state.goodsList.forEach((item) => {
        if (item.id == info.id) {
          item.selected = info.selected;
          return true;
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
  },

  getters: {
    goddsNumber: (state) => {
      return state.goodsList.length;
    },
  },
  actions: {

  },
});
