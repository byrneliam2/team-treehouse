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
      <div className="page">
        {/* <button onClick={this.props.nextStep}>next step </button> */}
        <p>Landing</p>
      </div>
    )
  }
}
