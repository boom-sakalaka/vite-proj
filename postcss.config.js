/*
 * @Date: 2022-04-02 09:28:24
 * @LastEditTime: 2022-04-18 09:45:41
 * @FilePath: \vite-admin-project\postcss.config.js
 * @Description:
 */
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {
            overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        },
    },
};
