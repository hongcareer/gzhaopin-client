/*
* 定义发送请求的方法
* */

import axios from 'axios';
export default async function(url,data,method = 'GET'){
  let str = '';
  if(data){
    // {username:xxx,
    // password:xxx}对象的方法，获取参数，生成请求参数
    // username=xxx&password=xxx
    //获取属性名到数组中
    const arr = Object.keys(data);
    arr.forEach(item=> {
      str += `${item}=${data[item]}&`;
    });
    str = str.substring(0,str.length-1)
  };
  //判断请求方式
  let type = method.toUpperCase();
  if(type === 'GET'){
    // const result = await axios.get(url+'?' + str);
    // return result.data;
    return axios.get(url+'?' + str);
  }else if(type === 'POST'){
    // const result = await axios.post(url,str,{
    //   'content-type': 'application/x-www-form-urlencoded'
    // });
    // return result.data;
    return axios.post(url,str,{
      'content-type': 'application/x-www-form-urlencoded'
    });
  }
}