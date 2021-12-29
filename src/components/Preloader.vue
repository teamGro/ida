<template>
    <div class="preloader">
  <div class="preloader__loader">
    <div class="preloader__dot"></div>
    <div class="preloader__dot"></div>
    <div class="preloader__dot"></div>
    <div class="preloader__dot"></div>
    <div class="preloader__dot"></div>
   </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

  },
});
</script>

<style lang="scss" scoped>
$minSize: 2px;
$maxSize: 20px;

.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  &__loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

&__dot {
    margin: 5px;
  background-color: #eeeeee;
  animation: loader 1s infinite alternate;

        &:nth-child(1) {
            animation-delay: 0.2s;
        }

        &:nth-child(2) {
            animation-delay: 0.4s;
        }

        &:nth-child(3) {
            animation-delay: 0.6s;
        }

        &:nth-child(4) {
            animation-delay: 0.8s;
        }

        &:nth-child(5) {
            animation-delay: 1s;
        }
    }
}

@keyframes loader {
  from {
    width: 2px;
    width: $minSize;
    height: 2px;
    height: $minSize;
    border-radius: calc(2px / 2);
    border-radius: calc($minSize / 2);
  }
  to {
    width: 20px;
    width: $maxSize;
    height: 20px;
    height: $maxSize;
    border-radius: calc(20px / 2);
    border-radius: calc($maxSize / 2);
  }
}
</style>
