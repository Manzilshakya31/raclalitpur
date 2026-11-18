import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { projects } from "@/lib/projects";
import { teamMembers } from "@/lib/members";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/join", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...teamMembers.map((member) => ({
      path: `/about/team/${member.slug}`,
      priority: 0.4,
      changeFrequency: "yearly" as const,
    })),
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(
      path ? (path.endsWith("/") ? path : `${path}/`) : "/",
      SITE_URL,
    ).toString(),
    changeFrequency,
    priority,
  }));
}
