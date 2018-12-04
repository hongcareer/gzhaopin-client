import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Bossinfo from '../boss-info'
class Main extends Component{
  render(){
    return(
      <Route path='/bossinfo' component={Bossinfo}/>
    )
  }
};
export default Main;