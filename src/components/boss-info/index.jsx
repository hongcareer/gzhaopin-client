import React,{Component} from 'react';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from '../header-selsector'
class Bossinfo extends Component{
  state={
    header:'',
    info:'',
    post:'',
    company:'',
    salary:''
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
        <InputItem onChange={val => {this.handleChange('post', val)}}>招聘职位:</InputItem>
        <InputItem onChange={val => {this.handleChange('company', val)}}>公司名称:</InputItem>
        <InputItem onChange={val => {this.handleChange('salary', val)}}>职位薪资:</InputItem>
        <TextareaItem title="职位要求:" rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='warning'>保存</Button>
      </div>

    )
  }
};
export default Bossinfo;