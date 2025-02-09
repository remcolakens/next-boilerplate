import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
	Inter: () => ({
		style: {
			fontFamily: 'Inter',
		},
		variable: 'mocked-variable',
	}),
}));

describe('RootLayout', () => {
	it('renders children correctly', async () => {
		const { props } = await RootLayout({
			children: <div data-testid="test-content">Hello World</div>,
		});
		render(props.children, { container: document.createElement('html') });

		const testContent = screen.getByTestId('test-content');
		expect(testContent).toBeInTheDocument();
		expect(testContent).toHaveTextContent('Hello World');
	});

	it('applies Inter font variable class', async () => {
		const { props } = await RootLayout({
			children: null,
		});
		render(props.children, { container: document.createElement('html') });

		expect(document.body).toHaveClass('font-sans', 'antialiased');
	});
});
