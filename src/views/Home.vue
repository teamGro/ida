<template>
  <div class="main container">
    <FormAddProduct class="main__form" />
    <div class="wrapper">
      <SortList />
      <ProductList class="main__products" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import ProductList from '@/components/ProductList.vue';
import FormAddProduct from '@/components/FormAddProduct.vue';
import SortList from '@/components/SortList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProductList,
    FormAddProduct,
    SortList,
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

  .wrapper {
    width: calc(100% - 345px);
  }
}
</style>
