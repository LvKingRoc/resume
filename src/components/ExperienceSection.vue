<script setup lang="ts">
import { experience, campusRoles } from '@/data/resume'
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title">校园经历</h2>
      
      <!-- 学校信息 -->
      <div class="experience__header">
        <div class="experience__school-info">
          <h3 class="experience__school">{{ experience.school }}</h3>
          <span class="experience__major">{{ experience.role }}</span>
          <span class="experience__period">{{ experience.period }}</span>
        </div>
        <div class="experience__highlights">
          <div class="experience__highlight">
            <span class="experience__highlight-value">3次</span>
            <span class="experience__highlight-label">国家奖学金</span>
          </div>
          <div class="experience__highlight">
            <span class="experience__highlight-value">省级</span>
            <span class="experience__highlight-label">二等奖</span>
          </div>
          <div class="experience__highlight">
            <span class="experience__highlight-value">5个</span>
            <span class="experience__highlight-label">完整项目</span>
          </div>
        </div>
      </div>
      
      <!-- 角色卡片 -->
      <div class="experience__roles">
        <div 
          v-for="(role, index) in campusRoles" 
          :key="index"
          class="experience__role-card"
        >
          <div class="experience__role-header">
            <h4 class="experience__role-title">{{ role.title }}</h4>
            <span class="experience__role-period">{{ role.period }}</span>
          </div>
          <ul class="experience__role-achievements">
            <li 
              v-for="(achievement, idx) in role.achievements" 
              :key="idx"
              class="experience__role-achievement"
            >
              <span class="experience__role-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.experience {
  padding: $spacing-3xl 0;
  @include grid-background;
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $spacing-xl;
    padding: $spacing-xl;
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-xl;
    margin-bottom: $spacing-xl;
    
    @include tablet {
      flex-direction: column;
      text-align: center;
    }
  }
  
  &__school-info {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
  }
  
  &__school {
    font-size: $font-size-2xl;
    font-weight: 700;
    color: $text-primary;
  }
  
  &__major {
    font-size: $font-size-base;
    color: $primary-color;
    font-weight: 500;
  }
  
  &__period {
    font-size: $font-size-sm;
    color: $text-muted;
    font-family: $font-mono;
  }
  
  &__highlights {
    display: flex;
    gap: $spacing-xl;
    
    @include mobile {
      gap: $spacing-md;
    }
  }
  
  &__highlight {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-xs;
    padding: $spacing-md $spacing-lg;
    background: rgba($primary-color, 0.05);
    border-radius: $radius-lg;
    
    &-value {
      font-size: $font-size-xl;
      font-weight: 700;
      color: $primary-color;
    }
    
    &-label {
      font-size: $font-size-xs;
      color: $text-muted;
      white-space: nowrap;
    }
  }
  
  &__honors {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
    margin-bottom: $spacing-xl;
  }
  
  &__honor-tag {
    display: inline-flex;
    align-items: center;
    padding: $spacing-xs $spacing-md;
    background: rgba($warning-color, 0.1);
    border: 1px solid rgba($warning-color, 0.2);
    border-radius: 9999px;
    font-size: $font-size-sm;
    color: $warning-color;
    white-space: nowrap;
  }
  
  &__roles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;
    
    @include tablet {
      grid-template-columns: 1fr;
    }
  }
  
  &__role-card {
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-xl;
    padding: $spacing-lg;
    transition: all $transition-normal;
    
    &:hover {
      border-color: rgba($primary-color, 0.3);
      box-shadow: $shadow-glow;
    }
  }
  
  &__role-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
    padding-bottom: $spacing-md;
    border-bottom: 1px solid $border-color;
  }
  
  &__role-title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
  }
  
  &__role-period {
    font-size: $font-size-xs;
    color: $text-muted;
    font-family: $font-mono;
    white-space: nowrap;
  }
  
  &__role-achievements {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  &__role-achievement {
    display: flex;
    align-items: flex-start;
    gap: $spacing-sm;
    font-size: $font-size-sm;
    color: $text-secondary;
    line-height: $line-height-normal;
  }
  
  &__role-icon {
    flex-shrink: 0;
    @include flex-center;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    
    svg {
      width: 14px;
      height: 14px;
      color: $success-color;
    }
  }
}
</style>
