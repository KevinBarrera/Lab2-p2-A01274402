import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Oracion extends Component {
  render(){
    return(
      <div className="frases">
        {this.props.texto}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="DogeMeme">
          <Oracion texto="Hola hola"></Oracion>
          <Oracion texto="que se atora"></Oracion>
        </div>
      </div>
    );
  }
}

export default App;
