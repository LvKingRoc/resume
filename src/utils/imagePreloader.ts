/**
 * 图片预加载工具
 * 页面加载时后台预加载所有项目图片，用户浏览时直接从缓存读取
 */

// 所有项目图片路径
const projectImages: Record<string, string[]> = {
  REEM: [
    '/images/REEM/1.png',
    '/images/REEM/2.png',
    '/images/REEM/3.png',
    '/images/REEM/4.png',
    '/images/REEM/5.png',
    '/images/REEM/6.png',
  ],
  OfferHub: [
    '/images/OfferHub/1.png',
    '/images/OfferHub/2.png',
    '/images/OfferHub/3.png',
    '/images/OfferHub/4.png',
    '/images/OfferHub/5.png',
    '/images/OfferHub/6.png',
    '/images/OfferHub/7.png',
    '/images/OfferHub/8.png',
    '/images/OfferHub/9.png',
    '/images/OfferHub/10.png',
    '/images/OfferHub/11.png',
    '/images/OfferHub/12.png',
    '/images/OfferHub/13.png',
  ],
  daowei: [
    '/images/daowei/1.png',
    '/images/daowei/2.png',
    '/images/daowei/3.png',
    '/images/daowei/4.png',
    '/images/daowei/5.png',
    '/images/daowei/6.png',
    '/images/daowei/7.png',
    '/images/daowei/8.png',
    '/images/daowei/9.png',
  ],
  EpClient: [
    '/images/EpClient/1.png',
    '/images/EpClient/2.png',
    '/images/EpClient/3.png',
    '/images/EpClient/4.png',
    '/images/EpClient/5.png',
    '/images/EpClient/6.png',
  ],
}

// 预加载单张图片
function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve() // 失败也继续
    img.src = src
  })
}

// 批量预加载（控制并发数）
async function preloadBatch(urls: string[], concurrency = 3): Promise<void> {
  const queue = [...urls]
  const workers: Promise<void>[] = []

  for (let i = 0; i < concurrency; i++) {
    workers.push(
      (async () => {
        while (queue.length > 0) {
          const url = queue.shift()
          if (url) {
            await preloadImage(url)
          }
        }
      })()
    )
  }

  await Promise.all(workers)
}

// 获取所有图片URL（扁平化）
function getAllImageUrls(): string[] {
  return Object.values(projectImages).flat()
}

// 按优先级预加载（先加载preview，再加载其他）
export async function preloadAllImages(): Promise<void> {
  const allUrls = getAllImageUrls()
  
  // 第一优先级：预加载preview（首屏大图）
  await preloadImage('/images/preview.jpg')
  console.log('[ImagePreloader] preview.jpg 预加载完成')
  
  // 第二优先级：预加载每个项目的第一张图片
  const firstImages = Object.values(projectImages).map(imgs => imgs[0])
  await preloadBatch(firstImages, 4)
  
  // 第三优先级：预加载剩余图片
  const restImages = allUrls.filter(url => !firstImages.includes(url))
  await preloadBatch(restImages, 3)
  
  console.log(`[ImagePreloader] 全部预加载完成: ${allUrls.length + 1} 张图片`)
}

// 预加载指定项目的图片
export async function preloadProjectImages(projectId: string): Promise<void> {
  const urls = projectImages[projectId]
  if (urls) {
    await preloadBatch(urls, 4)
  }
}

// 导出图片路径供其他模块使用
export { projectImages }
