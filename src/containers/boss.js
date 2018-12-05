import Boss from '../components/boss/boss';
import {connect} from 'react-redux';
import {getuser} from '../redux/action';

export default connect(
  state => ({user:state.user}),
  {getuser}
)(Boss);
