import React,{Component} from 'react';
import {Result, List, Button,Modal} from 'antd-mobile';
import PropTypes from 'prop-types'
import Cookies from 'js-cookie';
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
class Personal extends Component{
  // constructor(props){
  //   super(props);
  //   this.props.getuser();
  // }
  static propTypes = {
    // userDate:PropTypes.object.isRequired
  }
  quit = ()=>{
    alert('退出登录', '确定退出吗？', [
      { text: '取消', onPress: () => {} },
      { text: '确定', onPress: () => {
        //清除cookie信息
        Cookies.remove('userid');
        this.props.history.push('/login')
      }},
    ])
  };
  render(){
    console.log(this.props.userDate)
    // this.props.getuser();
    // const {username,type,info,salary,post,company,header,} = this.props.user;
    return(
      <div>
        <Result
          img={<img src={require(`./images/头像1.png`)} />}
          // title={username}
          // message={<div>{company}</div>}
          title='username'
          message={<div>'xxx'</div>}
        />
        <List  renderHeader={() => '基本信息'}/>
        <Item multipleLine>
          {/*<Brief>职位：{post}</Brief>*/}
          {/*<Brief>简介：{info}</Brief>*/}
          {/*<Brief>薪资：{salary}</Brief>*/}
          <Brief>职位：'post'</Brief>
          <Brief>简介：'info'</Brief>
          <Brief>薪资：'salary'</Brief>
        </Item>
        <Button onClick={this.quit} type='warning'>退出登录</Button>
      </div>


    )
  }
};
export default Personal;