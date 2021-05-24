'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
    
  }

  render () {
    return (
      <div>
        <form>
          <select value={this.state.value} onChange={ (e) => {
            this.setState({
              value: e.target.value
            })
          }}>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>
          
          <select multiple value={['1', '2']} onChange={ (e) => {
            this.setState({
              value: e.target.value
            })
          }}>
            <option value='1'>Opção 4</option>
            <option value='2'>Opção 5</option>
            <option value='3'>Opção 6</option>
          </select>
          <input type='text' value={this.state.value} onChange={ (e) => {
            this.setState({
              value: e.target.value
            })
          }} />
        </form>
      </div>
    )
  }
}

export default App
