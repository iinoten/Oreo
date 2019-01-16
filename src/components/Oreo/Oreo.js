import React, {Component} from 'react';

import './Oreo.css'

import O from '../O/O';
import Re from '../Re/Re';

class Oreo extends Component{
  state = {
    load: 0,
    oreo: [],
    oreo_result:"　"
  }
  
  onInputChangeHandler = (event) => {
    if ( event.target.value.slice(-1) === "オ" ) {
      this.setState({
        oreo: this.state.oreo.concat(<O className="o" load={this.state.load.toString()} />)
      });
      this.setState({
        load: this.state.load + 1,
        oreo_result: this.state.oreo_result + "オ"
      });
    }
    if ( event.target.value.slice(-1) === "レ" ) {
      this.setState({
        oreo: this.state.oreo.concat(<Re className="re" load={this.state.load.toString()} />)
      });
      this.setState({
        load: this.state.load + 1,
        oreo_result: this.state.oreo_result + "レ"
      });
    }
    var last_Chara = event.target.value.slice(-1);
    if ( (last_Chara!=="お")&&(last_Chara!=="れ")&&(last_Chara!=="ｒ")&&(last_Chara!=="r") ) {
      event.target.value = "";
    }
   }
  render(){
    return(
        <div>
          <div className="title">OREO:maker</div>
          <div className="oreo" style={{height:this.props.height.toString() * 0.6 +"px"}}>
          <div className="sweets">
            { this.state.oreo.map((item, i) => 
                <React.Fragment key={i}><div>{item}</div></React.Fragment>) 
            }
          </div>
          </div>
          <marquee className="result">{this.state.oreo_result}</marquee>
        <input className="oreoForm" onChange={this.onInputChangeHandler} />
        <h4>v1.1</h4>
        <div className="share-button"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="OREO:makerでオレオを作りました" data-url="https://oreo-f8d0f.firebaseapp.com/" data-hashtags="oreomaker" data-related="ntenten_Q" data-lang="en" data-show-count="false">Tweet</a></div>
      </div>
    );
  }
}

export default Oreo;