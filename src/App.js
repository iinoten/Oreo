import React, { Component } from 'react';
//import O from './components/O/O';
//import Re from './components/Re/Re';
import Oreo from './components/Oreo/Oreo';
 
class App extends Component {
  componentWillMount(){
    console.log(window.screen.height);
  }
  render() {
    return (
      <div className="App">
        <Oreo height={window.screen.height}/>
      </div>
    );
  }
}

export default App;
