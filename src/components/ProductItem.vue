<template>
  <div class="card">
    <button class="card__delete" @click="deleteCard">
      <img class="card__delete-btn" :src="deleteIcon" alt="" />
    </button>

    <img class="card__img" :src="product.img" alt="" />
    <div class="card__wrapper">
      <h2 class="card__title">{{ product.name }}</h2>
      <p class="card__description">{{ product.description }}</p>
      <p class="card__price">{{ formatPrice(product.price) }} руб.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import deleteIcon from '@/assets/deleteIcon.png';

export default defineComponent({
  props: ['item'],
  setup(props) {
    const store = useStore();

    async function deleteCard() {
      try {
        const response = await axios.delete(`http://localhost:3000/api/products/${props.item.id}`);
        console.log(response);
        store.commit('deleteProduct', props.item.id);
      } catch (error) {
        console.log(error);
      }
    }

    function formatPrice(price) {
      return Intl.NumberFormat().format(price);
    }

    return {
      product: props.item,
      deleteIcon,
      deleteCard,
      formatPrice,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  background: #fffefb;

  @include breakpoint(md) {
    height: 100%;

    &:hover .card__delete {
      opacity: 1;
    }
  }

  &__delete {
    position: absolute;
    top: -8px;
    right: -8px;

    width: 32px;
    height: 32px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    background: #ff8484;

    @include breakpoint(md) {
      opacity: 0;
      cursor: pointer;
      transition: opacity $ease;
    }
  }

  &__delete-btn {
    width: 16px;
    height: 16px;
  }

  &__wrapper {
    padding: 15px 15px 25px;

    @include breakpoint(md) {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  &__title {
    margin-bottom: 15px;

    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  &__description {
    margin-bottom: 30px;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;

    @include breakpoint(md) {
      margin-top: auto;
    }
  }
}
</style>
