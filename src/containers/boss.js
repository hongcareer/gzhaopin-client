import Boss from '../components/boss/boss';
import {connect} from 'react-redux';
import {getUserList} from '../redux/action';

export default connect(
  state => ({userList:state.userList}),
  {getUserList}
)(Boss);
