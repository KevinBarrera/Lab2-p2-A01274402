import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arriba:'Achis achis',
      abajo:'los mariachis',
    }
    this.handleFraseTop = this.handleFraseTop.bind(this);
    this.handleFraseBottom = this.handleFraseBottom.bind(this);
    this.resetFrases = this.resetFrases.bind(this);
  }

  handleFraseTop(e){
    this.setState({
      arriba: e.target.value
    });
  }

  handleFraseBottom(e){
    this.setState({
      abajo: e.target.value
    });
  }

  resetFrases(e){
    e.preventDeafult();
    this.setState({
      arriba:'Achis achis',
      abajo:'los mariachis',
    });
  }

  render() {
    return (
      <div className="App">
        <div>Kevin Barrera Hernández - A01274402 - Laboratorio 2</div>
        <div className="formulario">
          <form>
            <input
              type="text"
              name="arriba"
              value={this.state.arriba}
              onChange = {this.handleFraseTop} 
            />
            <input
              type="text"
              name="abajo"
              value={this.state.abajo}
              onChange = {this.handleFraseBottom}  
            />
            <button onClick={this.resetFrases}>
              Reset
            </button>
          </form>
        </div>
        <div className="DogeMeme">
          <div className="frases">
            {this.state.arriba}
          </div>
          <div className="frases">
            {this.state.abajo}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
