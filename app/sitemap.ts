import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.remitcache.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.remitcache.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.remitcache.com/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    // Add more URLs as needed
  ]
}