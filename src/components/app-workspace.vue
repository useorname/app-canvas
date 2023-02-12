<script setup lang="ts"></script>

<template>
  <div class="app-workspace">
    <app-frame :top="240" />
    <app-frame :width="820" :height="200"/>
  </div>
</template>

<style scoped>
.app-workspace {
  position: relative;
  overflow: auto;

  background-color: rgb(27, 27, 27);
}
</style>