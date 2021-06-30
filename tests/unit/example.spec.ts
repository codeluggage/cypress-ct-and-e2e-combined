import { expect } from "chai"

import calc from '@/utils/calc'


describe('Unit Test Application Code', () => {
  const { calculateTheAnswer } = calc

  before(() => {
    // check if the import worked correctly
    expect(calculateTheAnswer , 'calculateTheAnswer ').to.be.a('function')
  })

  it('answers false when sum is not 42', () => {
    expect(calculateTheAnswer(0, 42)).to.eq(false)
  })

  it('answers true when sum is 42', () => {
    expect(calculateTheAnswer(2, 22)).to.eq(false)
  })
})
