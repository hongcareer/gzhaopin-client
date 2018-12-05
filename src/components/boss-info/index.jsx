import React,{Component} from 'react';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import HeaderSelector from '../header-selsector';
import {Redirect} from 'react-router-dom';
class Bossinfo extends Component{
  state={
    header:'',
    info:'',
    post:'',
    company:'',
    salary:'',
    type:'boss'
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
    const {header,info,post,company,salary,type} = this.state ;
    this.props.updata({header,info,post,company,salary,type})
  }
  render(){
    const {errMsg,redirectTo} = this.props.user;
    if(redirectTo === '/boss'){
      return <Redirect to={redirectTo} />;
    }
    return(
      <div>
        <NavBar>Boss信息完善</NavBar>
        <HeaderSelector updateHeader={this.updateHeader}/>
        <p>{errMsg}</p>
        <InputItem onChange={val => {this.handleChange('post', val)}}>招聘职位:</InputItem>
        <InputItem onChange={val => {this.handleChange('company', val)}}>公司名称:</InputItem>
        <InputItem onChange={val => {this.handleChange('salary', val)}}>职位薪资:</InputItem>
        <TextareaItem title="职位要求:" rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='warning' onClick={this.updata}>保存</Button>
      </div>

    )
  }
};
export default Bossinfo;