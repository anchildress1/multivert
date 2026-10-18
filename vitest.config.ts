import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';
import { kitConfig } from './vite.config.ts';

export default defineConfig({
	plugins: [sveltekit(kitConfig), svelteTesting()],
	test: {
		include: ['src/**/*.test.{ts,js}', 'src/**/*.svelte.test.ts'],
		globals: false,
		environment: 'node',
		setupFiles: ['./vitest.setup.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov', 'html'],
			reportsDirectory: './coverage',
			include: ['src/lib/**/*.ts', 'src/lib/**/*.svelte.ts'],
			exclude: ['src/lib/**/*.test.ts', 'src/lib/questions.ts', 'src/lib/types.ts'],
			thresholds: {
				lines: 85,
				functions: 85,
				statements: 85,
				branches: 80
			}
		}
	}
});
