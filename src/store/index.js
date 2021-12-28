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
    deleteProduct(state, itemId) {
      const itemIndex = state.products.findIndex(({ id }) => id === itemId);
      state.products.splice(itemIndex, 1);
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get(`${baseURL}api/products`);
      commit('saveProducts', response.data);
    },
  },
});
