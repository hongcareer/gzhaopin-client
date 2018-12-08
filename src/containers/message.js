import Message from '../components/message';
import {connect} from 'react-redux';
import {getUser,getChatLists} from '../redux/action';

export default connect(
  state => ({user:state.user,userChatList:state.userChatList}),
  {getUser,getChatLists}
)(Message);
