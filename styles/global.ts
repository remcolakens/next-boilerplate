import { css } from '@emotion/react';

export const global = css`
	html,
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow-x: hidden;

		//font-size: 20px; // root font-size since we are using REMs
	}

	*,
	&::before,
	&::after {
		box-sizing: inherit;
	}
`;
