import React, {Component} from 'react';

import './Oreo.css'

class Oreo extends Component{
  onInputChangeHandler = (event) => {
    console.log(event.target.value);
  }
  render(){
    return(
      <div>
        <input onChange={this.onInputChangeHandler} />
      </div>
    );
  }
}

export default Oreo;