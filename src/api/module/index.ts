/*
 * @Date: 2022-04-01 14:18:12
 * @LastEditTime: 2022-04-01 17:28:18
 * @FilePath: \vite-admin-project\src\api\module\index.ts
 * @Description:
 */
import { request } from '@/utils/request';

/**
 * 登录
 */

interface ILogin {
    token: string;
    expires: number;
}
export const login = (username: string, password: string) => {
    return request<ILogin>({
        url: '/users/login',
        method: 'post',
        data: {
            username,
            password,
        },
    });
};
