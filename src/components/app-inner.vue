<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="app-inner">text</div>
</template>

<style scoped>
.app-inner {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  text-align: left;
}
</style>
