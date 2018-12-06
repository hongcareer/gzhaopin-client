// import axios from 'axios';
// export default function(url,data,method = 'GET'){
//   let str='';
//   if(data){
//     const arr = Object.keys(data);
//     arr.forEach(item =>{
//       str +=`${item}=${data[item]}&`
//     });
//     str = str.substring(0,arr.length-1)
//   };
//   let type = method.toUpperCase();
//   if(type === 'GET'){
//     return axios.get(url+'?'+str)
//   }else if(type === 'POST'){
//     return axios.post(url,str,{
//       'content-type': 'application/x-www-form-urlencoded'
//     })
//   }
// }