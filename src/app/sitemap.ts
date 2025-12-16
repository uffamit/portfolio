import type { MetadataRoute } from 'next';

const siteUrl = 'https://amitdevx.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/notes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}