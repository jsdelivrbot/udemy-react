import { expect } from 'chai'
// import every from '../src/every/every'
import every from '../src/every-recursive'

describe('every test', () => {
  test('every should be a function', () => {
    expect(every).to.be.a('function')
  })

  test('every([]), item => item should return "true"', () => {
    expect(every([], item => item)).to.be.ok
  })

  test('every([0,1,2], item => item) should return "false"', () => {
    expect(every([0,1,2], item => item)).to.not.be.ok
  })

  test('every([1,2,3], item => item) should return "true"', () => {
    expect(every([1,2,3], item => item)).to.be.ok
  })

  test('every([0,1,2], (item, index) => item === index ++) should return "true"', () => {
    expect(every([0,1,2], (item, index) => item === index ++)).to.be.ok
  })

  test('every([0,1,2], (item, index, array) => array.length === 3) should be "true"', () => {
    expect(every([0,1,2], (item, index, array) => array.length === 3)).to.be.ok
  })
})
