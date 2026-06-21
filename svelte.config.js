import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Vite 8 evaluates svelte.config.js fresh per build environment (ssr then
// client) via separate Rolldown workers, so `Date.now()` differs between the
// two runs → mismatched __sveltekit_* nonces → blank page at runtime.
// Pinning to the package version gives both environments the same deterministic
// string, preserving update-detection semantics across deployments.
const { version } = JSON.parse(
	readFileSync(fileURLToPath(new URL('./package.json', import.meta.url)), 'utf8')
);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib'
		},
		version: {
			name: version
		}
	}
};

export default config;
