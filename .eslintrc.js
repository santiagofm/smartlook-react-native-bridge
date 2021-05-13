module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier', 'plugin:jest/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				singleQuote: true,
				trailingComma: 'all',
				printWidth: 120,
			},
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@react-native-community/react-native/no-inline-styles': 0,
		'react-native/no-inline-styles': 0,
	},
};
