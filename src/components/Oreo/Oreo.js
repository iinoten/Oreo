import React, {Component} from 'react';

import './Oreo.css'

import O from '../O/O';
import Re from '../Re/Re';

class Oreo extends Component{
  state = {
    str: [],
    oreo: []
  }
  
  onInputChangeHandler = (event) => {
    var Array = this.state.oreo;
    console.log(Array);
    if(event.target.value === "Hello"){
      console.log("Wolrd");
    }
    this.setState({
      oreo: this.state.oreo.concat(<O />)
    });
    console.log(this.state.oreo);
  }
  render(){
    return(
        <div>
        { this.state.oreo.map((item, i) => 
            <React.Fragment key={i}>{item}</React.Fragment>) 
        }
        <input onChange={this.onInputChangeHandler} />
      </div>
    );
  }
}

export default Oreo;