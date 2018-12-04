import React,{Component} from 'react';
import {Grid,List} from 'antd-mobile';
// import './index.less'
class HeaderSelector extends Component{
  state={
    header:null
  };
  changeHeader = (el,index)=>{
    this.setState({
      header:el.icon
    });
    index += 1;
    console.log(index)
    this.props.updateHeader(index)
  };

  render(){
    const {header} = this.state;
    const data = Array.from(new Array(20)).map((_val, i) => ({
      icon: require(`./images/头像${i + 1}.png`),
      text: `头像${i + 1}`,
    }));
    return(
      <List renderHeader={() => {
        return <div>请选择头像 <img src={header} alt=""/></div>
      }}>
        <Grid data={data} columnNum={5} activeStyle={false} onClick={this.changeHeader}/>
      </List>
    )
  }
};
export default HeaderSelector;