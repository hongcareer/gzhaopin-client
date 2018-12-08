import React,{Component} from 'react';
import {NavBar,WingBlank,WhiteSpace,Card} from 'antd-mobile';
import PropTypes from 'prop-types';
class Boss extends Component{
  static propTypes = {
    getUserList:PropTypes.func.isRequired,
    userList:PropTypes.array.isRequired,
  };
  componentDidMount(){
    this.props.getUserList('consumer');
  };
  goChat = (id)=>{
    this.props.history.push(`/chat/${id}`)
  };
  render(){
    const userList = this.props.userList.filter(item=>item.header);
    return(
      <WingBlank size="lg">
        <WhiteSpace size="lg" />

        {userList.map((item,index)=>
          <div key={index} onClick={this.goChat.bind(null,item._id)}>
            <Card>
              <Card.Header
                thumb={require(`./images/头像${+item.header}.png`)}
                extra={<span>{item.username}</span>}
              />
              <Card.Body>
                <div>职位：{item.post}</div>
                <div>描述：{item.info}</div>
              </Card.Body>
            </Card>
            <WhiteSpace size="lg" />
          </div>
        )}

      </WingBlank>
    )
  }
};
export default Boss;