import Register from '../components/register';
import {connect} from 'react-redux';
import {register} from '../redux/action';
export default connect(
  //state：reduce暴露的对象，包含更新状态的方法，将方法
  state => ({user: state.user}),
 {register}
)(Register)