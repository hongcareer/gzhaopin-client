import {AUTH_ASSCESS,AUTH_ERROR} from './action-list';

import {reqRegister,reqLogin} from '../api';
const authAsscess = (data)=> ({type:AUTH_ASSCESS,data:data});
const authError = (data)=> ({type:AUTH_ERROR,data:data});

//注册异步发送ajax请求
export const register=({username, password, rePassword, type})=>{
  //限制
  if(!username){
    return authError({errMsg:'请输入用户名'});
  }else if(!password){
    return authError({errMsg:'请输入密码'});
  }else if(password !== rePassword){
    return authError({errMsg:'两次密码输入不正确'});
  };
  return dispatch=>{
    reqRegister({username,password,type})
      .then(({data})=>{
        if(data.code === 0){
          //请求成功
          console.log(data.data)
          dispatch(authAsscess(data.data))
        }else{
          //请求失败
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(err=>{
        dispatch(authError({errMsg:'网络不稳定，请刷新试试'}))
      })
    }
  };

//登录异步发送ajax请求
export const login=({username, password})=>{
  //限制
  if(!username){
    return authError({errMsg:'请输入用户名'});
  }else if(!password){
    return authError({errMsg:'请输入密码'});
  }
  return dispatch=>{
    reqLogin({username,password})
      .then(({data})=>{
        if(data.code === 0){
          //请求成功
          dispatch(authAsscess(data.data))
        }else{
          //请求失败
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(err=>{
        dispatch(authError({errMsg:'网络不稳定，请刷新试试'}))
      })
  }
};