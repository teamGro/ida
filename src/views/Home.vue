<template>
  <div class="home container">
    <FormAddProduct />
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import ProductList from '@/components/ProductList.vue';
import FormAddProduct from '@/components/FormAddProduct.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProductList,
    FormAddProduct,
  },
  setup() {
    const store = useStore();
    store.dispatch('getProducts');

    return {};
  },
});
</script>
