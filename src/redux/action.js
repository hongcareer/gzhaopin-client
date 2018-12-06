import {
  AUTH_ASSCESS,
  AUTH_ERROR,
  UPDATE_USERINFO,
  RESET_USERINFO,
  UPDATE_USERLIST,
  RESET_USERLIST}
  from './action-list';

import {reqRegister,reqLogin,reqUpdata,reqUser,reqUserList} from '../api';
const authAsscess = (data)=> ({type:AUTH_ASSCESS,data:data});
const authError = (data)=> ({type:AUTH_ERROR,data:data});
const updateUserInfo = (data)=>({type:UPDATE_USERINFO,data:data});
const resetUserInfo = (data)=>({type:RESET_USERINFO,data:data});
const updateUserList = (data)=>({type:UPDATE_USERLIST,data:data});
const resetUserList = (data)=>({type:RESET_USERLIST,data:data});

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

//保存用户信息到数据库
export const updata = ({header,info,post,company,salary,type})=>{
  if(!header){
    return authError({errMsg:'请选择头像'})
  }else if(!post){
    return authError(type === 'boss'?{errMsg:'请输入招聘职位'}:{errMsg:'请输入求职岗位'})
  }else if(type === 'boss' && !company){
    return authError({errMsg:'请输入公司名称'})
  }else if(type === 'boss' && !salary){
    return authError({errMsg:'请输入职位薪资'})
  }else if(!info){
    return authError(type === 'boss'?{errMsg:'请输入职位要求'}:{errMsg:'请输入个人介绍'})
  };
  return dispatch =>{
    reqUpdata({header,info,post,company,salary})
      .then(({data})=>{
        if(data.code === 0){
          dispatch(authAsscess(data.data))
        }else{
          console.log(authError({errMsg:data.msg}));
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(err =>{
        dispatch(authError({errMsg:'网络不稳定，请刷新试试'}))
      })
  }
}

//获取数据库中请求用户的信息
export const getUser = () =>{
  return dispatch=>{
    reqUser()
      .then(({data})=>{
        if(data.code === 0){
          console.log(data.data)
          dispatch(updateUserInfo(data.data))
        }else{
          dispatch(resetUserInfo({errMsg:data.data}))
        }
      })
      .catch(err =>{
        dispatch(resetUserInfo({errMsg:"网络不稳定，请刷新试试"}))
      })
  }
}

//获取用户列表
export const getUserList = type =>{
  return dispatch=>{
    reqUserList(type)
      .then(({data})=>{
        if(data.code === 0){
          dispatch(updateUserList(data.data))
        }else{
          dispatch(resetUserList())
        }
      })
      .catch(err =>{
        dispatch(resetUserList())
      })
  }
}