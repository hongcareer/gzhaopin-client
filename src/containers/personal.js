import Personal from '../components/personal';
import {connect} from 'react-redux';
import {getUser,resetUserInfo,resetUserList} from '../redux/action';
export default connect(
  state => ({user:state.user}),
  {getUser,resetUserInfo,resetUserList}
)(Personal);
