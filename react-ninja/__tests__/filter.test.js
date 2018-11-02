import { expect } from 'chai'
import filter from '../src/filter'

describe('filter´s tests', () => {
  test('filter must be a function', () => {
    expect(filter).to.be.a('function')
  })

  test('filter([10,20,30], item => item) should return [10,20,30]', () => {
    expect(filter([10,20,30], item => item)).to.be.deep.equal([10,20,30])
  })

  test('filter([0])')
})