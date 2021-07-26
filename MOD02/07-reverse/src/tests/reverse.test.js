'use strict'

import { expect } from "chai"
import reverse from '../reverse/reverse'

describe('Reverse Tests', () => {
  
  it('01 Reverse should be a function', () => {
    expect(reverse).to.be.a('function')
  });

  it('02 reverse([1]) should return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1])
  });

  it('03 reverse([1, 2]) should return [2, 1]', () => {
    expect(reverse([1, 2])).to.be.deep.equal([2, 1])
  });
  

  it('04 reverse(["Mchilanny", "Bussinguer"]) should return ["Bussinguer", "Mchilanny"]', () => {
    expect(reverse(["Mchilanny", "Bussinguer"])).to.be.deep.equal(["Bussinguer", "Mchilanny"])
  });
  
});
