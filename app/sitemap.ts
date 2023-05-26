import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://smsconstructionandremodeling.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://smsconstructionandremodeling.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://smsconstructionandremodeling.com/gallery',
      lastModified: new Date(),
    },
    {
        url: 'https://smsconstructionandremodeling.com/contact',
        lastModified: new Date(),
    },
  ];
}