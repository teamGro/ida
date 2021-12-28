<template>
  <div class="form">
    <h2 class="form__title">Добавление товара</h2>
    <form class="form__wrapper" action="">
      <form-input :title="fieldsTitle.name" :isRequired="true">
        <input
          class="form__input"
          type="text"
          :placeholder="fieldsPlaceholder.name"
        />
      </form-input>

      <form-input :title="fieldsTitle.description">
        <textarea
          class="form__input form__input--textarea"
          type="text"
          :placeholder="fieldsPlaceholder.description"
        ></textarea>
      </form-input>

      <form-input :title="fieldsTitle.img" :isRequired="true">
        <input
          class="form__input"
          type="text"
          :placeholder="fieldsPlaceholder.img"
        />
      </form-input>

      <form-input :title="fieldsTitle.price" :isRequired="true">
        <input
          class="form__input"
          type="text"
          :placeholder="fieldsPlaceholder.price"
        />
      </form-input>

      <button class="form__btn">Добавить товар</button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import FormInput from './FormInput.vue';

export default defineComponent({
  components: { FormInput },
  setup() {
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
        price: 'Введите ссылку',
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
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

  &__input {
    border: none;
    padding: 10px 0 10px 16px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
    //max-width: 284px;

    background: #fffefb;

    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:last-child {
      margin-bottom: 25px;
    }

    &--textarea {
      resize: none;
      min-height: 110px;
    }
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
