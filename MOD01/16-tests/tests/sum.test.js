'use strict'

const sum = require('./sum')

console.assert(typeof sum === 'function', 'sum should be a function')

console.assert(
  sum(1, 2) === 3,
  'should sum(1, 2) returns 3'
)

console.assert(
  sum(2, 3) === 5,
  'should sum(2, 3) returns 5'
)

console.log('All tests passed')