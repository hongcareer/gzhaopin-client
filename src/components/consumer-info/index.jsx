import React,{Component} from 'react';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from '../header-selsector'
class Consumerinfo extends Component{
  state={
    header:'',
    post:'',
    introduce:''
  };
  handleChange = (type,val) =>{
    this.setState({
      [type]:val
    })
  };
  updateHeader=(index)=>{
    this.setState({
      header:index
    })
  };
  render(){
    return(
      <div>
        <NavBar>Boss信息完善</NavBar>
        <HeaderSelector updateHeader={this.updateHeader}/>
        <InputItem onChange={val => {this.handleChange('post', val)}}>求职岗位:</InputItem>
        <TextareaItem title="个人介绍:" rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='warning'>保存</Button>
      </div>

    )
  }
};
export default Consumerinfo;