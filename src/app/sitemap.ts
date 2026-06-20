import type { MetadataRoute } from "next";

const siteUrl = "https://dewmindi.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const projects = [
        { name: "Ceylon Herbs E-commerce Website", slug: "ceylon-herbs", type: "WebApplication" },
        { name: "Milano Cafe Bar Restaurant Website", slug: "milano-cafe-bar", type: "WebApplication" },
        { name: "JR Global Pathways Consulting", slug: "jr-global-pathways", type: "WebApplication" },
    ];

    const projectUrls = projects.map((p) => ({
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
            url: `${siteUrl}/services`,
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
            url: `${siteUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        ...projectUrls,
    ];
}