import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor (props) {
  super(props)
  this.state = {
    stage: 0
  }
  this.nextStage = this.nextStage.bind(this)
}
  nextStage() {
    this.setState({stage: this.state.stage++})
  }
  componentWillMount(){
    console.log(this.state.stage)
  }
  render() {
    return (
        <p>Hello world!</p>
    );
  }
}

export default App;
