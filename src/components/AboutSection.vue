<script setup lang="ts">
import { selfEvaluationBackend as selfEvaluation } from '@/data/resume'
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">关于我</h2>
      
      <div class="about__layout">
        <div class="about__content">
          <div class="about__intro">
            <div class="about__intro-header">
              <span class="about__intro-tag">&lt;自我评价&gt;</span>
            </div>
            
            <div class="about__paragraphs">
              <p 
                v-for="(paragraph, index) in selfEvaluation" 
                :key="index"
                class="about__paragraph"
              >
                {{ paragraph }}
              </p>
            </div>
            
            <div class="about__intro-footer">
              <span class="about__intro-tag">&lt;/自我评价&gt;</span>
            </div>
          </div>
        </div>
        
        <div class="about__sidebar">
          <div class="about__card">
            <h3 class="about__card-title">核心优势</h3>
            <ul class="about__strengths">
              <li class="about__strength">
                <span class="about__strength-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </span>
                <span class="about__strength-text">全栈开发能力</span>
              </li>
              <li class="about__strength">
                <span class="about__strength-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <span class="about__strength-text">高效学习能力</span>
              </li>
              <li class="about__strength">
                <span class="about__strength-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <span class="about__strength-text">团队协作沟通</span>
              </li>
              <li class="about__strength">
                <span class="about__strength-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </span>
                <span class="about__strength-text">技术热情驱动</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.about {
  padding: $spacing-3xl 0;
  background: $bg-secondary;
  
  &__layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: $spacing-xl;
    
    @include tablet {
      grid-template-columns: 1fr;
    }
    
  }
  
  &__content {
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-xl;
    overflow: hidden;
  }
  
  &__intro {
    padding: $spacing-xl;
    
    &-header {
      margin-bottom: $spacing-md;
    }
    
    &-footer {
      margin-top: $spacing-md;
    }
    
    &-tag {
      font-family: $font-mono;
      font-size: $font-size-sm;
      color: $text-muted;
    }
  }
  
  &__paragraphs {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    padding-left: $spacing-lg;
    border-left: 2px solid rgba($primary-color, 0.3);
    
  }
  
  &__paragraph {
    font-size: $font-size-base;
    color: $text-secondary;
    line-height: $line-height-relaxed;
    
  }
  
  &__sidebar {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
  }
  
  &__card {
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-xl;
    padding: $spacing-xl;
    
    &-title {
      font-size: $font-size-lg;
      font-weight: 600;
      color: $text-primary;
      margin-bottom: $spacing-lg;
      padding-bottom: $spacing-md;
      border-bottom: 1px solid $border-color;
    }
  }
  
  &__strengths {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }
  
  &__strength {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md;
    background: rgba($primary-color, 0.05);
    border: 1px solid rgba($primary-color, 0.1);
    border-radius: $radius-md;
    transition: all $transition-fast;
    
    &:hover {
      background: rgba($primary-color, 0.1);
      border-color: rgba($primary-color, 0.3);
      transform: translateX(4px);
    }
    
    &-icon {
      @include flex-center;
      width: 36px;
      height: 36px;
      background: rgba($primary-color, 0.1);
      border-radius: $radius-sm;
      
      svg {
        width: 18px;
        height: 18px;
        color: $primary-color;
      }
    }
    
    &-text {
      font-size: $font-size-sm;
      color: $text-secondary;
      font-weight: 500;
    }
  }
  
  &__contact-card {
    @extend .about__card;
  }
  
  &__contact-list {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
  }
  
  &__contact-item {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md;
    background: rgba($bg-secondary, 0.5);
    border-radius: $radius-md;
    color: $text-secondary;
    text-decoration: none;
    transition: all $transition-fast;
    
    &:hover {
      background: rgba($primary-color, 0.1);
      color: $primary-color;
    }
    
    &-icon {
      @include flex-center;
      width: 32px;
      height: 32px;
      
      svg {
        width: 18px;
        height: 18px;
        color: $primary-color;
      }
    }
    
    &-value {
      font-size: $font-size-sm;
      font-family: $font-mono;
    }
  }
}
</style>
