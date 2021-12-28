<template>
  <div class="home container">
    <ProductList/>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import ProductList from '@/components/ProductList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProductList,
  },
  setup() {
    const store = useStore();
    store.dispatch('getProducts');

    return {

    };
  },
});
</script>
