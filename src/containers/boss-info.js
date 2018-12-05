import Bossinfo from '../components/boss-info';
import {connect} from 'react-redux';
import {updata} from '../redux/action';

export default connect(
  state => ({user:state.user}),
  {updata}
)(Bossinfo);
