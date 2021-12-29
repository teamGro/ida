<template>
  <div class="form">
    <h2 class="form__title">Добавление товара</h2>
    <form class="form__wrapper" action="">
      <form-input
        :title="fieldsTitle.name"
        :isRequired="true"
        :placeholder="fieldsPlaceholder.name"
        v-model:fieldValue="productValues.name"
        v-model:error="formError.name"
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
        v-model:error="formError.img"
      >
      </form-input>

      <form-input
        :title="fieldsTitle.price"
        :isRequired="true"
        :placeholder="fieldsPlaceholder.price"
        v-model:fieldValue="productValues.price"
        v-model:error="formError.price"
        type="currency"
      >
      </form-input>

      <button class="form__btn" @click.prevent="saveProduct">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex';
import { defineComponent, reactive } from 'vue';
import FormInput from './FormInput.vue';
import FormTextarea from './FormTextarea.vue';

export default defineComponent({
  components: { FormInput, FormTextarea },
  setup() {
    const store = useStore();
    const productValues = reactive({});
    const formError = reactive({});

    async function saveProduct() {
      let response;
      try {
        response = await axios.post('http://localhost:3000/api/products', productValues);
        store.commit('updateProductList', response.data);
      } catch (error) {
        error.response.data.errors.forEach((item) => {
          formError[item.field] = item.message;
        });
      }
    }

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
      formError,

      saveProduct,
    };
  },
});
</script>

<style lang="scss">
.form {
  margin-bottom: 30px;

  @include breakpoint(lg) {
    width: 330px;
  }

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
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    background-color: #fffefb;
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:last-child {
      margin-bottom: 25px;
    }
  }

  &__label {
    position: relative;
    margin-bottom: 4px;

    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
  }

  &__required {
    position: absolute;
    top: 0;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;

    background-color: #ff8484;
  }

  &__input {
    cursor: pointer;
    border: none;
    padding: 10px 0 10px 16px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;

    font-family: $SansPro;
    font-size: 12px;
    line-height: 15px;
    color: $fontColor;

    background: #fffefb;
    transition: outline $linear;

    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }

    &--error {
      border: 1px solid #ff8484;
    }

    &--textarea {
      resize: none;
      min-height: 110px;
      font-family: $SansPro;
    }

    &:active,
    &:hover,
    &:focus {
      outline: 1px solid #a3a3a3;
    }
  }

  &__error {
    margin-top: 4px;

    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
  }

  &__btn {
    border-radius: 10px;
    padding: 10px;
    width: 100%;

    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #b4b4b4;

    background-color: #eeeeee;
    transition: all $ease;

    &:hover {
      color: #fff;
      background: #7bae73;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
