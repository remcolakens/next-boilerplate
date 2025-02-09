import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
	Inter: () => ({
		style: {
			fontFamily: 'Inter',
		},
	}),
}));

describe('RootLayout', () => {
	it('should render children with correct font classes', () => {
		// Set up our test content
		const testContent = <div data-testid="test-child">Wassup World</div>;

		// Render that layout with our test content
		render(<RootLayout>{testContent}</RootLayout>);

		// Check if our test content is in the house
		const childElement = screen.getByTestId('test-child');
		expect(childElement).toBeInTheDocument();

		expect(document.body).toHaveClass('font-sans', 'antialiased');
	});

	it('should have correct lang attribute on html element', () => {
		render(<RootLayout>Test Content</RootLayout>);

		expect(document.documentElement).toHaveAttribute('lang', 'en');
	});
});
