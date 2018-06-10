import 'rc-steps/assets/index.css';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';
import React, { Component } from 'react';
import './App.css';

const container = document.getElementById('__react-content');

function generateSteps() {
  const n = 5;
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      title: `Step${(i + 1)}`,
    });
  }
  return arr;
}
const steps = generateSteps();

class App extends Component {
  state = {
    currentStep: 0,
  };
  /*
  componentDidMount() {
    // You can dynamically set tail's left position based on main's width for each step.
    this.stepsRefs.forEach(s => {
      if (s.refs.tail) {
        s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
      }
    });
  }
  */
  nextStep = () => {
    let s = this.state.currentStep + 1;
    if (s === steps.length) {
      s = 0;
    }
    this.setState({
      currentStep: s,
    });
  }
  render() {
    const cs = this.state.currentStep;
    this.stepsRefs = [];
    return (
      <form className="my-step-form">
        <div className="my-step-container">
          <Steps current={cs}>
            {
              steps.map((s, i) => {
                return (
                  <Step ref={c => this.stepsRefs[i] = c}
                    key={i}
                    title={s.title}
                  />
                );
              })
            }
          </Steps>
        </div>

        <div><button type="button" onClick={this.nextStep}>button</button></div>
      </form>
    );
  }
}

export default App;
