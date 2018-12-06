import Main from '../components/main';
import {connect} from 'react-redux';
import {getUser} from '../redux/action';

export default connect(
  state => ({user:state.user}),
  {getUser}
)(Main);
