import {combineReducers} from 'redux'
import {
  AUTH_ASSCESS,
  AUTH_ERROR,
  UPDATE_USERINFO,
  RESET_USERINFO,
  UPDATE_USERLIST,
  RESET_USERLIST,
  GET_CHATLIST,
  RESET_CHATLIST,
  UPDATE_CHATLIST}
  from './action-list';
const initState ={
  username: '',
  _id: '',
  type: '',
  errMsg:'',
  redirectTo:'',
  header:'',
  info:'',
  salary:'',
  post:'',
  company:''
}
function user(previousState = initState,action){
  switch(action.type){
    case AUTH_ASSCESS:
      // console.log(action.data)
      return {...action.data,redirectTo:getRedirectPath(action.data.type,action.data.header)};
    case AUTH_ERROR:
      return {...initState,...action.data};
    case UPDATE_USERINFO:
      return {...action.data,redirectTo:getRedirectPath(action.data.type,action.data.header)};
    case RESET_USERINFO:
      return {...initState,...action.data};
    default:
      return previousState;
  }
};
function getRedirectPath(type,header){
  let path = '';
  if(type === 'boss'){
    path='/boss';
  }else{
    path='/consumer';
  };
  if(!header){
    path+='info';
  }
  return path;
}


const usersInitState = [];
function userList(previousState = usersInitState,action){
  switch(action.type){
    case UPDATE_USERLIST:
      return action.data;
    case RESET_USERLIST:
      return []
    default:
      return previousState;
  }
};

//获取用户聊天列表
const initUserChatMessages = {
  users:{},
  chatMsgs:[]
}
function userChatList(previousState=initUserChatMessages,action){
  switch (action.type) {
    case GET_CHATLIST:
      return action.data;
    case RESET_CHATLIST:
      return initUserChatMessages;
    case UPDATE_CHATLIST:
      return {
        users: previousState.users,
        chatMsgs: [...previousState.chatMsgs, action.data]
      };
    default:
      return previousState;
  }
}
export default combineReducers({
  user,
  userList,
  userChatList
})
