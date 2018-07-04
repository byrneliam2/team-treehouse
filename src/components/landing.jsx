import React from 'react'
import './Landing.css'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  componentWillMount() {
    console.log(this.props)
    console.log(this.props.step)
  }

  render() {
    return (
      <div>
        <h1>I am...</h1>
        <div className="page center">
          {/* <button onClick={this.props.nextStep}>next step </button> */}
          {/* <p>Landing</p> */}
          <div class="buttonrow">
            <div class="button" style={{ color: "#3B3B3B" }}>
              <p>elderly</p>
            </div>
            <div class="button" style={{ color: "#248502" }}>
              <p>a parent</p>
            </div>
            <div class="button" style={{ color: "#EITA13" }}>
              <p>a visitor</p>
            </div>
            <div class="button" style={{ color: "#B55050" }}>
              <p>a resident</p>
            </div>
            <div class="button" style={{ color: "#2278C4" }}>
              <p>disabled</p>
            </div>
            <div class="button" style={{ color: "purple" }}>
              <p>a student</p>
            </div>
            <div class="button" style={{ color: "yellow" }}>
              <p>employed</p>
            </div>
          </div>
        </div>
        <h1>looking for information about...</h1>
        <div className="page2 center">
          {/* <button onClick={this.props.nextStep}>next step </button> */}
          {/* <p>Landing</p> */}
          <div class="buttonrow">
            <div class="button" style={{ color: "#B55050" }}>
              <p>applying for financial help</p>
            </div>
            <div class="button" style={{ color: "green" }}>
              <p>engaging with government</p>
            </div>
            <div class="button" style={{ color: "blue" }}>
              <p>becoming a student</p>
            </div>
            <div class="button" style={{ color: "yellow" }}>
              <p>getting covered for health related costs</p>
            </div>
            <div class="button" style={{ color: "purple" }}>
              <p>public services</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
