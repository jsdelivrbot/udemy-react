import { expect } from 'chai'
import filter from '../src/filter'

describe('filter´s tests', () => {
  test('filter must be a function', () => {
    expect(filter).to.be.a('function')
  })

  test('filter([10,20,30], item => item) should return [10,20,30]', () => {
    expect(filter([10,20,30], item => item)).to.be.deep.equal([10,20,30])
  })

  test('filter([0,10,20,30], item => item should retur [10,20,30])', () => {
    expect(filter([0,10,20,30], item => item)).to.be.deep.equal([10,20,30])  
  })

  test('filter([10,20,30], item => item < 15) should return [10]', () => {
    expect(filter([10,20,30], item => item < 15)).to.be.deep.equal([10])
  })

  test('filter([10,20,30], (item, i) => i <= 1) should return [10,20]', () => {
    expect(filter([10,20,30], (item, i) => i <= 1)).to.be.deep.equal([10,20])
  })
})