import React, { Component } from 'react';
import '../App.css';
import Landing from './Landing'

class App extends Component {
  constructor (props) {
  super(props)
  this.state = {
    step: 0
  }
  this.nextStep = this.nextStep.bind(this)
}
  nextStep() {
    this.setState({step: this.state.step + 1 })
    console.log(this.state.step)
  }
  componentWillMount(){

  }
  render() {
    return (
      <div>
        <Landing nextStep={this.nextStep} step={this.state.step}/>
      </div>
    );
  }
}

export default App;
