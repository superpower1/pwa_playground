import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleMap from './components/GoogleMap';
import Speedo from './components/Speedo';
import ProgressBubble from './components/ProgressBubble';
import ProgressCircle from './components/ProgressCircle';
import LineChart from './components/LineChart';

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
        <LineChart></LineChart>
        <input type="number" min='0' max='100' onChange={this.changeValue} value={this.state.value}/>
        <Speedo value={this.state.value}/>
        <ProgressBubble value={this.state.value}/>
        <ProgressCircle value={this.state.value} benchmarkValue={80} valuelabel='Availability' size={150} strokewidth={10}/>
      </div>
    );
  }
}

export default App;
