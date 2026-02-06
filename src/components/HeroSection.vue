<script setup lang="ts">
import { ref } from 'vue'
import { personalInfo } from '@/data/resume'

// 联系信息（电话显示微信同号，但复制时只复制号码）
const contactItems = [
  { icon: 'phone', label: '电话', value: personalInfo.phone, displayValue: personalInfo.phone + '（微信同号）', copyValue: personalInfo.phone },
  { icon: 'email', label: '邮箱', value: personalInfo.email, displayValue: personalInfo.email, copyValue: personalInfo.email }
]

// 复制状态
const copiedIndex = ref<number | null>(null)

// Toast状态
const toastMessage = ref('')
const toastVisible = ref(false)
const toastType = ref<'success' | 'error'>('success')

const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  toastMessage.value = message
  toastType.value = type
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 1000)
}

// 复制到剪贴板（兼容性处理）
const copyToClipboard = async (text: string, index: number) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      textarea.style.top = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copiedIndex.value = index
    showToast('复制成功', 'success')
    setTimeout(() => {
      copiedIndex.value = null
    }, 1500)
  } catch (err) {
    console.error('复制失败:', err)
    showToast('复制失败', 'error')
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__bg">
      <div class="hero__grid"></div>
      <div class="hero__glow hero__glow--1"></div>
      <div class="hero__glow hero__glow--2"></div>
    </div>
    
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__greeting">
          <span class="hero__greeting-line"></span>
          <span class="hero__greeting-text">Hello, I'm</span>
        </div>
        
        <h1 class="hero__name">{{ personalInfo.name }}</h1>
        
        <div class="hero__title">
          <span class="hero__title-bracket">&lt;</span>
          <span class="hero__title-text">{{ personalInfo.title }}</span>
          <span class="hero__title-bracket">/&gt;</span>
        </div>
        
        <p class="hero__description">
          专注于构建高性能、全栈Web应用，熟练掌握Spring Boot后端与Vue3前端技术栈
        </p>
        
        <div class="hero__contact">
          <div 
            v-for="(item, index) in contactItems" 
            :key="item.icon"
            class="hero__contact-item"
            :class="{ 'hero__contact-item--copied': copiedIndex === index }"
            @click="copyToClipboard(item.copyValue, index)"
            :title="`点击复制${item.label}`"
          >
            <span class="hero__contact-icon">
              <svg v-if="item.icon === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <svg v-else-if="item.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <span class="hero__contact-value">{{ item.displayValue }}</span>
            <span class="hero__contact-copy">
              <svg v-if="copiedIndex === index" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </span>
          </div>
        </div>
        
        <div class="hero__actions">
          <a href="#skills" class="hero__btn hero__btn--primary">
            开始查看
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
          <a href="/print-frontend" target="_blank" class="hero__btn hero__btn--outline">
            前端纸质简历
          </a>
          <a href="/print-backend" target="_blank" class="hero__btn hero__btn--outline">
            后端纸质简历
          </a>
        </div>
      </div>
      
      <div class="hero__visual">
        <div class="hero__avatar-wrapper">
          <div class="hero__avatar-ring"></div>
          <div class="hero__avatar-ring hero__avatar-ring--2"></div>
          <div class="hero__avatar">
            <img 
              v-if="personalInfo.avatar" 
              :src="personalInfo.avatar" 
              :alt="personalInfo.name"
              loading="eager"
              class="hero__avatar-img"
            />
            <div v-else class="hero__avatar-placeholder">
              <span>{{ personalInfo.age }}</span>
              <span>岁</span>
            </div>
          </div>
        </div>
        
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-value">6</span>
            <span class="hero__stat-label">完整项目</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value">3</span>
            <span class="hero__stat-label">国家奖学金</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value">全栈</span>
            <span class="hero__stat-label">开发能力</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hero__scroll">
      <span>向下滚动</span>
      <div class="hero__scroll-indicator">
        <div class="hero__scroll-dot"></div>
      </div>
    </div>

    <!-- Toast提示 -->
    <Transition name="toast">
      <div v-if="toastVisible" class="hero__toast" :class="'hero__toast--' + toastType">
        <svg v-if="toastType === 'success'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0 60px;
  overflow: hidden;
  
  &__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  
  &__grid {
    position: absolute;
    inset: 0;
    @include grid-background;
    opacity: 0.5;
  }
  
  &__glow {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
    
    &--1 {
      top: -200px;
      right: -200px;
      background: $primary-color;
    }
    
    &--2 {
      bottom: -200px;
      left: -200px;
      background: $accent-color;
    }
  }
  
  &__container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-3xl;
    align-items: center;
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 $container-padding;
    
    @include tablet {
      grid-template-columns: 1fr;
      gap: $spacing-xl;
    }
  }
  
  &__content {
    @include tablet {
      order: 2;
      text-align: center;
    }
  }
  
  &__greeting {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
    
    @include tablet {
      justify-content: center;
    }
    
    &-line {
      width: 40px;
      height: 2px;
      background: $primary-color;
    }
    
    &-text {
      font-size: $font-size-sm;
      color: $text-secondary;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  
  &__name {
    font-size: $font-size-5xl;
    font-weight: 800;
    line-height: $line-height-tight;
    margin-bottom: $spacing-md;
    @include gradient-text;
    
    @include tablet {
      font-size: $font-size-4xl;
    }
  }
  
  &__title {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-lg;
    font-family: $font-mono;
    
    @include tablet {
      justify-content: center;
    }
    
    &-bracket {
      color: $primary-color;
      font-size: $font-size-xl;
      font-weight: 600;
    }
    
    &-text {
      font-size: $font-size-xl;
      color: $text-primary;
    }
  }
  
  &__description {
    font-size: $font-size-lg;
    color: $text-secondary;
    line-height: $line-height-relaxed;
    margin-bottom: $spacing-xl;
    max-width: 500px;
    
    @include tablet {
      margin: 0 auto $spacing-xl;
    }
  }
  
  &__contact {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
    margin-bottom: $spacing-xl;
    
    @include tablet {
      align-items: center;
    }
    
    &-item {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      color: $text-secondary;
      font-size: $font-size-sm;
      cursor: pointer;
      padding: $spacing-xs $spacing-sm;
      margin: -$spacing-xs (-$spacing-sm);
      border-radius: $radius-sm;
      transition: all $transition-fast;
      
      &:hover {
        background: rgba($primary-color, 0.1);
        color: $primary-color;
        
        .hero__contact-icon {
          color: $primary-color;
        }
        
        .hero__contact-copy {
          opacity: 1;
        }
      }
      
      &--copied {
        background: rgba($success-color, 0.15);
        color: $success-color;
        
        .hero__contact-icon,
        .hero__contact-copy {
          color: $success-color;
        }
      }
    }
    
    &-icon {
      @include flex-center;
      width: 20px;
      height: 20px;
      color: $primary-color;
      transition: color $transition-fast;
      
      svg {
        width: 16px;
        height: 16px;
      }
    }
    
    &-value {
      font-family: $font-mono;
    }
    
    &-copy {
      @include flex-center;
      width: 16px;
      height: 16px;
      margin-left: auto;
      opacity: 0.3;
      transition: opacity $transition-fast, color $transition-fast;
      
      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
  
  &__actions {
    display: flex;
    gap: $spacing-md;
    
    @include tablet {
      justify-content: center;
    }
  }
  
  &__btn {
    @include flex-center;
    gap: $spacing-sm;
    padding: $spacing-md $spacing-xl;
    font-size: $font-size-base;
    font-weight: 600;
    border-radius: $radius-md;
    transition: all $transition-normal;
    text-decoration: none;
    
    svg {
      width: 18px;
      height: 18px;
      transition: transform $transition-fast;
    }
    
    &--primary {
      background: linear-gradient(135deg, $primary-color 0%, $primary-dark 100%);
      color: $bg-primary;
      
      &:hover {
        box-shadow: $shadow-glow-strong;
        transform: translateY(-2px);
        
        svg {
          transform: translateX(4px);
        }
      }
    }
    
    &--outline {
      border: 1px solid $border-color;
      color: $text-primary;
      background: transparent;
      
      &:hover {
        border-color: $primary-color;
        color: $primary-color;
        background: rgba($primary-color, 0.05);
      }
    }
  }
  
  &__visual {
    position: relative;
    @include flex-center;
    flex-direction: column;
    gap: $spacing-3xl;
    
    @include tablet {
      order: 1;
    }
  }
  
  &__avatar-wrapper {
    position: relative;
    @include flex-center;
  }
  
  &__avatar-ring {
    position: absolute;
    width: 280px;
    height: 280px;
    border: 1px solid rgba($primary-color, 0.2);
    border-radius: 50%;
    animation: rotate 20s linear infinite;
    
    &::before {
      content: '';
      position: absolute;
      top: -4px;
      left: 50%;
      width: 8px;
      height: 8px;
      background: $primary-color;
      border-radius: 50%;
      box-shadow: 0 0 10px $primary-color;
    }
    
    &--2 {
      width: 320px;
      height: 320px;
      border-style: dashed;
      animation-direction: reverse;
      animation-duration: 30s;
    }
    
  }
  
  &__avatar {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: $bg-card;
    border: 2px solid $border-color;
    overflow: hidden;
    
    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    &-placeholder {
      @include flex-center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, $bg-card 0%, $bg-secondary 100%);
      
      span:first-child {
        font-size: $font-size-4xl;
        font-weight: 800;
        @include gradient-text;
      }
      
      span:last-child {
        font-size: $font-size-lg;
        color: $text-secondary;
      }
    }
  }
  
  &__stats {
    display: flex;
    gap: $spacing-xl;
    
  }
  
  &__stat {
    @include flex-column;
    align-items: center;
    gap: $spacing-xs;
    
    &-value {
      font-size: $font-size-2xl;
      font-weight: 700;
      color: $primary-color;
      
    }
    
    &-label {
      font-size: $font-size-xs;
      color: $text-muted;
    }
  }
  
  &__scroll {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    @include flex-column;
    align-items: center;
    gap: $spacing-sm;
    color: $text-muted;
    font-size: $font-size-xs;
    
    &-indicator {
      width: 20px;
      height: 32px;
      border: 1px solid $border-color;
      border-radius: 10px;
      @include flex-center;
      padding-top: 4px;
    }
    
    &-dot {
      width: 4px;
      height: 8px;
      background: $primary-color;
      border-radius: 2px;
      animation: scrollBounce 1.5s ease-in-out infinite;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes scrollBounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.5;
  }
}

// Toast提示
.hero__toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 9999;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  
  &--success svg {
    color: #10b981;
  }
  
  &--error svg {
    color: #ef4444;
  }
}

// Toast动画
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%);
}
</style>
