import Chat from '../components/chat';
import {connect} from 'react-redux';
import {sendMessage} from '../redux/action';

export default connect(
  state => ({userList:state.userList}),
  {sendMessage}
)(Chat);
