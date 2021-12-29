<template>
  <ul class="sort">
    <li
      class="sort__item sort__item--main"
      @click="toggleFilters"
      :class="{ 'sort__item--main-shown': isOpen }"
    >
      {{ activeFilter }}
    </li>
    <li
      class="sort__item"
      :class="[
        { 'sort__item--shown': isOpen },
        { 'sort__item--disabled': item.title === activeFilter },
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px;

  &__item {
    opacity: 0;

    transition: opacity 0.5s ease;
    cursor: pointer;

    width: 145px;
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

      &::after {
        content: "";
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-70%) rotate(-45deg);

        width: 4.59px;
        height: 4.59px;
        border-left: 1px solid #b4b4b4;
        border-bottom: 1px solid #b4b4b4;
        transition: transform $ease;
      }
    }

    &--main-shown {
      &::after {
        transform: translateY(-100%) rotate(-225deg);
      }
    }

    &--shown {
      opacity: 1;
      z-index: 5;
      transition: border $linear;

      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    &--disabled {
      display: none;
    }
  }
}
</style>
