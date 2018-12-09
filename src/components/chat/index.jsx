import React, {Component} from 'react'
import {NavBar, List, InputItem,Icon,Grid} from 'antd-mobile'
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
    message:'',
    isShow:false
  }
  goBack = ()=>{
    this.props.history.goBack()
  };
  getMessageValue = val =>{
    this.setState({
      message:val
    });
  };
  toggleShow = () => {
    const {isShow} = this.state;
    this.setState({
      isShow: !isShow
    })
    //解决轮播图显示高度异常的问题
    if (!isShow) {
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 0)
    }
  }
  sendMessages = ()=>{
    const {message} = this.state;
    const from = Cookies.get('userid');
    const to = this.props.match.params.id;
    this.props.sendMessage(message,from,to);
    this.setState({
      message:''
    });
  };
  componentDidMount(){
    window.scrollTo(0, document.body.offsetHeight);
  };
  componentDidUpdate(){
    window.scrollTo(0, document.body.offsetHeight);
  };
  componentWillMount () {
    const emojis =['😁', '😁', '😁','😁', '😁', '😁','😁', '😁',
      '😁', '😁', '😁','😁', '😁', '😁','😁', '😁',
      '😁', '😁', '😁','😁', '😁', '😁','😁', '😁',
      '😁', '😁', '😁','😁', '😁', '😁','😁', '😁','🙉'];

    this.emojis = emojis.map(item => ({text: item}));
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
        <List style={{marginTop: '96px'}}>
          {currMsgs.map((item,index)=>{
          if(item.from === from){
            return (
              <Item className='chat-me' extra='我' key={index}>{item.message}</Item>
            )
          }else{
            return(
              <Item thumb={require(`../../assets/images/头像${others.header}.png`) } key={index}>{item.message}</Item>
            )
          }
        })}
        </List>
        <div style={{height: this.state.isShow ? '180px' : 0}}></div>
        <div className='am-tab-bar chat-bottom'>
          <InputItem
            placeholder="请输入"
            extra={
              <div>
                <span onClick={this.toggleShow}>🙉</span>&nbsp;&nbsp;
                <span onClick={this.sendMessages}>发送</span>
              </div>
            }
            onChange={this.getMessageValue}
            value={this.state.message}
          />
          {
            this.state.isShow
              ? <Grid
                data={this.emojis}
                isCarousel
                columnNum={8}
                carouselMaxRow={4}
                onClick={el => {this.setState({message: this.state.message + el.text})}}
              />
              : null
          }
        </div>
      </div>
    )
  }
}