/*
 * @Date: 2022-03-31 14:10:25
 * @LastEditTime: 2022-04-01 16:36:25
 * @FilePath: \vite-admin-project\src\utils\request.ts
 * @Description:
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create(); // Request interceptors

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: unknown) => {
        Promise.reject(error);
    },
); // Response interceptors

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // do something
        console.warn(response);
    },
    (error: unknown) => {
        // do something
        return Promise.reject(error);
    },
);

export default service;
