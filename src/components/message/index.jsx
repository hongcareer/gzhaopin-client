import React,{Component} from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Message extends Component{
  render(){
    return(
      <List>
        <Item
          arrow="horizontal"
          thumb={require('./images/头像1.png')}
          multipleLine
        >
          你们家的红酒不好喝哦 <Brief>客人001</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb={require('./images/头像1.png')}
          multipleLine
        >
          肯定不是82年的拉菲 <Brief>客人001</Brief>
        </Item>
      </List>

    )
  }
};
export default Message;