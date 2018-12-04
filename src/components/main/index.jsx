import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Bossinfo from '../boss-info';
import Consumerinfo from '../consumer-info'
class Main extends Component{
  render(){
    return(
      <div>
        <Route path='/bossinfo' component={Bossinfo}/>
        <Route path='/consumerinfo' component={Consumerinfo}/>
      </div>
    )
  }
};
export default Main;