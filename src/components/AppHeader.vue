<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '@/data/resume'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // 更新当前激活的导航项
  const sections = navItems.map(item => document.getElementById(item.id))
  const scrollPosition = window.scrollY + 100
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = navItems[i].id
      break
    }
  }
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container">
      <div class="header__logo" @click="scrollToSection('hero')">
        <span class="header__logo-icon">&lt;/&gt;</span>
        <span class="header__logo-text">LJP</span>
      </div>
      
      <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
        <ul class="header__nav-list">
          <li 
            v-for="item in navItems" 
            :key="item.id"
            class="header__nav-item"
          >
            <button 
              class="header__nav-link"
              :class="{ 'header__nav-link--active': activeSection === item.id }"
              @click="scrollToSection(item.id)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>
      
      <button 
        class="header__mobile-toggle"
        :class="{ 'header__mobile-toggle--open': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-fixed;
  padding: $spacing-md 0;
  transition: all $transition-normal;
  
  &--scrolled {
    background: rgba($bg-primary, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid $border-color;
    padding: $spacing-sm 0;
  }
  
  &__container {
    @include flex-between;
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 $container-padding;
    
    @include mobile {
      padding: 0 $spacing-md;
    }
  }
  
  &__logo {
    @include flex-center;
    gap: $spacing-sm;
    cursor: pointer;
    transition: transform $transition-fast;
    
    &:hover {
      transform: scale(1.05);
    }
    
    &-icon {
      font-family: $font-mono;
      font-size: $font-size-xl;
      font-weight: 700;
      @include glow-text;
    }
    
    &-text {
      font-size: $font-size-lg;
      font-weight: 600;
      color: $text-primary;
    }
  }
  
  &__nav {
    &-list {
      display: flex;
      align-items: center;
      gap: $spacing-xs;
      
    }
    
    
    &-link {
      position: relative;
      padding: $spacing-sm $spacing-md;
      color: $text-secondary;
      font-size: $font-size-sm;
      font-weight: 500;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: color $transition-fast;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: $primary-color;
        transform: translateX(-50%);
        transition: width $transition-fast;
        
      }
      
      &:hover {
        color: $text-primary;
        
        &::after {
          width: 70%;
        }
      }
      
      &--active {
        color: $primary-color;
        
        &::after {
          width: 70%;
        }
        
      }
    }
  }
  
  &__mobile-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    
    @include mobile {
      display: flex;
    }
    
    span {
      display: block;
      width: 100%;
      height: 2px;
      background: $text-primary;
      transition: all $transition-fast;
    }
    
    &--open {
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      
      span:nth-child(2) {
        opacity: 0;
      }
      
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    }
  }
}
</style>
