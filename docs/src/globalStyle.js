import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: ${theme.font};
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	ul[class],
	ol[class] {
		list-style-type: none;
		padding: 0;
	}

	body {
		width: 100%;
		height: 100%;
		font-weight: 400;
		font-size: 14px;
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	button {
		padding: 0;
		cursor: pointer;
		background-color: transparent;
	}

	a {
		cursor: pointer;
		text-decoration-line: none;
	}
`;