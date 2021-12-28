<template>
    <div class="card">
        <img class="card__img" :src="product.img" alt="">
        <div class="card__wrapper">
            <h2 class="card__title">{{product.name}}</h2>
            <p class="card__description">{{product.description}}</p>
            <p class="card__price">{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['item'],
  setup(props) {
    return {
      product: props.item,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    background: #FFFEFB;

    &__wrapper {
        padding: 15px 15px 25px;
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
    }
}
</style>
