<template>
  <form-field :title="title">
    <textarea
      class="form__input form__input--textarea"
      type="text"
      :placeholder="placeholder"
      :value="fieldValue"
      @input="handleCurrentValue($event)"
    ></textarea>
  </form-field>
</template>

<script>
import { defineComponent } from 'vue';
import FormField from './FormField.vue';

export default defineComponent({
  props: ['title', 'fieldValue', 'placeholder'],
  components: { FormField },
  setup(props, context) {
    function handleCurrentValue(e) {
      context.emit('update:fieldValue', e.target.value);
    }

    return {
      handleCurrentValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
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
}
</style>
