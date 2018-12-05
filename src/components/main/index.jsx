import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Bossinfo from '../../containers/boss-info';
import Consumerinfo from '../../containers/consumer-info';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom'
class Main extends Component{

  render(){
    const userid = Cookies.get('userid');
    if(!userid){
      return <Redirect to='/login'/>
    }
    return(
      <div>
        <Route path='/bossinfo' component={Bossinfo}/>
        <Route path='/consumerinfo' component={Consumerinfo}/>
      </div>
    )
  }
};
export default Main;