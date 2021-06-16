'use strict'

import { expect } from 'chai'
import map from '../map/map'

describe('Map Test', () => {
  it('Map should be a function', () => {
    expect(map).to.be.a('function')
  });
  
  it('01 map([1, 2], (item) => item should return [1, 2] ', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
  });
  
  it('02 map([3, 4], (item) => item should return [3, 4] ', () => {
    expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
  });

  it('03 map([1, 2], (item) => item + 1) should return [2, 3]', () => {
    expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
  });
  
  it('04 map([4, 6], (item) => item + 1) should return [5, 7]', () => {
    expect(map([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
  });

  it('05 map([1, 2], (item, index) => return index) should return [0, 1]', () => {
    expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
  });

  it('06 map([1, 2], (item, index, array) => array should return [[1, 2], [1, 2]])', () => {
    expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
  });
    
  // it('07 map([1, 2]) should throw error with the message "func is not a function"', () => {
  //   expect(map).to.throw(TypeError, /func is not a function/)
  // });

  // it('08 map should throw an error with message: "arr is not an array"', () => {
  //   expect(map).to.throw(TypeError, /arr is not an array/)
  // });
  it('08 map() should return []', () => {
    expect(map()).to.be.deep.equal([])
  });
  
  it('09 map([1, 2]) should return [1, 2] ', () => {
    expect(map([1, 2])).to.be.deep.equal([1, 2])
  });
  
  
  
});
