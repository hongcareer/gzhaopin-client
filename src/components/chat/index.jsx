import React, {Component} from 'react'
import {NavBar, List, InputItem,Icon} from 'antd-mobile'
import './index.less';
import Cookies from 'js-cookie';
const Item = List.Item;


export default class Chat extends Component {
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
  }
  render() {

    return (
      <div id='chat-page' className='chat-page'>
        <NavBar icon={<Icon type="left" onClick={this.goBack} />}>aa</NavBar>
        <List>
          <Item thumb={require('../../assets/images/头像1.png')}>你好</Item>
          <Item thumb={require('../../assets/images/头像1.png')}>你好2</Item>
          <Item className='chat-me' extra='我'>很好</Item>
          <Item className='chat-me' extra='我'>很好2</Item>
        </List>

        <div className='am-tab-bar chat-bottom'>
          <InputItem
            placeholder="请输入"
            extra={
              <span onClick={this.sendMessages}>发送</span>
            }
            onChange={this.getMessageValue}
          />
        </div>
      </div>
    )
  }
}