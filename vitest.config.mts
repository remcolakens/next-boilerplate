import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitest.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			include: ['src/components/**', 'src/hooks/**', 'src/lib/**'],
			exclude: ['src/svgs', 'src/e2e'],
			// thresholds: {
			// 	statements: 80,
			// 	branches: 70,
			// 	functions: 80,
			// 	lines: 80,
			// },
		},
		setupFiles: './vitest.setup.ts',
		include: ['**/*.test.{ts,tsx}'],
	},
});
