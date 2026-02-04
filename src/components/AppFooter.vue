<script setup lang="ts">
import { personalInfo } from '@/data/resume'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} {{ personalInfo.name }}. All rights reserved.
        </p>
        <p class="footer__tech">
          Built with Vue 3 + TypeScript + SCSS
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.footer {
  background: $bg-secondary;
  border-top: 1px solid $border-color;
  
  &__container {
    max-width: $container-max-width;
    margin: 0 auto;
    padding: $spacing-2xl $container-padding;
    
    @include mobile {
      padding: $spacing-xl $spacing-md;
    }
  }
  
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @include mobile {
      flex-direction: column;
      gap: $spacing-sm;
      text-align: center;
    }
  }
  
  &__copyright {
    font-size: $font-size-sm;
    color: $text-muted;
  }
  
  &__tech {
    font-size: $font-size-xs;
    color: $text-muted;
    font-family: $font-mono;
  }
}
</style>
