import Consumer from '../components/consumer/comsumer';
import {connect} from 'react-redux';
import {getUserList} from '../redux/action';

export default connect(
  state => ({userList:state.userList}),
  {getUserList}
)(Consumer);
