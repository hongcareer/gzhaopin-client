import React,{Component} from 'react';
import Logo from '../logo/index';
import reqRegister from '../../api/index';
import './index.less';
import {NavBar,InputItem,WhiteSpace,List,WingBlank,Radio,Button} from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import {register} from "../../redux/action";
const Item = List.Item;
class Register extends Component{
  state={
    boss:true,
    username:'',
    password:'',
    rePassword:''
  };

  handleChange = (type,val)=>{
    this.setState({
      [type]:val,
    })
  };
  //点击跳转用户登录界面
  goLogin = ()=>{
    this.props.history.replace('/login')
  };
  // goRegister = ()=>{
  //   this.props.history.replace('/register')
  // }
  //收集表单数据
  goRegister = async () =>{
    const {boss,username,password,rePassword} = this.state;
    this.props.register({username,password,rePassword,type: boss ? 'boss' : 'consumer'});
    // console.log(user);
  }
  render(){
    const {boss} = this.state;
    // console.log(this.props.user);
    const {errMsg,redirectTo} = this.props.user;
    // console.log(errMsg);
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return(
      <div>
        <NavBar>Red & Wine</NavBar>
        <Logo />
        <p>{errMsg}</p>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('username',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder='请输入密码' onChange={val => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder='请再次输入确认密码' onChange={val => this.handleChange('rePassword',val)}>确认密码:</InputItem>
            <WhiteSpace/>
            <Item>用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={boss} onChange={this.handleChange.bind(null,'boss',true)}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!boss} onChange={this.handleChange.bind(null,'boss',false)}>客人</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.goRegister}>注册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
};
export default Register;