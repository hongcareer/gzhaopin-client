import {combineReducers} from 'redux'
import {AUTH_ASSCESS,AUTH_ERROR} from './action-list';

const initState ={
  username: '',
  _id: '',
  type: '',
  errMsg:''
}
function user(previousState = initState,action){
  switch(action.type){
    case AUTH_ASSCESS:
      return action.data;
    case AUTH_ERROR:
      return {...initState,...action.data}
    default:
      return previousState;
  }
};

function Yyy(previousState = 0,action){
  switch(action.type){
    // case 'YYYY':
    //   return previousState;
    default:
      return previousState;
  }
};
export default combineReducers({
  user
})
//{user, xxx}