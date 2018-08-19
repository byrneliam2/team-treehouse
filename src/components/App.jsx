import React, { Component } from 'react'
import Landing from './Landing'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      step: 0
    }
    this.nextStep = this.nextStep.bind(this)

    document.body.style = 'background: #0f0f0f;';
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 })
    console.log(this.state.step)
  }

  componentWillMount() {
  }

  render() {
    return (
      <main>
        <div>
          <img class="govtimg" src="/govt_inv.png" alt="New Zealand Government" />
        </div>
        <div className="progressBar">
        </div>
        <div>
          <Landing prevStep={this.prevStep} nextStep={this.nextStep} step={this.state.step} />
        </div>
      </main>
    );
  }
}

export default App;
