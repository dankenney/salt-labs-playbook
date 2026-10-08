import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/**
 * Playbook metadata. Every page MUST declare `reviewed` (the build fails otherwise).
 * See MAINTAINING.md for the meaning of each field.
 */
export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/** Date a human last checked this page end to end (YYYY-MM-DD). Required. */
				reviewed: z.coerce.date(),
				/** Role or person accountable for the page. */
				owner: z.string().default('Playbook maintainers'),
				/** Lowercase, hyphenated tags. Must exist in src/data/tags.ts. */
				tags: z.array(z.string()).default([]),
				/** draft = usable but incomplete; stable = reviewed and in use; placeholder = structure only. */
				status: z.enum(['draft', 'stable', 'placeholder']).default('draft'),
				/** Months until the page is due for review. Regulatory pages: 1. Default 6. */
				reviewEveryMonths: z.number().int().positive().default(6),
			}),
		}),
	}),
};
