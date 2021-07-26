'use strict'

import { expect } from "chai"
import reduce from '../reduce/reduce'
import reduceRight  from '../reduce/reduceright'

describe('Reduce Tests', () => {
  
  it('01 reduce should be a function', () => {
    expect(reduce).to.be.a('function')
  });

  it('02 reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {

    const before = reduce([1, 2, 3], (acc, item) => acc + item, 0)
    const after = 6
    expect(before).to.be.equal(after)
  });

  it('03 reduce([2, 3, 4], (acc, item) => acc + item, 0) should return 9', () => {
    
    const before = reduce([2, 3, 4], (acc, item) => acc + item, 0)
    const after = 9
    expect(before).to.be.equal(after)
  });


  it('04 reduce([2, 3, 4], (acc, item) => acc + item) should return 9', () => {
    
    const before = reduce([2, 3, 4], (acc, item) => acc + item)
    const after = 9
    expect(before).to.be.equal(after)
  });

  it('05 reduce([1, 2], (acc, item) => { acc["number-", + item] = item; return acc }, {}) should return {"number=1": 1, "number-2": 2}', () => {
    const before = reduce([1, 2], (acc, item) => { 
      acc["number-" + item] = item
      return acc 
    }, {})
    const after = {"number-1": 1, "number-2": 2}
    expect(before).to.be.deep.equal(after)

  });

  it('06 reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1', () => {
    const before = reduce([1, 2], (acc, item, index) => acc + index, 0)
    const after = 1
    expect(before).to.be.equal(after)
  });

  it('07 reduce([1, 2], (acc, item, index, array) => acc + arr[index], 0) should return 3', () => {
    const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
    const after = 3
    expect(before).to.be.equal(after)
  });

  it('09 Reduce Right reduceRight(["nny", "la", "mchi"], (arr, item) => acc + item, "") should return "mchilanny"', () => {
    const before = reduceRight(["nny", "la", "mchi"], (acc, item) => acc + item, "")
    const after = "mchilanny"
    expect(before).to.be.equal(after)
  });
  
});