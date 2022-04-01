/*
 * @Date: 2022-03-31 13:51:37
 * @LastEditTime: 2022-04-01 17:23:46
 * @FilePath: \vite-admin-project\.eslintrc.js
 * @Description:
 */
module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],

    rules: {
        // override/add rules settings here, such as:
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
