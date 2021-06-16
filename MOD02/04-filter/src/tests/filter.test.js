'use strict'

import { expect } from "chai"
import filter from '../filter/filter'

describe('Filter Tests', () => {

  it('01 Filter should be a function', () => {
    expect(filter).to.be.a('function')
  });
  
  it('02 filter([1, 2, 3], (item) => item) should return [1, 2, 3]', () => {
    expect(filter([1, 2, 3], (item) => item)).to.be.deep.equal([1, 2, 3])
  });

  it('03 filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
    expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2])
  });

  it('04 filter([1, 2, 3], (item) => item < 2) should return [1]', () => {
    expect(filter([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1])
  });

  it('05 filter([1, 2, 3, 5], (item, index) => item === index + 1)', () => {
    expect(filter([1, 2, 3, 5], (item, index) => item === index + 1 )).to.be.deep.equal([1, 2, 3])
  });
  
  it('06 filter([1, 2, 3, 2, 1, 5, 3], (item, index, array) => index === array.indexOf(item)) should return [1, 2, 3, 5]', () => {
    const before = filter([1, 2, 3, 2, 1, 5, 3], (item, index, array) => index === array.indexOf(item));
    expect(before).to.be.deep.equal([1, 2, 3, 5])
  });
  
  
});
