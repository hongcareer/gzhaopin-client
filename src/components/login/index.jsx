import React,{Component} from 'react';
import {NavBar,InputItem,WhiteSpace,WingBlank,List,Button} from 'antd-mobile';
import Logo from '../logo/index';
import './index.less'
class Login extends Component{
  state={
    username: '',
    password:''
  };
  goRegister =() =>{
    this.props.history.replace('/register')
  };
  handleChange = (type,val)=>{
    this.setState({
      [type]:val
    })
  };
  goLogin = ()=>{
    const {username,password} = this.state;
    console.log(this.props.login({username, password}));;
  }
  render(){
    const {errMsg} = this.props.user;
    return(
      <div>
        <NavBar>Red & Wine</NavBar>
        <Logo />
        <p>{errMsg}</p>
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem placeholder='请输入用户名' onChange={val =>this.handleChange('username',val)}>用户名</InputItem><WhiteSpace />
            <InputItem type='password' placeholder='请输入密码' onChange={val =>this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码</InputItem><WhiteSpace />
            <Button type='warning' onClick={this.goLogin}>登录</Button>
            <Button onClick={this.goRegister}>还没有账户?</Button>
          </List>
        </WingBlank>
        </div>

    )
  }
};
export default Login;