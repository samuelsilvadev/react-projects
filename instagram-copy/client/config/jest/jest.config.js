module.exports = {
	clearMocks: true,
	collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['js', 'json', 'jsx'],
	setupFiles: ['./../enzyme/enzyme.config.js'],
	roots: ['<rootDir>', './../../src'],
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	testURL: 'http://localhost',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: false
};
