import React, { Component } from 'react';
//import O from './components/O/O';
//import Re from './components/Re/Re';
import Oreo from './components/Oreo/Oreo';
 
class App extends Component {
  componentWillMount(){
    console.log(window.screen.width);
  }
  render() {
    return (
      <div className="App">
        <Oreo width={window.screen.width}/>
      </div>
    );
  }
}

export default App;
