
import ajax from './ajax';
const prefix = '';
const reqRegister = data => ajax(`${prefix}/register`,data,'POST');
export default reqRegister;
