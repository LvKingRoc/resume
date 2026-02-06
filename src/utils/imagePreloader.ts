/**
 * 图片预加载工具
 * 分优先级预加载：首屏 > 每个项目首图 > 空闲时加载剩余
 */

// 所有项目图片路径
const projectImages: Record<string, string[]> = {
  REEM: [
    '/images/REEM/1.webp',
    '/images/REEM/2.webp',
    '/images/REEM/3.webp',
    '/images/REEM/4.webp',
    '/images/REEM/5.webp',
    '/images/REEM/6.webp',
  ],
  OfferHub: [
    '/images/OfferHub/1.webp',
    '/images/OfferHub/2.webp',
    '/images/OfferHub/3.webp',
    '/images/OfferHub/4.webp',
    '/images/OfferHub/5.webp',
    '/images/OfferHub/6.webp',
    '/images/OfferHub/7.webp',
    '/images/OfferHub/8.webp',
    '/images/OfferHub/9.webp',
    '/images/OfferHub/10.webp',
    '/images/OfferHub/11.webp',
    '/images/OfferHub/12.webp',
    '/images/OfferHub/13.webp',
  ],
  daowei: [
    '/images/daowei/1.webp',
    '/images/daowei/2.webp',
    '/images/daowei/3.webp',
    '/images/daowei/4.webp',
    '/images/daowei/5.webp',
    '/images/daowei/6.webp',
    '/images/daowei/7.webp',
    '/images/daowei/8.webp',
    '/images/daowei/9.webp',
  ],
  EpClient: [
    '/images/EpClient/1.webp',
    '/images/EpClient/2.webp',
    '/images/EpClient/3.webp',
    '/images/EpClient/4.webp',
    '/images/EpClient/5.webp',
    '/images/EpClient/6.webp',
  ],
}

// 已加载缓存，避免重复请求
const loadedCache = new Set<string>()

// 预加载单张图片
function preloadImage(src: string): Promise<void> {
  if (loadedCache.has(src)) return Promise.resolve()
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => { loadedCache.add(src); resolve() }
    img.onerror = () => resolve()
    img.src = src
  })
}

// 批量预加载（控制并发数）
async function preloadBatch(urls: string[], concurrency = 2): Promise<void> {
  const queue = urls.filter(u => !loadedCache.has(u))
  const workers: Promise<void>[] = []

  for (let i = 0; i < concurrency; i++) {
    workers.push(
      (async () => {
        while (queue.length > 0) {
          const url = queue.shift()
          if (url) await preloadImage(url)
        }
      })()
    )
  }

  await Promise.all(workers)
}

// 按优先级预加载（页面打开即刻开始）
export async function preloadAllImages(): Promise<void> {
  // 第一优先级：预加载preview（首屏大图）
  await preloadImage('/images/preview.webp')

  // 第二优先级：每个项目的首图（缩略图）
  const firstImages = Object.values(projectImages).map(imgs => imgs[0])
  await preloadBatch(firstImages, 4)

  // 第三优先级：立即加载剩余所有图片
  const allUrls = Object.values(projectImages).flat()
  const restImages = allUrls.filter(url => !loadedCache.has(url))
  await preloadBatch(restImages, 3)
}

// 预加载指定项目的图片（用户切换项目时调用）
export async function preloadProjectImages(projectId: string): Promise<void> {
  const urls = projectImages[projectId]
  if (urls) {
    await preloadBatch(urls, 3)
  }
}

// 导出图片路径供其他模块使用
export { projectImages }
