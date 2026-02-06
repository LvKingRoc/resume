<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/resume'
import ImageModal from './ImageModal.vue'

const activeProject = ref(0)
const showImageModal = ref(false)

const currentProject = computed(() => projects[activeProject.value])

// 每个项目的图片列表
const projectImages = computed(() => {
  return currentProject.value.images || (currentProject.value.image ? [currentProject.value.image] : [])
})

const setActiveProject = (index: number) => {
  activeProject.value = index
}

const openImageModal = () => {
  showImageModal.value = true
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">项目经历</h2>
      
      <div class="projects__layout">
        <div class="projects__nav">
          <button
            v-for="(project, index) in projects"
            :key="project.id"
            class="projects__nav-item"
            :class="{ 'projects__nav-item--active': activeProject === index }"
            @click="setActiveProject(index)"
          >
            <span class="projects__nav-index">0{{ index + 1 }}</span>
            <div class="projects__nav-content">
              <span class="projects__nav-name">{{ project.name }}</span>
              <span class="projects__nav-period">{{ project.period }}</span>
            </div>
            <span class="projects__nav-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </span>
          </button>
        </div>
        
        <div class="projects__detail">
          <Transition name="fade" mode="out-in">
            <div 
              :key="currentProject.id"
              class="projects__card"
            >
              <div class="projects__card-header">
                <div class="projects__card-image" @click="openImageModal">
                  <img :src="currentProject.image" :alt="currentProject.name" loading="eager" decoding="async" />
                  <div class="projects__card-overlay">
                    <span class="projects__card-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      点击查看截图
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="projects__card-body">
                <div class="projects__card-meta">
                  <h3 class="projects__card-title">{{ currentProject.name }}</h3>
                  <span class="projects__card-subtitle">{{ currentProject.subtitle }}</span>
                </div>
                
                <p class="projects__card-desc">{{ currentProject.description }}</p>
                
                <div class="projects__card-section">
                  <h4 class="projects__card-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9 11 12 14 22 4"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                    核心亮点
                  </h4>
                  <ul class="projects__card-highlights">
                    <li 
                      v-for="(highlight, hIndex) in currentProject.highlights" 
                      :key="hIndex"
                      class="projects__card-highlight"
                    >
                      <span class="projects__card-highlight-dot"></span>
                      {{ highlight }}
                    </li>
                  </ul>
                </div>
                
                <div class="projects__card-section">
                  <h4 class="projects__card-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                    技术栈
                  </h4>
                  <div class="projects__card-techs">
                    <span 
                      v-for="tech in currentProject.techStack" 
                      :key="tech"
                      class="projects__card-tech"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      
      <div class="projects__indicator">
        <div class="projects__indicator-track">
          <div 
            class="projects__indicator-progress"
            :style="{ width: `${((activeProject + 1) / projects.length) * 100}%` }"
          ></div>
        </div>
        <span class="projects__indicator-text">
          {{ activeProject + 1 }} / {{ projects.length }}
        </span>
      </div>
    </div>
    
    <!-- 图片弹窗 -->
    <ImageModal 
      :images="projectImages"
      :visible="showImageModal"
      :project-name="currentProject.name"
      @close="showImageModal = false"
    />
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.projects {
  padding: $spacing-3xl 0;
  position: relative;
  @include grid-background;
  
  &__layout {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: $spacing-xl;
    
    @include tablet {
      grid-template-columns: 1fr;
    }
  }
  
  &__nav {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
    
    @include tablet {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: $spacing-md;
      margin-bottom: $spacing-md;
      
      &::-webkit-scrollbar {
        height: 4px;
      }
    }
    
    &-item {
      display: flex;
      align-items: center;
      gap: $spacing-md;
      padding: $spacing-md $spacing-lg;
      background: $bg-card;
      border: 1px solid $border-color;
      border-radius: $radius-md;
      cursor: pointer;
      transition: all $transition-normal;
      text-align: left;
      
      @include tablet {
        flex-shrink: 0;
        min-width: 200px;
      }
      
      &:hover {
        background: $bg-card-hover;
        border-color: rgba($primary-color, 0.2);
      }
      
      &--active {
        background: rgba($primary-color, 0.1);
        border-color: $primary-color;
        
        .projects__nav-index {
          color: $primary-color;
          background: rgba($primary-color, 0.2);
        }
        
        .projects__nav-name {
          color: $primary-color;
        }
        
        .projects__nav-arrow {
          opacity: 1;
          transform: translateX(0);
          color: $primary-color;
        }
      }
    }
    
    &-index {
      font-family: $font-mono;
      font-size: $font-size-sm;
      font-weight: 600;
      color: $text-muted;
      padding: $spacing-xs $spacing-sm;
      background: rgba($text-muted, 0.1);
      border-radius: $radius-sm;
      transition: all $transition-fast;
    }
    
    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    &-name {
      font-size: $font-size-sm;
      font-weight: 600;
      color: $text-primary;
      transition: color $transition-fast;
    }
    
    &-period {
      font-size: $font-size-xs;
      color: $text-muted;
      font-family: $font-mono;
    }
    
    &-arrow {
      opacity: 0;
      transform: translateX(-10px);
      transition: all $transition-fast;
      
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
  
  &__detail {
    position: relative;
    min-height: auto;
  }
  
  &__card {
    position: relative;
    background: $bg-card;
    border: 1px solid $border-color;
    border-radius: $radius-xl;
    overflow: hidden;
    
    &-header {
      position: relative;
    }
    
    &-image {
      position: relative;
      width: 100%;
      height: 180px;
      overflow: hidden;
      
      @include mobile {
        height: 140px;
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform $transition-slow;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
    }
    
    &-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 0%, rgba($bg-primary, 0.8) 100%);
      @include flex-center;
      opacity: 0;
      transition: opacity $transition-normal;
      
      .projects__card-image:hover & {
        opacity: 1;
      }
    }
    
    &-badge {
      padding: $spacing-sm $spacing-md;
      background: rgba($primary-color, 0.2);
      border: 1px solid $primary-color;
      border-radius: $radius-md;
      color: $primary-color;
      font-size: $font-size-sm;
      font-weight: 500;
    }
    
    &-body {
      padding: $spacing-xl;
    }
    
    &-meta {
      margin-bottom: $spacing-lg;
    }
    
    &-title {
      font-size: $font-size-2xl;
      font-weight: 700;
      color: $text-primary;
      margin-bottom: $spacing-xs;
      
    }
    
    &-subtitle {
      font-size: $font-size-sm;
      color: $primary-color;
      font-family: $font-mono;
    }
    
    &-desc {
      font-size: $font-size-base;
      color: $text-secondary;
      line-height: $line-height-relaxed;
      margin-bottom: $spacing-xl;
      
    }
    
    &-section {
      margin-bottom: $spacing-lg;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      &-title {
        display: flex;
        align-items: center;
        gap: $spacing-sm;
        font-size: $font-size-sm;
        font-weight: 600;
        color: $text-primary;
        margin-bottom: $spacing-md;
        text-transform: uppercase;
        letter-spacing: 1px;
        
        svg {
          width: 16px;
          height: 16px;
          color: $primary-color;
        }
      }
    }
    
    &-highlights {
      display: flex;
      flex-direction: column;
      gap: $spacing-md;
    }
    
    &-highlight {
      display: flex;
      align-items: flex-start;
      gap: $spacing-sm;
      font-size: $font-size-sm;
      color: $text-secondary;
      line-height: $line-height-normal;
      
      &-dot {
        flex-shrink: 0;
        width: 6px;
        height: 6px;
        margin-top: 6px;
        background: $primary-color;
        border-radius: 50%;
        box-shadow: 0 0 6px $primary-glow;
      }
    }
    
    &-techs {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-sm;
    }
    
    &-tech {
      padding: $spacing-xs $spacing-sm;
      background: rgba($primary-color, 0.1);
      border: 1px solid rgba($primary-color, 0.2);
      border-radius: $radius-sm;
      color: $primary-color;
      font-size: $font-size-xs;
      font-family: $font-mono;
      transition: all $transition-fast;
      
      &:hover {
        background: rgba($primary-color, 0.2);
        border-color: $primary-color;
      }
    }
  }
  
  &__indicator {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-top: $spacing-xl;
    padding-top: $spacing-xl;
    border-top: 1px solid $border-color;
    
    &-track {
      flex: 1;
      height: 4px;
      background: $border-color;
      border-radius: 2px;
      overflow: hidden;
    }
    
    &-progress {
      height: 100%;
      background: linear-gradient(90deg, $primary-color 0%, $accent-color 100%);
      border-radius: 2px;
      transition: width $transition-normal;
    }
    
    &-text {
      font-size: $font-size-sm;
      font-family: $font-mono;
      color: $text-muted;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
