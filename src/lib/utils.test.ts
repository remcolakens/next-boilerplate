import { describe, expect, test } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
	test('combines class names correctly', () => {
		// Test basic combination
		expect(cn('flex', 'items-center')).toBe('flex items-center');

		// Test with conditional classes
		const isOpen = true;
		expect(cn('flex', isOpen && 'visible')).toBe('flex visible');

		// Test with Tailwind conflicts (should merge properly)
		expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
		expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');

		// Test with undefined/null values
		expect(cn('flex', undefined, null, 'gap-2')).toBe('flex gap-2');

		// Test with array input
		expect(cn(['flex', 'items-center'])).toBe('flex items-center');
	});
});
