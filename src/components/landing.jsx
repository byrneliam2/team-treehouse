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

  componentWillMount(){
    console.log(this.props)
    console.log(this.props.step)
  }

  render() {
    return (
      <div>
        <h1>I am a...</h1>
        <div className="page center">
            {/* <button onClick={this.props.nextStep}>next step </button> */}
            {/* <p>Landing</p> */}
            <div class="buttonrow">
                <div class="button" style={{color: "red"}}>
                    <p>elderly</p>
                </div>
                <div class="button" style={{color: "lime"}}>
                    <p>parent</p>
                </div>
                <div class="button" style={{color: "blue"}}>
                    <p>visitor</p>
                </div>
                <div class="button" style={{color: "yellow"}}>
                    <p>resident</p>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <p>disabled</p>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <p>student</p>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <p>employed</p>
                </div>
            </div>
        </div>
        <h1>looking for information about...</h1>
        <div className="page2 center">
            {/* <button onClick={this.props.nextStep}>next step </button> */}
            {/* <p>Landing</p> */}
            <div class="buttonrow">
                <div class="button" style={{color: "red"}}>
                    <p>applying for financial help</p>
                </div>
                <div class="button" style={{color: "green"}}>
                    <p>engaging with government</p>
                </div>
                <div class="button" style={{color: "blue"}}>
                    <p>becoming a student</p>
                </div>
                <div class="button" style={{color: "yellow"}}>
                    <p>getting covered for health related costs</p>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <p>public services</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
