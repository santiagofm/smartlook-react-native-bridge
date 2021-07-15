module.exports = {
	source: 'src',
	output: 'lib',
	targets: [
		[
			'commonjs',
			{
				configFile: './babel.config.bob.js',
			},
		],
		[
			'module',
			{
				configFile: './babel.config.bob.js',
			},
		],
		[
			'typescript',
			{
				project: 'tsconfig.build.json',
			},
		],
	],
	files: ['src/'],
};
