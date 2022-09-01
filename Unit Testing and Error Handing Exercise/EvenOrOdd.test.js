const {expect} = require('chai')
const {isOddOrEven} = require('./02. Even Or Odd')

describe('isOddOrEven function tests',()=>{
// invalid input
  
    it('return undefined if parameter is object', () => {
        expect(isOddOrEven({})).to.be.undefined;
        
    });
    it('return undefined if parameter is array', () => {
        expect(isOddOrEven([])).to.be.undefined;
        
    });
    it('Test with non-string type', () => {
        expect(isOddOrEven(7)).to.be.undefined;
        
    });

    //valid tests

    it('Test with odd-length string', () => {
        expect(isOddOrEven('aaaa')).to.equal('even')
        expect(isOddOrEven('bbbb')).to.equal('even')

    });
    it('Test with even-length string', () => {
        expect(isOddOrEven('aaa')).to.equal('odd')
        expect(isOddOrEven('bbb')).to.equal('odd')

    });
    it('Test with multiple strings in a row', () => {
        expect(isOddOrEven('aba', 'babab', 'abba')).to.equal('odd');
    });
})
