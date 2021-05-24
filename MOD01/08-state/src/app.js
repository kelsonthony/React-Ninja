'use strict'

import React, { Component } from 'react'



class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Kelson'
    }
  }

  render () {
    return (
      <div
        className='container' onClick={() => this.setState({
          text: 'Menezes'
        })}>
        {this.state.text}
      </div>
    )
  }
}
export default App
