<script setup lang="ts">
</script>

<template>
  <div class="app-inner">
    <app-sidebar />
    <app-workspace />
  </div>
</template>

<style scoped>
.app-inner {
  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 240px 1fr;
  align-content: stretch;
  justify-content: stretch;
  text-align: left;
}
</style>
