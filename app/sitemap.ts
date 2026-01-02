import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://india-calculators.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/emi-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sip-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/income-tax-calculator`,
      lastModified: new Date(),
    },
  ];
}
