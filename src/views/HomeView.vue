<script setup lang="ts">
import { onMounted } from 'vue'
import { useDevice } from '@/utils/device'
import { preloadAllImages } from '@/utils/imagePreloader'
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import MobileApp from '@/components/mobile/MobileApp.vue'

const { isMobile } = useDevice()

// 页面加载后开始预加载所有图片
onMounted(() => {
  // 延迟1秒后开始预加载，避免阻塞首屏渲染
  setTimeout(() => {
    preloadAllImages()
  }, 1000)
})
</script>

<template>
  <!-- 移动端 -->
  <MobileApp v-if="isMobile" />
  
  <!-- PC端 -->
  <div v-else class="app">
    <AppHeader />
    <main class="main">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <AboutSection />
    </main>
    <AppFooter />
  </div>
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
