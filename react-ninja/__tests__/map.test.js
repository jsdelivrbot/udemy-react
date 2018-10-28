import { expect } from 'chai'
import map from '../src/map'

describe('map', () => {
  test('map should be a function', () => {
    expect(map).to.be.a('function')
  })

  test('map([10,20], item => item) should return [10,20]', () => {
    expect(map([10,20], item => item)).to.be.deep.equal([10,20])
  })

  test('map([10,20], (item, i) => i) should return [0,1]', () => {
    expect(map([10,20], (item, i) => i)).to.be.deep.equal([0,1])  
  })

  test('map([10,20]) should thrown an error with the message "A function must be passed"', () => {
    expect(map).to.be.throw(/A function must be passed/)
  })
})