import Person from '../components/personal';
import {connect} from 'react-redux';
import {getuser} from '../redux/action';

export default connect(
  state => ({user:state.user}),
  {getuser}
)(Person);
