const { expect } = require('chai')
const { sum } = require('./sum')

describe('Sum tests', () => {
    it('works with possitive numbers 1 + 1 ', () => {
        expect(sum([1, 1])).to.be.equal(2)
    })
    it('works with one positive and one negative number 1 + -1 ', () => {
        expect(sum([1, -1])).to.be.equal(0)
    })
    it('works with possitive numbers -1 + -1 ', () => {
        expect(sum([-1, -1])).to.be.equal(-2)
    })
    it('works with zero numbers numbers 0 + 0 ', () => {
        expect(sum([0, 0])).to.be.equal(0)
    })
    it('works with epmty array  ', () => {
        expect(sum([])).to.be.equal(0)
    })
    it('works with three numbers ', () => {
        expect(sum([1, 2, 3])).to.be.equal(6)
    })


})