import { expect } from 'chai'
import some from '../src/some'

describe('some test', () => {
  test('some should be a function', () => {
    expect(some).to.be.a('function')
  }) 

  
  test('some([], item => item > 1) should return "true"', () => {
    expect(some([], item => item)).to.be.ok
  })

  test('some([0,1,2], item => item > 1) should return "true"', () => {
    expect(some([0,1,2], item => item)).to.be.ok
  })

})