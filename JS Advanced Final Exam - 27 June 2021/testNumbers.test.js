
const { expect } = require('chai')
const { testNumbers } = require('./testNumbers.js')

describe("Tests", () => {
    describe('Testing  sumNumbers(num1, num2)', function () {
        it('Happy path with good arguments',function() {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00')
            expect(testNumbers.sumNumbers(3.20,4.30)).to.equal('7.50')
            expect(testNumbers.sumNumbers(-1,4.30)).to.equal('3.30')
            expect(testNumbers.sumNumbers(-1,-1.10)).to.equal('-2.10')
        })
        it('Check for parameters',function(){
            expect(testNumbers.sumNumbers('1',2)).to.equal(undefined)
            expect(testNumbers.sumNumbers(1,'2')).to.equal(undefined)
            expect(testNumbers.sumNumbers('1')).to.equal(undefined)
            expect(testNumbers.sumNumbers([1],2)).to.equal(undefined)
            expect(testNumbers.sumNumbers(false,2)).to.equal(undefined)
            expect(testNumbers.sumNumbers(2,false)).to.equal(undefined)
        })
        describe('Testing numberChecker(input)', function () {
            it('Happy path with good arguments',function() {
                expect(testNumbers.numberChecker(1)).to.equal('The number is odd!')
                expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
                expect(testNumbers.numberChecker(3)).to.equal('The number is odd!')
                expect(testNumbers.numberChecker(4)).to.equal('The number is even!')
                expect(testNumbers.numberChecker('')).to.equal("The number is even!");
                expect(testNumbers.numberChecker(null)).to.equal("The number is even!");
            })
            it("Input is NaN", function () {
                expect(() => testNumbers.numberChecker(undefined)).to.throw(Error, "The input is not a number!");
                expect(() => testNumbers.numberChecker(NaN)).to.throw(Error, "The input is not a number!");
                expect(() => testNumbers.numberChecker('str')).to.throw(Error, "The input is not a number!");
            });

            describe("Test averageSumArray(arr)", function () {
                it("Happy path", function () {
                    expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
                    expect(testNumbers.averageSumArray([1, 1, 1])).to.equal(1);
                    expect(testNumbers.averageSumArray([-2, 2])).to.equal(0);
                    expect(testNumbers.averageSumArray([2, -2])).to.equal(0);
                    expect(testNumbers.averageSumArray([0, 0])).to.equal(0);
                    expect(testNumbers.averageSumArray([1.5, 2.5])).to.equal(2);
                });
       
    })
})
})
})