<script setup lang="ts">
import { education, honors } from '@/data/resume'
</script>

<template>
  <section id="education" class="education">
    <div class="container">
      <h2 class="section-title">教育背景</h2>
      
      <div class="education__card">
        <div class="education__header">
          <div class="education__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          
          <div class="education__info">
            <h3 class="education__school">{{ education.school }}</h3>
            <div class="education__meta">
              <span class="education__major">{{ education.major }}</span>
              <span class="education__divider">·</span>
              <span class="education__degree">{{ education.degree }}</span>
            </div>
          </div>
          
          <div class="education__period">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{{ education.period }}</span>
          </div>
        </div>
        
        <div class="education__body">
          <div class="education__courses">
            <div class="education__course-group">
              <h4 class="education__course-title">
                <span class="education__course-icon">▸</span>
                主修课程
              </h4>
              <div class="education__course-list">
                <span 
                  v-for="course in education.mainCourses" 
                  :key="course"
                  class="education__course-tag"
                >
                  {{ course }}
                </span>
              </div>
            </div>
            
            <div class="education__course-group">
              <h4 class="education__course-title">
                <span class="education__course-icon">▸</span>
                辅修课程
              </h4>
              <div class="education__course-list">
                <span 
                  v-for="course in education.minorCourses" 
                  :key="course"
                  class="education__course-tag education__course-tag--minor"
                >
                  {{ course }}
                </span>
              </div>
            </div>
            
          </div>
          
          <!-- 个人荣誉单独一行 -->
          <div class="education__honors">
            <h4 class="education__course-title">
              <span class="education__course-icon">★</span>
              个人荣誉
            </h4>
            <div class="education__honors-list">
              <span 
                v-for="honor in honors" 
                :key="honor"
                class="education__course-tag education__course-tag--honor"
              >
                {{ honor }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="education__decoration">
          <div class="education__line"></div>
          <div class="education__dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.education {
  padding: $spacing-3xl 0;
  background: $bg-secondary;
  
  &__card {
    position: relative;
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-xl;
    overflow: hidden;
    transition: all $transition-normal;
    
    &:hover {
      border-color: rgba($primary-color, 0.3);
      box-shadow: $shadow-glow;
      
      .education__line {
        width: 100%;
      }
    }
  }
  
  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
    padding: $spacing-xl;
    border-bottom: 1px solid $border-color;
    
  }
  
  &__icon {
    @include flex-center;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, rgba($primary-color, 0.15) 0%, rgba($accent-color, 0.15) 100%);
    border: 1px solid rgba($primary-color, 0.3);
    border-radius: $radius-lg;
    flex-shrink: 0;
    
    svg {
      width: 32px;
      height: 32px;
      color: $primary-color;
    }
  }
  
  &__info {
    flex: 1;
  }
  
  &__school {
    font-size: $font-size-2xl;
    font-weight: 700;
    color: $text-primary;
    margin-bottom: $spacing-xs;
    
  }
  
  &__meta {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    color: $text-secondary;
    font-size: $font-size-base;
    
  }
  
  &__major {
    color: $primary-color;
    font-weight: 500;
  }
  
  &__divider {
    color: $text-muted;
  }
  
  &__period {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    padding: $spacing-sm $spacing-md;
    background: rgba($primary-color, 0.1);
    border: 1px solid rgba($primary-color, 0.2);
    border-radius: $radius-md;
    color: $primary-color;
    font-size: $font-size-sm;
    font-family: $font-mono;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
  
  &__body {
    padding: $spacing-xl;
  }
  
  &__courses {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-xl;
    
    @include tablet {
      grid-template-columns: 1fr;
    }
  }
  
  &__honors {
    margin-top: $spacing-xl;
    padding-top: $spacing-xl;
    border-top: 1px solid $border-color;
  }
  
  &__honors-list {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
    margin-top: $spacing-md;
  }
  
  &__course-group {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }
  
  &__course-title {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-size: $font-size-sm;
    font-weight: 600;
    color: $text-primary;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  &__course-icon {
    color: $primary-color;
    font-size: $font-size-xs;
  }
  
  &__course-list {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
  }
  
  &__course-tag {
    padding: $spacing-xs $spacing-md;
    background: rgba($primary-color, 0.1);
    border: 1px solid rgba($primary-color, 0.2);
    border-radius: $radius-md;
    color: $text-secondary;
    font-size: $font-size-sm;
    transition: all $transition-fast;
    
    &:hover {
      background: rgba($primary-color, 0.2);
      color: $primary-color;
      border-color: rgba($primary-color, 0.4);
    }
    
    &--minor {
      background: rgba($accent-color, 0.1);
      border-color: rgba($accent-color, 0.2);
      
      &:hover {
        background: rgba($accent-color, 0.2);
        color: $accent-light;
        border-color: rgba($accent-color, 0.4);
      }
    }
    
    &--honor {
      background: rgba($warning-color, 0.1);
      border-color: rgba($warning-color, 0.2);
      color: $warning-color;
      
      &:hover {
        background: rgba($warning-color, 0.2);
        border-color: rgba($warning-color, 0.4);
      }
    }
  }
  
  &__decoration {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 $spacing-xl;
  }
  
  &__line {
    flex: 1;
    height: 3px;
    width: 0;
    background: linear-gradient(90deg, $primary-color 0%, $accent-color 100%);
    border-radius: 2px;
    transition: width $transition-slow;
  }
  
  &__dots {
    display: flex;
    gap: $spacing-xs;
    padding-left: $spacing-md;
    
    span {
      width: 6px;
      height: 6px;
      background: $border-color;
      border-radius: 50%;
      
      &:first-child {
        background: $primary-color;
        box-shadow: 0 0 8px $primary-glow;
      }
    }
  }
}
</style>
