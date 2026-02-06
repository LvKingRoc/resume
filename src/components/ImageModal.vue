<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  images: string[]
  visible: boolean
  projectName: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const currentIndex = ref(0)

const currentImage = computed(() => props.images[currentIndex.value])

const hasNext = computed(() => currentIndex.value < props.images.length - 1)
const hasPrev = computed(() => currentIndex.value > 0)

const next = () => {
  if (hasNext.value) {
    currentIndex.value++
  }
}

const prev = () => {
  if (hasPrev.value) {
    currentIndex.value--
  }
}

const close = () => {
  currentIndex.value = 0
  emit('close')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal" @click.self="close" @keydown="handleKeydown" tabindex="0">
        <div class="modal__content">
          <div class="modal__header">
            <h3 class="modal__title">{{ projectName }} - 项目截图</h3>
            <button class="modal__close" @click="close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          <div class="modal__body">
            <div class="modal__image-wrapper">
              <img :src="currentImage" :alt="`${projectName} 截图 ${currentIndex + 1}`" class="modal__image" loading="eager" decoding="async" />
            </div>
            
            <div class="modal__nav" v-if="images.length > 1">
              <button class="modal__nav-btn" :disabled="!hasPrev" @click="prev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              
              <div class="modal__indicator">
                <span 
                  v-for="(_, idx) in images" 
                  :key="idx"
                  class="modal__dot"
                  :class="{ 'modal__dot--active': idx === currentIndex }"
                  @click="currentIndex = idx"
                ></span>
              </div>
              
              <button class="modal__nav-btn" :disabled="!hasNext" @click="next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="modal__footer">
            <span class="modal__counter">{{ currentIndex + 1 }} / {{ images.length }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  padding: $spacing-xl;
  
  &__content {
    position: relative;
    max-width: 1000px;
    width: 100%;
    max-height: 90vh;
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-xl;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $spacing-lg $spacing-xl;
    border-bottom: 1px solid $border-color;
  }
  
  &__title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
  }
  
  &__close {
    @include flex-center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: 1px solid $border-color;
    border-radius: $radius-md;
    color: $text-secondary;
    cursor: pointer;
    transition: all $transition-fast;
    
    &:hover {
      background: rgba($primary-color, 0.1);
      border-color: $primary-color;
      color: $primary-color;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  &__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: $spacing-lg;
    overflow: hidden;
  }
  
  &__image-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: $radius-lg;
    background: $bg-secondary;
  }
  
  &__image {
    max-width: 100%;
    max-height: 60vh;
    object-fit: contain;
    border-radius: $radius-md;
  }
  
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-lg;
    padding-top: $spacing-lg;
  }
  
  &__nav-btn {
    @include flex-center;
    width: 44px;
    height: 44px;
    background: rgba($primary-color, 0.1);
    border: 1px solid rgba($primary-color, 0.2);
    border-radius: 50%;
    color: $primary-color;
    cursor: pointer;
    transition: all $transition-fast;
    
    &:hover:not(:disabled) {
      background: rgba($primary-color, 0.2);
      border-color: $primary-color;
    }
    
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  &__indicator {
    display: flex;
    gap: $spacing-sm;
  }
  
  &__dot {
    width: 10px;
    height: 10px;
    background: $border-color;
    border-radius: 50%;
    cursor: pointer;
    transition: all $transition-fast;
    
    &:hover {
      background: rgba($primary-color, 0.5);
    }
    
    &--active {
      background: $primary-color;
      box-shadow: 0 0 8px $primary-glow;
    }
  }
  
  &__footer {
    padding: $spacing-md $spacing-xl;
    border-top: 1px solid $border-color;
    text-align: center;
  }
  
  &__counter {
    font-size: $font-size-sm;
    font-family: $font-mono;
    color: $text-muted;
  }
}

.modal-enter-active {
  transition: opacity 0.2s ease;
  
  .modal__content {
    transition: transform 0.2s ease;
  }
}

.modal-leave-active {
  transition: opacity 0.15s ease;
  
  .modal__content {
    transition: transform 0.15s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal__content,
.modal-leave-to .modal__content {
  transform: scale(0.95);
}
</style>
