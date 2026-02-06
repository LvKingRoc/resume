<script setup lang="ts">
import { ref } from 'vue'
import { personalInfo, education, skillCategories, projects, experience, selfEvaluation, honors, campusRoles } from '@/data/resume'
import type { SkillItem } from '@/types'

const expandedProject = ref<number | null>(null)
const showImageModal = ref(false)
const currentImages = ref<string[]>([])
const currentImageIndex = ref(0)

// 复制状态
const copiedField = ref<string | null>(null)

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

// 复制到剪贴板（兼容移动端）
const copyToClipboard = async (text: string, field: string) => {
  try {
    // 优先使用现代API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      // Fallback: 使用临时textarea
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
    copiedField.value = field
    showToast('复制成功', 'success')
    setTimeout(() => {
      copiedField.value = null
    }, 1500)
  } catch (err) {
    console.error('复制失败:', err)
    showToast('复制失败', 'error')
  }
}

const toggleProject = (id: number) => {
  expandedProject.value = expandedProject.value === id ? null : id
}

const getSkillName = (skill: string | SkillItem): string => {
  return typeof skill === 'string' ? skill : skill.name
}

const isAdvanced = (skill: string | SkillItem): boolean => {
  return typeof skill === 'object' && skill.advanced === true
}

const openImageModal = (images: string[], index: number = 0) => {
  currentImages.value = images
  currentImageIndex.value = index
  showImageModal.value = true
}

const closeImageModal = () => {
  showImageModal.value = false
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value > 0 
    ? currentImageIndex.value - 1 
    : currentImages.value.length - 1
}

const nextImage = () => {
  currentImageIndex.value = currentImageIndex.value < currentImages.value.length - 1 
    ? currentImageIndex.value + 1 
    : 0
}
</script>

<template>
  <div class="mobile-app">
    <!-- 顶部导航 -->
    <header class="m-header">
      <span class="m-header__title">吕金鹏的个人简历</span>
      <span class="m-header__tip">建议使用PC端查看更佳</span>
    </header>

    <!-- 主内容区 -->
    <main class="m-main">
      <!-- Hero 区域 - 左右布局 -->
      <section id="m-hero" class="m-section m-hero">
        <div class="m-hero__top">
          <div class="m-hero__left">
            <div class="m-hero__avatar-wrapper">
              <div class="m-hero__avatar-ring"></div>
              <div class="m-hero__avatar-ring m-hero__avatar-ring--2"></div>
              <div class="m-hero__avatar">
                <img 
                  v-if="personalInfo.avatar" 
                  :src="personalInfo.avatar" 
                  :alt="personalInfo.name"
                  loading="eager"
                  class="m-hero__avatar-img"
                />
                <div v-else class="m-hero__avatar-inner">
                  <span class="m-hero__age">{{ personalInfo.age }}</span>
                  <span class="m-hero__age-label">岁</span>
                </div>
              </div>
            </div>
          </div>
          <div class="m-hero__right">
            <h1 class="m-hero__name">{{ personalInfo.name }}</h1>
            <p class="m-hero__title">{{ personalInfo.title }}</p>
            <div class="m-hero__contact">
              <div 
                class="m-hero__contact-item" 
                :class="{ 'm-hero__contact-item--copied': copiedField === 'phone' }"
                @click="copyToClipboard(personalInfo.phone, 'phone')"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{{ personalInfo.phone }}（微信同号）</span>
                <span class="m-hero__contact-copy">
                  <svg v-if="copiedField === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </span>
              </div>
              <div 
                class="m-hero__contact-item"
                :class="{ 'm-hero__contact-item--copied': copiedField === 'email' }"
                @click="copyToClipboard(personalInfo.email, 'email')"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>{{ personalInfo.email }}</span>
                <span class="m-hero__contact-copy">
                  <svg v-if="copiedField === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-hero__print-btns">
          <a href="/print-frontend" target="_blank" class="m-hero__print-btn">前端纸质简历</a>
          <a href="/print-backend" target="_blank" class="m-hero__print-btn m-hero__print-btn--backend">后端纸质简历</a>
        </div>
        <div class="m-hero__stats">
          <div class="m-hero__stat">
            <span class="m-hero__stat-value">6</span>
            <span class="m-hero__stat-label">项目</span>
          </div>
          <div class="m-hero__stat">
            <span class="m-hero__stat-value">3</span>
            <span class="m-hero__stat-label">国奖</span>
          </div>
          <div class="m-hero__stat">
            <span class="m-hero__stat-value">全栈</span>
            <span class="m-hero__stat-label">能力</span>
          </div>
        </div>
      </section>

      <!-- 技能区域 -->
      <section id="m-skills" class="m-section">
        <h2 class="m-section__title">技术技能</h2>
        <div class="m-skills">
          <div v-for="category in skillCategories" :key="category.name" class="m-skills__category">
            <h3 class="m-skills__category-name">{{ category.name }}</h3>
            <div class="m-skills__tags">
              <span 
                v-for="skill in category.skills" 
                :key="getSkillName(skill)" 
                class="m-skills__tag"
                :class="{ 'm-skills__tag--advanced': isAdvanced(skill) }"
              >
                {{ getSkillName(skill) }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 项目区域 -->
      <section id="m-projects" class="m-section">
        <h2 class="m-section__title">项目经历</h2>
        <div class="m-projects">
          <div 
            v-for="project in projects" 
            :key="project.id" 
            class="m-project"
            :class="{ 'm-project--expanded': expandedProject === project.id }"
          >
            <div class="m-project__header" @click="toggleProject(project.id)">
              <div class="m-project__info">
                <h3 class="m-project__name">{{ project.name }}</h3>
                <span class="m-project__period">{{ project.period }}</span>
              </div>
              <span class="m-project__toggle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline :points="expandedProject === project.id ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"/>
                </svg>
              </span>
            </div>
            
            <div v-show="expandedProject === project.id" class="m-project__body">
              <!-- 项目图片 -->
              <div v-if="project.images && project.images.length" class="m-project__images">
                <img 
                  v-for="(img, imgIdx) in project.images.slice(0, 3)" 
                  :key="imgIdx"
                  :src="img" 
                  :alt="project.name"
                  class="m-project__image"
                  loading="eager"
                  @click="openImageModal(project.images, imgIdx)"
                />
                <div 
                  v-if="project.images.length > 3" 
                  class="m-project__image-more"
                  @click="openImageModal(project.images, 3)"
                >
                  +{{ project.images.length - 3 }}
                </div>
              </div>
              
              <p class="m-project__desc">{{ project.description }}</p>
              
              <div class="m-project__section">
                <h4 class="m-project__section-title">核心亮点</h4>
                <ul class="m-project__highlights">
                  <li v-for="(highlight, idx) in project.highlights" :key="idx">
                    {{ highlight }}
                  </li>
                </ul>
              </div>
              
              <div class="m-project__section">
                <h4 class="m-project__section-title">技术栈</h4>
                <div class="m-project__techs">
                  <span v-for="tech in project.techStack" :key="tech" class="m-project__tech">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 教育区域 -->
      <section id="m-education" class="m-section">
        <h2 class="m-section__title">教育背景</h2>
        <div class="m-education">
          <div class="m-education__header">
            <h3 class="m-education__school">{{ education.school }}</h3>
            <span class="m-education__period">{{ education.period }}</span>
          </div>
          <div class="m-education__meta">
            <span class="m-education__major">{{ education.major }}</span>
            <span class="m-education__degree">{{ education.degree }}</span>
          </div>
          <div class="m-education__courses">
            <div class="m-education__course-group">
              <span class="m-education__course-label">主修：</span>
              <span class="m-education__course-list">{{ education.mainCourses.join('、') }}</span>
            </div>
            <div class="m-education__course-group">
              <span class="m-education__course-label">辅修：</span>
              <span class="m-education__course-list">{{ education.minorCourses.join('、') }}</span>
            </div>
          </div>
          <!-- 个人荣誉 -->
          <div class="m-education__honors">
            <span class="m-education__course-label">★ 个人荣誉：</span>
            <div class="m-education__honors-list">
              <span v-for="honor in honors" :key="honor" class="m-education__honor-tag">{{ honor }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 经历区域 -->
      <section id="m-experience" class="m-section">
        <h2 class="m-section__title">校园经历</h2>
        
        <!-- 学校信息 + 亮点统计 -->
        <div class="m-experience__card">
          <div class="m-experience__school-header">
            <span class="m-experience__school-name">{{ experience.school }}</span>
            <span class="m-experience__school-period">{{ experience.period }}</span>
          </div>
          <span class="m-experience__school-role">{{ experience.role }}</span>
          
          <div class="m-experience__highlights">
            <div class="m-experience__highlight">
              <span class="m-experience__highlight-value">3次</span>
              <span class="m-experience__highlight-label">国家奖学金</span>
            </div>
            <div class="m-experience__highlight">
              <span class="m-experience__highlight-value">省级</span>
              <span class="m-experience__highlight-label">二等奖</span>
            </div>
            <div class="m-experience__highlight">
              <span class="m-experience__highlight-value">6个</span>
              <span class="m-experience__highlight-label">完整项目</span>
            </div>
          </div>
        </div>
        
        <!-- 角色卡片 -->
        <div class="m-experience__roles">
          <div v-for="(role, index) in campusRoles" :key="index" class="m-experience__role-card">
            <div class="m-experience__role-header">
              <span class="m-experience__role-title">{{ role.title }}</span>
              <span class="m-experience__role-period">{{ role.period }}</span>
            </div>
            <ul class="m-experience__role-list">
              <li v-for="(achievement, idx) in role.achievements" :key="idx">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 关于区域 -->
      <section id="m-about" class="m-section">
        <h2 class="m-section__title">关于我</h2>
        
        <!-- 核心优势 -->
        <div class="m-about__strengths">
          <h3 class="m-about__strengths-title">核心优势</h3>
          <div class="m-about__strengths-grid">
            <div class="m-about__strength-item">
              <span class="m-about__strength-item-icon">01</span>
              <span>全栈开发能力</span>
            </div>
            <div class="m-about__strength-item">
              <span class="m-about__strength-item-icon">02</span>
              <span>高效学习能力</span>
            </div>
            <div class="m-about__strength-item">
              <span class="m-about__strength-item-icon">03</span>
              <span>团队协作沟通</span>
            </div>
            <div class="m-about__strength-item">
              <span class="m-about__strength-item-icon">04</span>
              <span>技术热情驱动</span>
            </div>
          </div>
        </div>
        
        <!-- 自我评价 -->
        <div class="m-about__eval">
          <h3 class="m-about__eval-title">自我评价</h3>
          <div class="m-about__eval-content">
            <p v-for="(para, idx) in selfEvaluation" :key="idx" class="m-about__eval-para">
              {{ para }}
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- 图片弹窗 -->
    <div v-if="showImageModal" class="m-modal" @click.self="closeImageModal">
      <div class="m-modal__content">
        <button class="m-modal__close" @click="closeImageModal">×</button>
        <img :src="currentImages[currentImageIndex]" class="m-modal__image" loading="eager" />
        <div class="m-modal__nav">
          <button class="m-modal__nav-btn" @click="prevImage">‹</button>
          <span class="m-modal__counter">{{ currentImageIndex + 1 }} / {{ currentImages.length }}</span>
          <button class="m-modal__nav-btn" @click="nextImage">›</button>
        </div>
      </div>
    </div>

    <!-- Toast提示 -->
    <Transition name="toast">
      <div v-if="toastVisible" class="m-toast" :class="'m-toast--' + toastType">
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
  </div>
</template>

<style lang="scss" scoped>
@use './MobileApp.scss';
</style>
