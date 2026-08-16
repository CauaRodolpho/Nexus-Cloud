import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/pricing',
    '/vps-linux',
    '/vps-windows',
    '/cloud-hosting',
    '/support',
    '/blog',
    '/docs',
    '/login',
    '/register',
  ]

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
