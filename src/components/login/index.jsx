import React,{Component} from 'react';
import {NavBar,InputItem,WhiteSpace,WingBlank,List,Button} from 'antd-mobile';
import Logo from '../logo/index'
class Login extends Component{
  state={
    userName: '',
    passWord:''
  };
  goRegister =() =>{
    this.props.history.replace('/register')
  };
  handleChange = (type,val)=>{
    this.setState({
      [type]:val
    })
  }
  render(){
    return(
      <div>
        <NavBar>Red & Wine</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem placeholder='请输入用户名' onChange={val =>{this.handleChange('userName',val)}}>用户名</InputItem><WhiteSpace />
            <InputItem type='password' placeholder='请输入密码' onChange={val =>{this.handleChange('passWord',val)}}>密&nbsp;&nbsp;&nbsp;码</InputItem><WhiteSpace />
            <Button type='warning'>登录</Button>
            <Button onClick={this.goRegister}>还没有账户?</Button>
          </List>
        </WingBlank>
        </div>

    )
  }
};
export default Login;