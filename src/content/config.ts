import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		role: z.string().optional().default(""),
		techStack: z.array(z.string()).optional().default([]),
		repoUrl: z.string().optional().default(""),
		demoUrl: z.string().optional().default(""),
		highlights: z.array(z.string()).optional().default([]),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const achievementsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		rank: z.string(),
		eventType: z.string(),
		writeupUrl: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection = defineCollection({
	schema: z.object({}),
});

export const collections = {
	projects: projectsCollection,
	achievements: achievementsCollection,
	spec: specCollection,
};
