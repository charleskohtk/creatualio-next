import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://creatual.io";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, priority: 1 },
    { url: `${baseUrl}/focus`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/get-in-touch`, lastModified, priority: 0.8 },
  ];
}
