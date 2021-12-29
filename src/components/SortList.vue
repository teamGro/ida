<template>
  <ul class="sort">
    <li class="sort__item sort__item--main" @click="toggleFilters">
      {{ activeFilter }}
    </li>
    <li
      class="sort__item"
      :class="[
        { 'sort__item--shown': isOpen },
        { 'sort__item--disabled': item === activeFilter },
      ]"
      v-for="item in filters"
      :key="item.id"
      @click="setActiveFilter(item)"
    >
      <SortItem :type="item.title" />
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import SortItem from './SortItem.vue';

export default defineComponent({
  components: { SortItem },
  setup() {
    const store = useStore();
    const isOpen = ref(false);
    const activeFilter = ref('По умолчанию');

    function toggleFilters() {
      isOpen.value = !isOpen.value;
    }

    function setActiveFilter(filter) {
      activeFilter.value = filter.title;
      isOpen.value = !isOpen.value;
      store.commit('sortProductList', filter.id);
    }

    return {
      filters: computed(() => store.state.filters),
      activeFilter,
      isOpen,
      toggleFilters,
      setActiveFilter,
    };
  },
});
</script>

<style lang="scss">
.sort {
  position: relative;

  height: 36px;
  //overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px;

  &__item {
    opacity: 0;
    z-index: 5;
    transition: opacity 0.5s ease;

    width: 130px;
    padding: 10px 16px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;

    background: #fffefb;

    &--main {
      z-index: 10;
      opacity: 1;
    }

    &--shown {
      opacity: 1;
    }

    &--disabled {
      display: none;
    }
  }
}
</style>
