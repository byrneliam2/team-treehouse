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
                    <div>elderly</div>
                </div>
                <div class="button" style={{color: "green"}}>
                    <div>parent</div>
                </div>
                <div class="button" style={{color: "blue"}}>
                    <div>visitor</div>
                </div>
                <div class="button" style={{color: "yellow"}}>
                    <div>resident</div>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <div>disabled</div>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <div>student</div>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <div>employed</div>
                </div>
            </div>
        </div>
        <h1>looking for information about...</h1>
        <div className="page center">
            {/* <button onClick={this.props.nextStep}>next step </button> */}
            {/* <p>Landing</p> */}
            <div class="buttonrow">
                <div class="button" style={{color: "red"}}>
                    <div>elderly</div>
                </div>
                <div class="button" style={{color: "green"}}>
                    <div>parent</div>
                </div>
                <div class="button" style={{color: "blue"}}>
                    <div>visitor</div>
                </div>
                <div class="button" style={{color: "yellow"}}>
                    <div>resident</div>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <div>disabled</div>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <div>student</div>
                </div>
                <div class="button" style={{color: "purple"}}>
                    <div>employed</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
