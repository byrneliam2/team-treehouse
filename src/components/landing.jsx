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
        <h1>I need help with...</h1>
        <div className="page center">
            {/* <button onClick={this.props.nextStep}>next step </button> */}
            {/* <p>Landing</p> */}
            <table>
                <tc>
                    <td>Visitors</td>
                </tc>
                <tc>
                    <td>Health</td>
                </tc>
                <tc>
                    <td>Education</td>
                </tc>
                <tc>
                    <td>Working</td>
                </tc>
                <tc>
                    <td>Funding</td>
                </tc>
            </table>

        </div>
      </div>
    )
  }
}
