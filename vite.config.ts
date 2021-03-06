/*
 * @Date: 2022-03-31 10:33:00
 * @LastEditTime: 2022-04-19 10:12:57
 * @FilePath: \vite-admin-project\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import {
    createStyleImportPlugin,
    ElementPlusResolve,
} from 'vite-plugin-style-import'; //  插件按需引入
import { visualizer } from 'rollup-plugin-visualizer'; // 打包分析
import viteCompression from 'vite-plugin-compression'; // Gzip 打包
import { viteMockServe } from 'vite-plugin-mock'; // mock 数据
// import viteImagemin from 'vite-plugin-imagemin'; // 图片压缩

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.join(__dirname, 'src/assets'),
        },
    },
    plugins: [
        visualizer(),
        vue(),
        createStyleImportPlugin({
            resolves: [ElementPlusResolve()],
            libs: [
                // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
                {
                    libraryName: 'ant-design-vue',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`;
                    },
                    ensureStyleFile: true, // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
                },
            ],
        }),
        viteCompression(),
        viteMockServe({
            //配置mock位置
            mockPath: '/src/mock',
        }),
    ],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8080,
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
    build: {
        // 8 KB 静态资源的处理（图片等，超过这个大小会被打包成单独的文件，没超过就直接用base64）
        assetsInlineLimit: 8 * 1024, // 单文件超过8k打包出来
    },
});
