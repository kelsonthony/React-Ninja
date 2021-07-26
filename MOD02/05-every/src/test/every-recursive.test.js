'use strict'

import { expect } from 'chai'
import every from '../every/every-recursive'

describe('Every Tests', () => {
  
  it('01 every should be a function', () => {
    expect(every).to.be.a('function')
  });
  
  it('02 every([], (item) => item)', () => {
    expect(every([], (item) => item)).to.be.ok
  });
  
  it('03 every([0, 2, 3], (item) => item) should return false', () => {
    expect(every([0, 2, 3], (item) => item)).to.not.be.ok
  });
  
  it('04 every([1, 2, 3], (item) => item) should return true', () => {
    expect(every([1, 2, 3], (item) => item)).to.be.ok
  });
  
  it('05 every([1, 2, 3], (item, index) => index === item -1) should return true', () => {
    expect(every([1, 2, 3], (item, index) => index === item -1 )).to.be.ok
  
  });

  it('06 every([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
    expect(every([1, 2, 3], (item, index, array) => array.length === 3)).to.be.ok
  });
  
});
