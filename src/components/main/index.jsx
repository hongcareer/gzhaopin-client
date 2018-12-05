import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {NavBar} from 'antd-mobile'
import Bossinfo from '../../containers/boss-info';
import Consumerinfo from '../../containers/consumer-info';
import Cookies from 'js-cookie';
import Boss from '../boss/boss';
import Personal from '../../containers/personal';
import Message from '../message';
// import Personal from '../personal';
import Footer from '../footer'
import Consumer from '../consumer/cons';
import {Redirect} from 'react-router-dom';
class Main extends Component{
  dataList = [
    {path:'/boss',text:'客人列表啊',img:'dashen',dis:'客人'},
    {path:'/consumer',text:'老板列表啊',img:'laoban',dis:'老板'},
    {path:'/message',text:'消息列表啊',img:'message',dis:'消息'},
    {path:'/personal',text:'个人中心啊',img:'personal',dis:'个人'},
  ];
  render(){
    const userid = Cookies.get('userid');
    if(!userid){
      return <Redirect to='/login'/>
    }
    const path = this.props.location.pathname;
    const item = this.dataList.find(item => path===item.path)
    return(
      <div>
        {item?<NavBar>{item.text}</NavBar>:null}
        <Route path='/bossinfo' component={Bossinfo}/>
        <Route path='/consumerinfo' component={Consumerinfo}/>
        {/*<Route path='/consumer' component={Consumer}/>*/}
        <Route path='/boss' component={Boss}/>
        <Route path='/message' component={Message} />
        <Route path='/personal' component={Personal} />
        {item?<Footer dataList={this.dataList}/>:null}
      </div>
    )
  }
};
export default Main;