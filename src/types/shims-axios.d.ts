/*
 * @Date: 2022-04-01 14:20:38
 * @LastEditTime: 2022-04-01 14:20:38
 * @FilePath: \Vite-demo\vite-admin-project\src\types\shims-axios.d.ts
 * @Description:
 */
import { AxiosRequestConfig } from 'axios';
/**
 * 自定义扩展axios模块
 * @author Maybe
 */
declare module 'axios' {
    export interface AxiosInstance {
        <T = any>(config: AxiosRequestConfig): Promise<T>;
        request<T = any>(config: AxiosRequestConfig): Promise<T>;
        get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        post<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<T>;
        put<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<T>;
        patch<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<T>;
    }
}
