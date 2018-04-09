module.exports = {
	parser: 'babel-eslint',
	plugins: [
		'react'
	],
	extends: 'airbnb',
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
		'no-unused-expressions': [error, { allowTernary: true, allowTemplateTags: true}],
	'import/prefer-default-export': 'off'
	},
	env: {
		browser: true,
		node: true,
		jest: true,
	}
};
