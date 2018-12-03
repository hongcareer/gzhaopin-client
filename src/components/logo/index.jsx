import React,{Component} from 'react';
import logo from './2.jpg';
import './index.less'
class Logo extends Component{
  render(){
    return(
      <div className='active'>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
};
export default Logo;