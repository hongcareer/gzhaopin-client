import React,{Component} from 'react';
import { List } from 'antd-mobile';
import PropTypes from 'prop-types'
import Cookies from "js-cookie";
const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component{
  static propTypes = {
    userChatList:PropTypes.object.isRequired
  }
  goChat = (id)=>{
    this.props.history.push(`/chat/${id}`);
  };

  render(){
    const userid = Cookies.get('userid');
    const {users,chatMsgs} = this.props.userChatList;
    if(!chatMsgs.length){
      return null;
    }
    let users_id={};
    //过滤相同的id值
    chatMsgs.forEach((item,index)=>{
      // console.log(item.from,userid,item.to)
      const othersId = item.from === userid? item.to: item.from;
      // console.log(users)
      //保证users_id对象中有且值保存一份其他用户id和对应的值
      //将users中对应的属性名中对应的属性值，放在othersId中
      users_id[othersId] = users[othersId];
      console.log(users)
      console.log(users[othersId]);
      //设置id值
      users_id[othersId].id = othersId;
      //展示最新的消息
      const time = Date.parse(item.createTime);
      if(users_id[othersId].time){
        if(users_id[othersId].time<time){
          users_id[othersId].time=time;
          users_id[othersId].message = item.message;
        }
      }else{
        users_id[othersId].time=time;
        users_id[othersId].message = item.message;
      };
    });
    const inneedChat = Object.values(users_id);
    return(

      <List>
        {inneedChat.map((item,index)=>(
          <Item key={index}
            arrow="horizontal"
            thumb={require(`./images/头像${item.header}.png`)}
            multipleLine
            onClick={this.goChat.bind(null,item.id)}
          >
            {item.message} <Brief>{item.username}</Brief>
          </Item>
        ))}
      </List>

    )
  }
};
export default Message;