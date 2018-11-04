import { expect } from 'chai'
import filterRecursive from '../src/filter-recursive'


describe('filterRecursive', () => {
  test('filterRecursive([10,20,30], item => item) should return [10,20,30]', () => {
    expect(filterRecursive([10,20,30], item => item)).to.be.deep.equal([10,20,30])
  })

  test('filterRecursive([0,10,20,30], item => item should retur [10,20,30])', () => {
    expect(filterRecursive([0,10,20,30], item => item)).to.be.deep.equal([10,20,30])  
  })

  test('filterRecursive([10,20,30], item => item < 15) should return [10]', () => {
    expect(filterRecursive([10,20,30], item => item < 15)).to.be.deep.equal([10])
  })

  test('filterRecursive([10,20,30], (item, i) => i <= 1) should return [10,20]', () => {
    expect(filterRecursive([10,20,30], (item, i) => i <= 1)).to.be.deep.equal([10,20])
  })
})