import React, {Component} from 'react'
import {NavBar, List, InputItem,Icon} from 'antd-mobile'
import './index.less';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
const Item = List.Item;
export default class Chat extends Component {
  static propTypes = {
    getChatLists:PropTypes.func.isRequired,
    sendMessage:PropTypes.func.isRequired,
    userChatList:PropTypes.object.isRequired
  }
  state={
    message:''
  }
  goBack = ()=>{
    this.props.history.goBack()
  };
  getMessageValue = val =>{
    this.setState({
      message:val
    });
  }
  sendMessages = ()=>{
    const {message} = this.state;
    const from = Cookies.get('userid');
    const to = this.props.match.params.id;
    this.props.sendMessage(message,from,to);
    this.setState({
      message:''
    })
  }
  render() {
    const {users,chatMsgs} = this.props.userChatList;
    console.log(users,chatMsgs)
    const from = Cookies.get('userid');
    const to = this.props.match.params.id;
    const others = users[to];
    console.log(others)
    if(!others){
      return null;
    }
    const from_to = [from, to].sort().join('-');
    //得到当前用户的所有相关的消息
    const currMsgs = chatMsgs.filter(item => item.from_to === from_to);
    //消息按照时间顺序排序
    currMsgs.sort(function (a, b) {
      return Date.parse(a.createTime) - Date.parse(b.createTime)
    });
    return (
      <div id='chat-page' className='chat-page'>
        <NavBar icon={<Icon type="left" onClick={this.goBack} />}>aa</NavBar>
        {currMsgs.map((item,index)=>{
          if(item.from === from){
            return (
              <List key={index}>
                <Item className='chat-me' extra='我'>{item.message}</Item>
              </List>
            )
          }else{
            return(
              <List key={index}>
                <Item thumb={require(`../../assets/images/头像${others.header}.png`)}>{item.message}</Item>
              </List>
            )
          }
        })}
        <div className='am-tab-bar chat-bottom'>
          <InputItem
            placeholder="请输入"
            extra={
              <span onClick={this.sendMessages}>发送</span>
            }
            onChange={this.getMessageValue}
            value={this.state.message}
          />
        </div>
      </div>
    )
  }
}