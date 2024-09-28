import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const works = await getCollection('works');
  return rss({
    title: 'Brutal Blog',
    description: 'Brutal is a theme for Astro',
    stylesheet: false,
    site: context.site,
    items: works.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/works/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://brutal.elian.codes',
  });
}
