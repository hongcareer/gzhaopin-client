
import ajax from './ajax';
const prefix = '';
export const reqRegister = data => ajax(`${prefix}/register`,data,'POST');
export const reqLogin = data => ajax(`${prefix}/login`,data,'POST');
export const reqUpdata = data => ajax(`${prefix}/update`,data,'POST');
//获取用户的信息
export const reqUser = ()=>ajax(`${prefix}/user`);

