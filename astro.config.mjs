// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [sitemap(), UnoCSS({ injectReset: true })],
	site:'https://pablofergus.com',
	output: 'static',
	outDir: './docs',
	build: {
		assets: 'astro'
	},
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
	},

});
