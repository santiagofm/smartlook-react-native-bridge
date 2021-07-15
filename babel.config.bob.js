module.exports = {
	presets: ['@babel/preset-react', '@babel/preset-typescript'],
	plugins: [['inline-json-import', {}], require.resolve('@babel/plugin-proposal-class-properties')],
};
