module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'\\.(ts|tsx)?$': 'babel-jest'
	},
	testMatch: ['<rootDir>/src/**/?(*.)spec.{ts,tsx}'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/public/', '/build/'],
	setupFilesAfterEnv: [
		'jest-dom/extend-expect',
		'@testing-library/react/cleanup-after-each'
	]
};
