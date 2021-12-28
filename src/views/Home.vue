<template>
  <div class="main container">
    <FormAddProduct class="main__form"/>
    <ProductList class="main__products"/>
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

<style lang="scss" scoped>
@media (min-width: 1280px) {
  .main {
    display: flex;

    &__form {
      width: 330px;
      margin-right: 15px;
    }
  }
}
</style>
