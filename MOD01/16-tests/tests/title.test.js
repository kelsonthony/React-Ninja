'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const $ = require('whacko')
const Title = require('../src/title')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
  )

console.log($(TitleComponent).get(0).tagName)