// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
	trailingComma: 'es5',
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = config
