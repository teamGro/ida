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
