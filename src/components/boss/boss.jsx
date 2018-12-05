import React,{Component} from 'react';
import {NavBar,WingBlank,WhiteSpace,Card} from 'antd-mobile'
class Boss extends Component{
  render(){
    return(
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            thumb={require('./images/头像1.png')}
            extra={<span>大神1</span>}
          />
          <Card.Body>
            <div>职位：xxx</div>
            <div>描述：xxx</div>
          </Card.Body>
          </Card>
        <Card>
          <Card.Header
            thumb={require('./images/头像1.png')}
            extra={<div>大神1</div>}
          />
          <Card.Body>
            <div>职位：xxx</div>
            <div>描述：xxx</div>
          </Card.Body>
          </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
};
export default Boss;