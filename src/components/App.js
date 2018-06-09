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
  this.prevStep = this.prevStep.bind(this)
}
  nextStep() {
    this.setState({step: this.state.step + 1 })
    console.log(this.state.step)
  }
  prevStep(){
    if(this.state.step >= 1 ){
      this.setState({step: this.state.step - 1 })
    }
    else {
      return
    }
  }
  componentWillMount(){
  }

  render() {
    return (
      <main>
        <div className="progressBar">
        </div>
        <div>
          <Landing prevStep={this.prevStep} nextStep={this.nextStep} step={this.state.step}/>
        </div>
      </main>
    );
  }
}

export default App;
