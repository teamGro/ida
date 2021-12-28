<template>
  <div class="form__input-wrapper">
    <label class="form__label" for=""
      >{{ title }}<span class="form__required" v-if="isRequired"></span
    ></label>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['title', 'isRequired'],
  setup() {},
});
</script>

<style lang="scss" scoped>
.form {
  &__input-wrapper {
    display: flex;
    flex-direction: column;
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
}
</style>
