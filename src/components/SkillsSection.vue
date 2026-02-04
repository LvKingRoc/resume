<script setup lang="ts">
import { skillCategories } from '@/data/resume'
import type { SkillItem } from '@/types'

const getSkillName = (skill: string | SkillItem): string => {
  return typeof skill === 'string' ? skill : skill.name
}

const isAdvanced = (skill: string | SkillItem): boolean => {
  return typeof skill === 'object' && skill.advanced === true
}

const getIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    server: 'M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01',
    layout: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
    tool: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    wifi: 'M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01'
  }
  return icons[iconName] || icons.code
}
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">技术技能</h2>
      
      <div class="skills__grid">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.name"
          class="skills__card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="skills__card-header">
            <div class="skills__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="getIcon(category.icon)" />
              </svg>
            </div>
            <h3 class="skills__card-title">{{ category.name }}</h3>
          </div>
          
          <div class="skills__card-body">
            <div class="skills__tags">
              <span 
                v-for="skill in category.skills" 
                :key="getSkillName(skill)"
                class="skills__tag"
                :class="{ 'skills__tag--advanced': isAdvanced(skill) }"
              >
                {{ getSkillName(skill) }}
              </span>
            </div>
          </div>
          
          <div class="skills__card-decoration">
            <div class="skills__card-line"></div>
            <div class="skills__card-dot"></div>
          </div>
        </div>
      </div>
      
      <div class="skills__extra">
        <div class="skills__extra-item">
          <span class="skills__extra-label">开发理念</span>
          <span class="skills__extra-value">代码质量 · 性能优化 · 用户体验</span>
        </div>
        <div class="skills__extra-item">
          <span class="skills__extra-label">协作方式</span>
          <span class="skills__extra-value">Git工作流 · 代码审查 · 敏捷开发</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.skills {
  padding: $spacing-3xl 0;
  background: $bg-secondary;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, $border-color 50%, transparent 100%);
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;
    margin-bottom: $spacing-2xl;
    
    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  &__card {
    position: relative;
    padding: $spacing-xl;
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-lg;
    transition: all $transition-normal;
    overflow: hidden;
    animation: slideUp 0.5s ease forwards;
    opacity: 0;
    
    &:hover {
      border-color: rgba($primary-color, 0.3);
      transform: translateY(-4px);
      box-shadow: $shadow-glow;
      
      .skills__card-icon {
        background: rgba($primary-color, 0.15);
        border-color: $primary-color;
        
        svg {
          color: $primary-color;
        }
      }
      
      .skills__card-line {
        width: 100%;
      }
      
      .skills__card-dot {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    &-header {
      display: flex;
      align-items: center;
      gap: $spacing-md;
      margin-bottom: $spacing-lg;
    }
    
    &-icon {
      @include flex-center;
      width: 48px;
      height: 48px;
      background: rgba($primary-color, 0.1);
      border: 1px solid rgba($primary-color, 0.2);
      border-radius: $radius-md;
      transition: all $transition-normal;
      
      svg {
        width: 24px;
        height: 24px;
        color: $primary-color;
        transition: color $transition-normal;
      }
    }
    
    &-title {
      font-size: $font-size-lg;
      font-weight: 600;
      color: $text-primary;
    }
    
    &-body {
      min-height: 100px;
    }
    
    &-decoration {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
    }
    
    &-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(90deg, $primary-color 0%, $accent-color 100%);
      transition: width $transition-normal;
    }
    
    &-dot {
      position: absolute;
      bottom: -2px;
      right: $spacing-lg;
      width: 6px;
      height: 6px;
      background: $primary-color;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0);
      transition: all $transition-normal;
      box-shadow: 0 0 10px $primary-color;
    }
  }
  
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
  }
  
  &__tag {
    display: inline-flex;
    align-items: center;
    padding: $spacing-xs $spacing-sm;
    background: rgba($primary-color, 0.08);
    border: 1px solid rgba($primary-color, 0.15);
    border-radius: $radius-sm;
    color: $text-secondary;
    font-size: $font-size-sm;
    font-family: $font-mono;
    transition: all $transition-fast;
    
    &:hover {
      background: rgba($primary-color, 0.15);
      color: $primary-color;
      border-color: rgba($primary-color, 0.3);
    }
    
    &--advanced {
      background: rgba($accent-color, 0.15);
      border-color: rgba($accent-color, 0.3);
      color: $accent-light;
      font-weight: 500;
      
      &:hover {
        background: rgba($accent-color, 0.25);
        border-color: rgba($accent-color, 0.5);
        box-shadow: 0 0 10px rgba($accent-color, 0.3);
      }
    }
  }
  
  &__extra {
    display: flex;
    justify-content: center;
    gap: $spacing-3xl;
    padding-top: $spacing-xl;
    border-top: 1px solid $border-color;
    
    @include mobile {
      flex-direction: column;
      gap: $spacing-lg;
      align-items: center;
    }
    
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $spacing-xs;
      text-align: center;
    }
    
    &-label {
      font-size: $font-size-xs;
      color: $text-muted;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    &-value {
      font-size: $font-size-sm;
      color: $text-secondary;
    }
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
