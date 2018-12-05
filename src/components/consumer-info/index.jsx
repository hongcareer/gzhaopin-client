import React,{Component} from 'react';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from '../header-selsector'
import {Redirect} from "react-router-dom";
class Consumerinfo extends Component{
  state={
    header:'',
    post:'',
    info:''
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
  updata = ()=>{
    const {header,info,post} = this.state ;
    this.props.updata({header,info,post})
  }
  render(){
    const {errMsg,redirectTo} = this.props.user;
    if(redirectTo === '/consumer'){
      return <Redirect to={redirectTo} />;
    };
    return(
      <div>
        <NavBar>Consumer信息完善</NavBar>
        <HeaderSelector updateHeader={this.updateHeader}/>
        <p>{errMsg}</p>
        <InputItem onChange={val => {this.handleChange('post', val)}}>求职岗位:</InputItem>
        <TextareaItem title="个人介绍:" rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='warning' onClick={this.updata}>保存</Button>
      </div>

    )
  }
};
export default Consumerinfo;