import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

// Both build environments must use the same version to avoid mismatched runtime nonces.
const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export const kitConfig = {
	preprocess: vitePreprocess(),
	adapter: adapter(),
	version: { name: version }
};

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(kitConfig)],
	server: {
		port: 5173,
		strictPort: false
	}
});
