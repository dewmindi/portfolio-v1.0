import type { MetadataRoute } from "next";
import { featuredProjects } from "../../projects";

const siteUrl = "https://dewmindi.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const projectUrls = featuredProjects.map((p) => ({
        url: `${siteUrl}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/web-development-service-srilanka`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/web-development-projects`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${siteUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        ...projectUrls,
    ];
}