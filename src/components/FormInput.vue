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
