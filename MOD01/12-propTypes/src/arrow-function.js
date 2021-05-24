'use strict'

console.log('Arrow Functions: ')

var sum = function (x, y) {
  return x + y
}

console.log(sum(1, 2))


// var sum2 = (x, y) => {
//   return x + y
// }
var sum2 = (x, y) => x + y

console.log(sum2(4, 2))


//var add1 = (x) => sum2(x, 1)
var add1 = x => sum2(x, 1)

console.log(add1(4))