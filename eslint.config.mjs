import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-plugin-prettier/flat';
import testingLibrary from 'eslint-plugin-testing-library';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
	...nextVitals,
	...nextTs,

	{
		rules: {
			'no-console': ['error', { allow: ['error'] }],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
		},
	},
	{
		...testingLibrary.configs['flat/react'],
		files: ['src/**/*.test.{ts,tsx}'],
	},
	{
		...playwright.configs['flat/recommended'],
		files: ['src/e2e/**'],
		rules: {
			...playwright.configs['flat/recommended'].rules,
		},
	},
	{
		...prettier,
		rules: {
			'prettier/prettier': 'error',
		},
	},
	{
		ignores: [
			'.lintstagedrc.js',
			'node_modules/**',
			'.next/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
		],
	},
];

export default eslintConfig;
