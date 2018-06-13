import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleMap from './components/GoogleMap';
import Speedo from './components/Speedo';
import ProgressBubble from './components/ProgressBubble';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: 50
    }
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({value: parseInt(e.target.value)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <GoogleMap></GoogleMap> */}
        <input type="number" min='0' max='100' onChange={this.changeValue} value={this.state.value}/>
        <Speedo value={this.state.value}/>
        <ProgressBubble value={this.state.value}/>
      </div>
    );
  }
}

export default App;
