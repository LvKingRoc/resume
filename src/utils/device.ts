import { ref, onMounted, onUnmounted } from 'vue'

// 移动端断点
const MOBILE_BREAKPOINT = 768

// 检测是否为移动设备
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  // 通过 UA 检测
  const userAgent = navigator.userAgent.toLowerCase()
  const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone']
  const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword))
  
  // 通过屏幕宽度检测
  const isMobileWidth = window.innerWidth < MOBILE_BREAKPOINT
  
  return isMobileUA || isMobileWidth
}

// 响应式设备检测 Hook
export function useDevice() {
  const isMobile = ref(false)
  
  const checkDevice = () => {
    isMobile.value = isMobileDevice()
  }
  
  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice)
  })
  
  return {
    isMobile
  }
}
