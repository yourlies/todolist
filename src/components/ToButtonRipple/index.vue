<template>
  <div class="content to-button-ripple" ref="buttonRef">
    <slot></slot>
    <div :class="['shadow', active ? 'active' : '']"></div>
  </div>
</template>
<script lang="ts">
import { ToTouch } from '@/touch';
import { Options, Vue, prop } from 'vue-class-component';

@Options({
  emits: ['focused'],
})
export default class ToButtonRipple extends Vue {
  buttonRef: HTMLElement | null = null;
  refId = 0;
  active = prop({
    type: Boolean,
  });
  mounted() {
    ToTouch.focused(this.buttonRef, () => {
      this.$emit('focused');
    });
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
  transform: scale(0.1);
}
.content:active .shadow {
  opacity: 0.3;
  transition: transform 1s ease-in-out;
  transform: scale(1);
}
</style>
