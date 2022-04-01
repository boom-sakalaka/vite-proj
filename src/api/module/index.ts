/*
 * @Date: 2022-04-01 14:18:12
 * @LastEditTime: 2022-04-01 16:35:25
 * @FilePath: \vite-admin-project\src\api\module\index.ts
 * @Description:
 */
import request from '@/utils/request';

/**
 * 登录
 */

interface IResponseType<P = object> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}
interface ILogin {
    token: string;
    expires: number;
}
export const login = (username: string, password: string) => {
    return request<IResponseType<ILogin>>({
        url: '/api/auth/login',
        method: 'post',
        data: {
            username,
            password,
        },
    });
};
