<script setup lang="ts">
import { WidgetType } from '../domains/widget';

const { type, top, right, bottom, left } = defineProps<{
  type?: WidgetType
  top?: number
  right?: number
  bottom?: number
  left?: number
}>()

const hasImage = computed(() => type === WidgetType.Image)
const hasText = computed(() => type === WidgetType.Text)

const styleObject = computed(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}))
</script>

<template>
  <div class="app-widget" :style="styleObject">
    <img v-if="hasImage" class="app-widget__image" src="assets/images/img-1.jpg" alt="">
    <slot v-if="hasText" />
  </div>
</template>

<style scoped>
.app-widget {
  position: absolute;

  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
}
.app-widget__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>