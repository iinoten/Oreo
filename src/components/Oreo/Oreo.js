import React, {Component} from 'react';

import './Oreo.css'

import O from '../O/O';
import Re from '../Re/Re';

class Oreo extends Component{
  state = {
    load: 0,
    oreo: [],
    height:0
  }
  
  onInputChangeHandler = (event) => {
    if ( event.target.value.slice(-1) === "オ" ) {
      this.setState({
        oreo: this.state.oreo.concat(<O className="o" load={this.state.load.toString()} />)
      });
      this.setState({
        load: this.state.load + 1
      });
    }
    if ( event.target.value.slice(-1) === "レ" ) {
      this.setState({
        oreo: this.state.oreo.concat(<Re className="re" load={this.state.load.toString()} />)
      });
      this.setState({
        load: this.state.load + 1
      });
    }
    var last_Chara = event.target.value.slice(-1);
    if ( (last_Chara!=="お")&&(last_Chara!=="れ")&&(last_Chara!=="ｒ") ) {
      event.target.value = "";
    }
   }
  render(){
    return(
        <div>
          <div className="title">OREO:maker</div>
          <div className="oreo">
          <div className="sweets">
            { this.state.oreo.map((item, i) => 
                <React.Fragment key={i}><div>{item}</div></React.Fragment>) 
            }
          </div>
          </div>
        <input className="oreoForm" onChange={this.onInputChangeHandler} />
      </div>
    );
  }
}

export default Oreo;