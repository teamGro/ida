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

const priceFormatter = new Intl.NumberFormat('ru');
function formatPriceField(s) {
  return priceFormatter.format(String(s).replace(/[^0-9.-]+/g, ''));
}

export default defineComponent({
  props: {
    title: String,
    isRequired: Boolean,
    fieldValue: [String, Number],
    placeholder: String,
    error: [String, Boolean],
    type: {
      default: 'text',
    },
  },
  components: { FormField },
  setup(props, context) {
    function handleCurrentValue(e) {
      if (e.target.getAttribute('type') === 'currency') {
        e.target.value = e.target.value ? formatPriceField(e.target.value) : '';
      }

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
