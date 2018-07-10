module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 8,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			impliedStrict: true,
			classes: true,
		},
	},
	plugins: [
		'react',
		'prettier',
	],
	extends: [
		'airbnb',
		'prettier',
		'prettier/react',
	],
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	rules: {
		indent: ['error', 'tab'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'no-tabs': 'off',
		'react/forbid-prop-types': 'off',
		'react/require-default-props': 'off',
		'comma-dangle': ['error', 'always-multiline'],
		'arrow-parens': ['error', 'always'],
		'brace-style': ['error', 'stroustrup'],
		'no-unused-expressions': 'off',
		'import/prefer-default-export': 'off',
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				semi: true,
				singleQuote: true,
				trailingComma: 'all',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: always,
				requirePragma: false,
				insertPragma: false,
			},
		],
	},
};
