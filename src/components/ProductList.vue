<template>
    <ul class="products">
        <li class="products__item" v-for="product in products" :key="product.id">
            <ProductItem :item="product"/>
        </li>
    </ul>
</template>

<script>
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';
import ProductItem from './ProductItem.vue';

export default defineComponent({
  components: { ProductItem },
  setup() {
    const store = useStore();
    return {
      products: computed(() => store.state.products),
      ProductItem,
    };
  },
});
</script>

<style lang="scss" scoped>
.products {
  &__item:not(:last-child) {
  margin-bottom: 15px;
  }
}

@media (min-width: 1024px) {
  .products {
    display: flex;
    flex-wrap: wrap;
    //justify-content: space-between;
    // grid-template-columns: repeat(2, 1fr);
    // grid-auto-rows: auto;
    // grid-gap: 15px;

    &__item {
      cursor: pointer;
      width: calc(100% / 2 - 7.5px);
      margin-bottom: 15px;

      &:nth-child(2n) {
        margin-left: 15px;
      }
    }
  }
}

@media (min-width: 1280px) {
  .products {
    width: calc(100% - 345px);

    &__item {
      width: calc(100% / 3 - 10px);

      margin-right: 15px;

      &:nth-child(2n) {
        margin-left: 0;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>
