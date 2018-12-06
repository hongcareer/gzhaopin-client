import React,{Component} from 'react';
import {TabBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import './index.less'
const Item  = TabBar.Item
class Footer extends Component{
  static propTypes = {
    dataList:PropTypes.array.isRequired,
    type:PropTypes.string.isRequired
  };
  //点击重定向
  redirectTo = (path)=>{
    this.props.history.push(path)
  }
  render(){
    //过滤传递多来的数据中path值为consumer数据,当type=boss时，过滤consumer

    const filter = this.props.type === 'boss' ? '/consumer' : '/boss';
    const dataList = this.props.dataList.filter(item=>item.path !== filter);
    return(
      <TabBar className='am-tab-bar'>
        {dataList.map((item,index) => <Item
          key={index}
          title={item.dis}
          icon={<img src={require(`./images/${item.img}.png`)} alt={item.dis} className='imgSize'/> }
          selected={item.path === this.props.location.pathname}
          onPress={this.redirectTo.bind(null,item.path)}
          selectedIcon={<img src={require(`./images/${item.img}-selected.png`)} alt={item.dis} className='imgSize'/> }
        />)}
      </TabBar>
    )
  }
};
export default withRouter(Footer);