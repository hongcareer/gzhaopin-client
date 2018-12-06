import React,{Component} from 'react';
import {NavBar,WingBlank,WhiteSpace,Card} from 'antd-mobile';
import PropTypes from 'prop-types';
class Comsumer extends Component{
  static propTypes = {
    getUserList:PropTypes.func.isRequired,
    userList:PropTypes.array.isRequired,
  };
  componentDidMount(){
    this.props.getUserList('boss');
  }
  render(){
    const userList = this.props.userList.filter(item=>item.header);
    return(
      <WingBlank size="lg">
        <WhiteSpace size="lg" />

        {userList.map((item,index)=>
          <div key={index}>
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
export default Comsumer;