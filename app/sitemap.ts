import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `https://instaprotek.com/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: "https://instaprotek.com/enterprise",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/retail",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/technology-overview",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/partner-with-us",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/support",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: "https://instaprotek.com/privacy",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },

    {
      url: "https://instaprotek.com/articles",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/articles/instaprotek-unveils-patented-navigation-system-with-groundbreaking-analytics-capabilities",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/articles/instaProtek-rebrands-to-reflect-expanded-vision-and-services",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/terms/retail",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/terms/enterprise",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
