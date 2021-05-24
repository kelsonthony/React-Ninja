'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial',
      check: false
    }
  }

  render () {
    return (
      <div>
        <form>
          <input
            type='text' value={this.state.value} onChange={(e) => {
              this.setState({
                value: e.target.value
              })
            }}
          />
          <label>
            <input 
              type='checkbox' 
              value='my value' 
              checked={this.state.check} 
              onChange={ (e) => {
                this.setState({
                  check: !this.state.check
                })
              }}
            />
            Checkbox
          </label>
          <label>
            <input type='radio' name='rd' value='1' defaultChecked />Radio 1
          </label>
          <label>
            <input type='radio' name='rd' value='2' />Radio 2
          </label>
          <label>
            <input type='radio' name='rd' value='3' />Radio 3
          </label>
        </form>
      </div>
    )
  }
}

export default App
