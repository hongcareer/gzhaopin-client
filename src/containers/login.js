import Login from '../components/login';
import {connect} from 'react-redux';
import {login} from '../redux/action';

export default connect(
  state => ({user:state.user}),
  {login}
)(Login);
