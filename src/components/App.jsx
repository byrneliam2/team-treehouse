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
<<<<<<< HEAD:src/components/App.js
  this.nextStep = this.nextStep.bind(this)
  this.prevStep = this.prevStep.bind(this)
}
=======

>>>>>>> a1a8d4baf9f2a8d6a765b8463dca2a124cd557b1:src/components/App.jsx
  nextStep() {
    this.setState({step: this.state.step + 1 })
    console.log(this.state.step)
  }
<<<<<<< HEAD:src/components/App.js
  prevStep(){
    if(this.state.step >= 1 ){
      this.setState({step: this.state.step - 1 })
    }
    else {
      return
    }
  }
=======

>>>>>>> a1a8d4baf9f2a8d6a765b8463dca2a124cd557b1:src/components/App.jsx
  componentWillMount(){
  }
<<<<<<< HEAD:src/components/App.js

=======
  
>>>>>>> a1a8d4baf9f2a8d6a765b8463dca2a124cd557b1:src/components/App.jsx
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
