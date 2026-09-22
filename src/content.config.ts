import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.enum([
				'dor-e-coluna',
				'fisioterapia-esportiva',
				'mobilidade-e-exercicios',
				'reabilitacao',
				'saude-e-prevencao',
			]),
			// Every post needs a hero image and 800+ words — enforced here and by
			// scripts/check-content-standards.mjs, which runs before every build.
			heroImage: image(),
			heroImageAlt: z.string().optional(),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
