'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor Timer')
    super()
    this.state = {
      time: 0
    }

    this.timer
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps Timer', this.props, nextProps)
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate Timer', this.props, nextProps, nextState)
    return this.state.time !== nextState.time 
    //return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', this.props, nextProps, nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', this.props, prevProps)
  }

  componentDidMount () {
    console.log('componentDidMount Timer')
    this.timer = setInterval(() => {
      this.setState({ 
        time: this.state.time + 1 
      }) 
      }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    console.log('timer render')
    return (
      <div>
        Timer: {this.state.time}
      </div>
    )
  }
}
export default Timer