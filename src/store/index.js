import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export default createStore({
  state: {
    products: null,
  },
  getters: {},
  mutations: {
    saveProducts(state, products) {
      state.products = products;
    },
    updateProductList(state, product) {
      state.products.unshift(product);
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get(`${baseURL}api/products`);
      commit('saveProducts', response.data);
    },
  },
});
