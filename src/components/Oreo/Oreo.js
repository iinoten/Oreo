import React, {Component} from 'react';

import './Oreo.css'

import O from '../O/O';
import Re from '../Re/Re';

class Oreo extends Component{
  state = {
    load: 0,
    oreo: []
  }
  
  onInputChangeHandler = (event) => {
    if(event.target.value === "Hello"){
      console.log("Wolrd");
    }
    if ( event.target.value.slice(-1) === "オ" ) {
      this.setState({
        oreo: this.state.oreo.concat(<O load={this.state.load.toString()} />)
      });
      this.setState({
        load: this.state.load + 1
      });
    }
    if ( event.target.value.slice(-1) === "レ" ) {
      this.setState({
        oreo: this.state.oreo.concat(<Re load={this.state.load.toString()} />)
      });
      this.setState({
        load: this.state.load + 1
      });
    }
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