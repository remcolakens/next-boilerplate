import { ButtonStyles as Button } from '@/styles/components/buttonStyles';
import { extendTheme } from '@chakra-ui/react';

export const primaryTheme = extendTheme({
	components: {
		Button,
	},

	colors: {
		primary: '#D33257',
		secondary: '#FFF',
		tertiary: '#2C82C9',
	},
});
