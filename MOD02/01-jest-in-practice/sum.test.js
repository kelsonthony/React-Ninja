'use strict'

import { expect } from 'chai';
import sum from './sum';

describe('Escopo 1 Sum Function', () => {
  
  it('sum should be a function', () => {
    expect(sum).to.be.a('function')
  });
  
});


