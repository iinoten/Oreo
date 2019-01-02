import React, {Component} from 'react';

import './O.css'

class O extends Component{
  render(){
    var style = {
      zIndex: "-" + this.props.load,
      bottom: this.props.load * 70
    }
    return(
      <div>
        <div className="O" style={style}><div className="pattern">OREO</div></div>
      </div>
    );
  }
}

export default O;