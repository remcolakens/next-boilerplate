import { primaryTheme } from '@/styles/themes';
import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';

function CustomWrapper({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={primaryTheme}>{children}</ChakraProvider>;
}

export function renderWithChakra(
	ui: ReactElement,
	options?: Parameters<typeof render>
) {
	return render(ui, {
		wrapper: CustomWrapper,
		...options,
	});
}
