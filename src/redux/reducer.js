import {combineReducers} from 'redux'
function Xxx(previousState = 0,action){
  switch(action.type){
    // case 'XXXX':
    //   return previousState;
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
  Xxx,
  Yyy
})
