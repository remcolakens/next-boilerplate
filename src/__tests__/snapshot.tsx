/**
 * @jest-environment jsdom
 */
import Home from '@/app/page';
import { render } from '@testing-library/react';

it('renders homepage unchanged', () => {
	const { container } = render(<Home />);
	expect(container).toMatchSnapshot();
});
