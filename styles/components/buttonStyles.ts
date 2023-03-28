import { ButtonProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
	// Styles for the base style
	baseStyle: {},
	// Styles for the size variations
	sizes: {},
	// Styles for the visual style variations
	variants: {
		primary: (props: ButtonProps) => ({
			bg: 'primary',
			color: mode('white', 'black')(props),
		}),
	},
	// The default `size` or `variant` values
	defaultProps: {},
};
