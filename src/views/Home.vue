<template>
  <div class="main container">
    <FormAddProduct class="main__form" />
    <div class="wrapper">
      <SortList v-model:isLoading="isLoading"/>
      <ProductList class="main__products" v-model:isLoading="isLoading"/>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
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
    const isLoading = ref(true);

    store.dispatch('getProducts');

    setTimeout(() => {
      isLoading.value = false;
    }, 3000);

    watch(isLoading, (val) => {
      if (val) {
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      }
    });

    return {
      isLoading,
    };
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
