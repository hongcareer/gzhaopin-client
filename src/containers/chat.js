import Chat from '../components/chat';
import {connect} from 'react-redux';
import {sendMessage,getChatLists} from '../redux/action';

export default connect(
  state => ({userList:state.userList,userChatList:state.userChatList}),
  {sendMessage,getChatLists}
)(Chat);
