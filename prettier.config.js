/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig  } */
module.exports = {
    arrowParens: 'avoid',
    jsxSingleQuote: true,
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    overrides: [
        {
            files: '*.json',
            options: { trailingComma: 'none' },
        },
    ],
    plugins: ['prettier-plugin-packagejson'],
};
