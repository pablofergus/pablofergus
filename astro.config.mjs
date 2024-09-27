// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	//integrations: [
	//	preact(),
	//	react(), tailwind()],
	site:'https://pablofergus.com',
	output: 'static',
	outDir: './docs',
	build: {
		assets: 'astro'
	}

});
