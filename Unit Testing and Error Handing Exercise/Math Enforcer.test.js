const { mathEnforcer} = require('./Math Enforcer')
const {expect} = require('chai')


describe('mathEnforcer', ()=>{
    describe('addFive', () => {
        it('Check with correct type', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it('Check with type mismatch', () => {
            expect(mathEnforcer.addFive('1')).to.equal(undefined);
        });
        it('Check with floating point number', () => {
            expect(mathEnforcer.addFive(1.23)).to.be.closeTo(6.23, 0.01);
        })
        it('Check with negative number', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
        it('Check with multiple parameters', () => {
            expect(mathEnforcer.addFive(2, 4)).to.equal(7);
        });
    });

    describe('subtractTen', () => {
        it('Check with correct type', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
        });
        it('Check with type mismatch', () => {
            expect(mathEnforcer.subtractTen('11')).to.equal(undefined);
        });
        it('Check with floating point number', () => {
            expect(mathEnforcer.subtractTen(11.23)).to.be.closeTo(1.23, 0.01);
        })
        it('Check with negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('Check with multiple parameters', () => {
            expect(mathEnforcer.subtractTen(11, 4)).to.equal(1);
        });
    });

    describe('sum', () => {
        it('Check with correct type', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
        });
        it('Check with type mismatch', () => {
            expect(mathEnforcer.sum('1', '2')).to.equal(undefined);
            expect(mathEnforcer.sum('1', 2)).to.equal(undefined);
            expect(mathEnforcer.sum(1, '2')).to.equal(undefined);
        });
        it('Check with floating point number', () => {
            expect(mathEnforcer.sum(1.11, 2.22)).to.be.closeTo(3.33, 0.01);
        })
        it('Check with negative number', () => {
            expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
        });
        it('Check with multiple parameters', () => {
            expect(mathEnforcer.sum(1, 2, 3)).to.equal(3);
        });
    });
})