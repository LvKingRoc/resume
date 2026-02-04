<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@use '@/styles/variables' as *;

.app {
  min-height: 100vh;
  background: $bg-primary;
}

.main {
  position: relative;
}
</style>
