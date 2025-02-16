import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
// import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';

const compat = new FlatCompat({
	// import.meta.dirname is available after Node.js v20.11.0
	baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
	pluginJs.configs.recommended,
	// ...tailwind.configs['flat/recommended'],
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript'],
		rules: {
			'no-console': ['error', { allow: ['error'] }],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
		},
	}),
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
		...prettierPlugin,
		rules: {
			'prettier/prettier': 'error',
		},
	},
];

export default eslintConfig;
