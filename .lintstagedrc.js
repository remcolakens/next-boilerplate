const path = require('path');

module.exports = {
	// Type check TypeScript files
	'*.(ts|tsx)': () => 'tsc --noEmit',

	// Lint then format TypeScript and JavaScript files
	'*.(ts|tsx|js)': (filenames) => [
		`next lint --file ${filenames
			.map((f) => path.relative(process.cwd(), f))
			.join(' --file ')}`,
		`prettier --write ${filenames.join(' ')}`,
	],

	// Format MarkDown and JSON
	'*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
