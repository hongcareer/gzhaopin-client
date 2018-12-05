import Consumerinfo from '../components/consumer-info';
import {connect} from 'react-redux';
import {updata} from '../redux/action';

export default connect(
  state => ({user:state.user}),
  {updata}
)(Consumerinfo);
