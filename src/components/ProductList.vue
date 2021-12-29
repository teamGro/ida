<template>
  <ul class="products">
    <transition-group name="list">
      <li class="products__item" v-for="product in products" :key="product.id">
        <ProductItem :item="product" />
      </li>
    </transition-group>
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-300px);
  z-index: -1;

  @include breakpoint(md) {
    transform: translateY(300px);
  }
}

.products {
  @include breakpoint(md) {
    display: flex;
    flex-wrap: wrap;
  }

  @include breakpoint(lg) {
    width: 100%;
  }

  &__item {
    :not(:last-child) {
      margin-bottom: 15px;
    }

    @include breakpoint(md) {
      cursor: pointer;
      width: calc(100% / 2 - 7.5px);
      margin-bottom: 15px;

      &:nth-child(2n) {
        margin-left: 15px;
      }
    }

    @include breakpoint(lg) {
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
