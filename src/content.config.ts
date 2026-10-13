import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      topic: z.string(),
      /** Display order on the blog index (lower first). */
      order: z.number(),
      cover: image(),
      coverAlt: z.string(),
      related: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
