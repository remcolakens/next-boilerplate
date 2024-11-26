import Home from '@/app/page';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Snapshot', () => {
	it('renders homepage unchanged', () => {
		const { container } = render(<Home />);
		expect(container).toMatchSnapshot();
	});
});
