import React,{Component} from 'react';
import {Result, List, Button,Modal} from 'antd-mobile';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
class Personal extends Component{

  static propTypes = {
    user:PropTypes.object.isRequired,
    resetUserInfo:PropTypes.func.isRequired,
    resetUserList:PropTypes.func.isRequired,
  }
  quit = ()=>{
    alert('退出登录', '确定退出吗？', [
      { text: '取消', onPress: () => {} },
      { text: '确定', onPress: () => {
        //清除cookie信息
        Cookies.remove('userid');
        this.props.resetUserInfo();
        this.props.resetUserList();
        this.props.history.push('/login')
      }},
    ])
  };
  render(){
    const {username,type,info,salary,post,company,header,} = this.props.user;
    return(
      <div>
        <Result
          img={<img src={require(`./images/头像${+header}.png`)} />}
          title={username}
          message={company !== 'undefined'?<div>{company}</div>:null}
        />
        <List  renderHeader={() => '基本信息'}/>
        <Item multipleLine>
          <Brief>职位：{post}</Brief>
          <Brief>简介：{info}</Brief>
          {salary !== 'undefined'?<Brief>薪资：{salary}</Brief>:null}
        </Item>
        <Button onClick={this.quit} type='warning'>退出登录</Button>
      </div>


    )
  }
};
export default Personal;