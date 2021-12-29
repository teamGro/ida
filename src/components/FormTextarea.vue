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
