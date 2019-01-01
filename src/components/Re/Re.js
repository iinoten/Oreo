import React, {Component} from 'react';

import './Re.css'

class Re extends Component{
  render(){
    var style = {
      zIndex: "-" + this.props.load,
      bottom: this.props.load * 70
    }
    return(
      <div>
        <div className="Re" style={style}><div className="shadow"></div></div>
      </div>
    );
  }
}

export default Re;