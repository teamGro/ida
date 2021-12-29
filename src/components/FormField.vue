<template>
  <div class="form__input-wrapper">
    <label class="form__label" for=""
      >{{ title }}
      <span class="form__required" v-if="isRequired"></span>
    </label>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['title', 'isRequired'],
  setup() {
    return {};
  },
});
</script>
