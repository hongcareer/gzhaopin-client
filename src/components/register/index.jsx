import React,{Component} from 'react';
import Logo from '../logo/index';
import {NavBar,InputItem,WhiteSpace,List,WingBlank,Radio,Button} from 'antd-mobile';
const Item = List.Item;
class Register extends Component{
  state={
    boss:true,
    userName:'',
    passWord:'',
    rePassWord:''
  };
  // handleBoss = (value)=>{
  //   if(value === '老板'){
  //     this.setState({
  //       isBossCheck:true,
  //       isConsuCheck:false,
  //     })
  //   }else{
  //     this.setState({
  //       isBossCheck:false,
  //       isConsuCheck:true,
  //     })
  //   }
  // };
  // handleConsu = (value)=>{
  //   if(value === '客人'){
  //     this.setState({
  //       isBossCheck:false,
  //       isConsuCheck:true
  //     })
  //   }else{
  //     this.setState({
  //       isBossCheck:true,
  //       isConsuCheck:false
  //     })
  //   }
  // }
  handleChange = (type,val)=>{
    this.setState({
      [type]:val,
    })
  };
  //点击跳转用户登录界面
  goLogin = ()=>{
    this.props.history.replace('/login')
  };
  goRegister = ()=>{
    this.props.history.replace('/register')
  }

  render(){
    const {boss} = this.state;
    return(
      <div>
        <NavBar>Red & Wine</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('userName',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder='请输入密码' onChange={val => this.handleChange('passWord',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder='请再次输入确认密码' onChange={val => this.handleChange('rePassWord',val)}>确认密码:</InputItem>
            <WhiteSpace/>
            <Item>用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={boss} onChange={this.handleChange.bind(null,'boss',true)}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!boss} onChange={this.handleChange.bind(null,'boss',false)}>客人</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="warning" onClick={this.goRegister}>注册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
};
export default Register;