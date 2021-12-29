import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export default createStore({
  state: {
    products: null,
    filters: {
      default: {
        id: 1,
        title: 'По умолчанию',
      },
      name: {
        id: 2,
        title: 'По наименованию',
      },
      priceMin: {
        id: 3,
        title: 'По цене min',
      },
      priceMax: {
        id: 4,
        title: 'По цене max',
      },
    },
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
    sortProductList(state, id) {
      if (id === 1) {
        state.products = state.products
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      }
      if (id === 2) {
        state.products.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      if (id === 3) {
        state.products.sort((a, b) => a.price - b.price);
      }
      if (id === 4) {
        state.products.sort((a, b) => b.price - a.price);
      }
      return state.products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get(`${baseURL}api/products`);
      commit('saveProducts', response.data);
    },
  },
});
