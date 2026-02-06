/**
 * 将 public/images 下所有 PNG/JPG 图片转换为 WebP (quality 80)
 * 转换完成后删除原始文件
 */
import sharp from 'sharp'
import { readdir, stat, unlink } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const imagesDir = join(__dirname, '..', 'public', 'images')

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await getAllImages(fullPath))
    } else {
      const ext = extname(entry.name).toLowerCase()
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        files.push(fullPath)
      }
    }
  }
  return files
}

async function convert() {
  const images = await getAllImages(imagesDir)
  console.log(`找到 ${images.length} 张图片待转换\n`)

  let totalOriginal = 0
  let totalWebp = 0

  for (const imgPath of images) {
    const ext = extname(imgPath)
    const webpPath = imgPath.replace(ext, '.webp')
    const name = imgPath.replace(imagesDir, '').replace(/\\/g, '/')

    const originalStat = await stat(imgPath)
    const originalSize = originalStat.size

    await sharp(imgPath)
      .webp({ quality: 80 })
      .toFile(webpPath)

    const webpStat = await stat(webpPath)
    const webpSize = webpStat.size
    const saved = ((1 - webpSize / originalSize) * 100).toFixed(1)

    totalOriginal += originalSize
    totalWebp += webpSize

    console.log(`${name}: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (节省 ${saved}%)`)

    // 删除原始文件
    await unlink(imgPath)
  }

  console.log(`\n总计: ${(totalOriginal / 1024).toFixed(1)}KB → ${(totalWebp / 1024).toFixed(1)}KB (节省 ${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}%)`)
}

convert().catch(console.error)
