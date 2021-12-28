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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 15px;

    &__item {
      &:not(:last-child) {
        margin-bottom: 0;
        }
    }
  }
}
</style>
