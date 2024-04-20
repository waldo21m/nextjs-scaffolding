import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
		coverage: {
			all: true,
			provider: 'v8',
			reporter: ['text', 'text-summary', 'lcov', 'cobertura', 'json'],
		},
	},
});
