module.exports = {
	preset: '@testing-library/react-native',
	clearMocks: true,
	setupFiles: ['<rootDir>/testSetup.js'],
	modulePathIgnorePatterns: ['<rootDir>/example/node_modules', '<rootDir>/lib/'],
	watchPathIgnorePatterns: ['__fixtures__\\/[^/]+\\/(output|error)\\.js'],
	transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
};
