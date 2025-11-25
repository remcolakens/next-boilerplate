const path = require('path');

module.exports = {
	// Type check TypeScript files
	'*.(ts|tsx)': () => 'tsc --noEmit',

	// Lint then format TypeScript and JavaScript files
	'*.(ts|tsx|js)': (filenames) => [
		`eslint --fix ${filenames
			.map((f) => `"${path.relative(process.cwd(), f)}"`)
			.join(' ')}`,
		`prettier --write ${filenames.join(' ')}`,
	],

	// Format MarkDown and JSON
	'*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
