<template>
  <div class="form">
    <h2 class="form__title">Добавление товара</h2>
    <form class="form__wrapper" action="">
      <form-input
        :title="fieldsTitle.name"
        :isRequired="true"
        :placeholder="fieldsPlaceholder.name"
        v-model:fieldValue="productValues.name"
      >
      </form-input>

      <form-textarea
        :title="fieldsTitle.description"
        :placeholder="fieldsPlaceholder.description"
        v-model:fieldValue="productValues.description"
      >
      </form-textarea>

      <form-input
        :title="fieldsTitle.img"
        :isRequired="true"
        :placeholder="fieldsPlaceholder.img"
        v-model:fieldValue="productValues.img"
      >
      </form-input>

      <form-input
        :title="fieldsTitle.price"
        :isRequired="true"
        :placeholder="fieldsPlaceholder.price"
        v-model:fieldValue="productValues.price"
      >
      </form-input>

      <button class="form__btn">Добавить товар</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import FormInput from './FormInput.vue';
import FormTextarea from './FormTextarea.vue';

export default defineComponent({
  components: { FormInput, FormTextarea },
  setup() {
    const productValues = reactive({
      name: '',
      description: '',
      img: '',
      price: '',
    });

    return {
      FormInput,
      fieldsTitle: {
        name: 'Наименование товара',
        description: 'Описание товара',
        img: 'Ссылка на изображение товара',
        price: 'Цена товара',
      },
      fieldsPlaceholder: {
        name: 'Введите наименование товара',
        description: 'Введите описание товара',
        img: 'Введите ссылку',
        price: 'Введите цену',
      },
      productValues,
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 30px;

  &__title {
    margin-bottom: 15px;

    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    background-color: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }

  &__btn {
    border-radius: 10px;
    padding: 10px 95px;
    //max-width: 284px;

    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #b4b4b4;

    background-color: #eeeeee;
  }
}
</style>
