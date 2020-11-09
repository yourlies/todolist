<template>
  <div class="content to-button-ripple" ref="buttonRef">
    <slot></slot>
    <div class="shadow"></div>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  buttonRef: HTMLElement | null = null;
  mounted() {
    if (this.buttonRef) {
      this.buttonRef.ontouchstart = () => {
        document.body.className = 'noTouch';
      };
      this.buttonRef.ontouchend = () => {
        document.body.className = '';
      };
    }
  }
}
</script>
<style scoped>
.content {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.shadow {
  position: absolute;
  top: calc(-100vw / 2 + 50%);
  left: 0;
  height: 100vw;
  width: 100%;
  border-radius: 100vw;
  background-color: #333;
  opacity: 0;
  transform: scale(0);
}
.content:active .shadow {
  opacity: 0.3;
  transition: transform 1s ease-in-out;
  transform: scale(1);
}
</style>
