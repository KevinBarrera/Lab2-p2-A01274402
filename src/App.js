import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arriba:'Ora ora...',
      abajo:'que se atora!',
    }
    this.handleFraseTop = this.handleFraseTop.bind(this);
    this.handleFraseBottom = this.handleFraseBottom.bind(this);
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

  render() {
    return (
      <div className="App">
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
