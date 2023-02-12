<script setup lang="ts">
import { WidgetType } from '../domains/widget'

const {
  width,
  height,
  top,
  left
} = defineProps<{
  width?: number
  height?: number
  top?: number
  left?: number
}>()

const styleObject = computed(() => ({
  width: (width || 220) + 'px',
  height: (height || 420) + 'px',
  top:  (top || 20) + 'px',
  left:  (left || 20) + 'px',
}))
</script>

<template>
  <div class="app-frame" :style="styleObject">
    <span class="app-frame__label">220x320</span>
    <app-widget :type="WidgetType.Image"/>
    <app-widget :type="WidgetType.Text">Just buy it.</app-widget>
  </div>
</template>

<style scoped>
.app-frame {
  position: absolute;

  display: grid;
  place-content: center;
  overflow: hidden;

  background-color: rgb(53, 53, 53);
}

.app-frame__label {
  font-size: 12px;
  opacity: 0.25;
}
</style>