<template>
  <form-field :title="title" :isRequired="isRequired">
    <input
      class="form__input"
      :class="{ 'form__input--error': error }"
      :type="type"
      :value="fieldValue"
      @input="handleCurrentValue($event)"
      :placeholder="placeholder"
    />
    <span class="form__error" v-if="error">{{ error }}</span>
  </form-field>
</template>

<script>
import { defineComponent } from 'vue';
import FormField from './FormField.vue';

export default defineComponent({
  props: {
    title: String,
    isRequired: Boolean,
    fieldValue: [String, Number],
    placeholder: String,
    error: String,
    type: {
      default: 'text',
    },
  },
  components: { FormField },
  setup(props, context) {
    function handleCurrentValue(e) {
      context.emit('update:fieldValue', e.target.value);
      if (e.target.value.trim() !== '') {
        context.emit('update:error', false);
      }
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

    &--error {
      border: 1px solid crimson;
    }
  }

  &__error {
    margin-top: 4px;

    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
  }
}
</style>
