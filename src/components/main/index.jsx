import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {NavBar,Icon,Grid} from 'antd-mobile'
import Bossinfo from '../../containers/boss-info';
import Consumerinfo from '../../containers/consumer-info';
import Cookies from 'js-cookie';
import Boss from '../../containers/boss';
import Message from '../message';
import Personal from '../../containers/personal';
import Footer from '../footer';
import './index.less';
import PropTypes from 'prop-types'
import Consumer from '../../containers/consumer';
import {Redirect} from 'react-router-dom';
class Main extends Component{
  static propTypes={
    user:PropTypes.object.isRequired,
    getUser:PropTypes.func.isRequired,
  }
  dataList = [
    {path:'/boss',text:'客人列表啊',img:'dashen',dis:'客人'},
    {path:'/consumer',text:'老板列表啊',img:'laoban',dis:'老板'},
    {path:'/message',text:'消息列表啊',img:'message',dis:'消息'},
    {path:'/personal',text:'个人中心啊',img:'personal',dis:'个人'},
  ];
  render(){
    const userid = Cookies.get('userid');
    const userDate = this.props.user;
    //没有cookie，去登陆界面
    if(!userid){
      return <Redirect to='/login'/>
    };
    const path = this.props.location.pathname;
    //处理处理路径为‘/’时的问题
    if(path === '/'){
      return <Redirect to={this.props.user.redirectTo}/>
    }
    //有cookie，reducer中没有状态，获取reducer中的状态
    if(!this.props.user.username){
      this.props.getUser();
      return <Icon type={'loading'} size={"lg"} className='loading'/>
    }
    //有cookie，reducer中有状态，直接只用reducer中的状态
    const item = this.dataList.find(item => path===item.path)
    return(
      <div>
        {item?<NavBar className='fixed'>{item.text}</NavBar>:null}
        <div className='margin-top'>
          <Route path='/bossinfo' component={Bossinfo}/>
          <Route path='/consumerinfo' component={Consumerinfo}/>
          <Route path='/consumer' component={Consumer}/>
          <Route path='/boss' component={Boss}/>
          <Route path='/message' component={Message} />
          <Route path='/personal' component={Personal} />
        </div>
        {item?<Footer dataList={this.dataList} type={this.props.user.type}/>:null }
      </div>
    )
  }
};
export default Main;