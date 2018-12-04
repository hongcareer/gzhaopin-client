import React,{Component} from 'react';
import {NavBar} from 'antd-mobile'
class Bossinfo extends Component{
  state={
    header:'',
    info:'',
    post:'',
    company:'',
    salary:''
  };
  render(){
    return(
      <NavBar>Boss信息完善</NavBar>
    )
  }
};
export default Bossinfo;