const {expect} = require('chai')
const {lookupChar} = require('./Char Lookup')

describe('Char Lookup tests',()=>{

    //positive tests 
    it('Return char at index',()=>{
        expect(lookupChar('Love',0)).to.be.equal('L');
    })
    it('Return char at index',()=>{
        expect(lookupChar('Love',1)).to.be.equal('о');
    })
    it('Return char with single char at index',()=>{
        expect(lookupChar('L',0)).to.be.equal('L');
    })
    it('Should return "Incorrect index" if index is lower than 0.', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    });
    it('Should return "Incorrect index" for: lookupChar("", 3).', () => {
        expect(lookupChar('', 3)).to.equal('Incorrect index');
    });
    it('Should return "Incorrect index" if index is bigger or equal to string length.', () => {
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    });
    it('Return error at  index ,but incorrect string',()=>{
        expect(lookupChar('',0)).to.undefined
        expect(lookupChar('',1)).to.undefined
    })
  
    //negative tests
    it('Expect prop1 to be string, return undefined if not.', () => {
        expect(lookupChar(111, 0)).to.equal(undefined);
        expect(lookupChar(null, 0)).to.equal(undefined);
        expect(lookupChar(undefined, 0)).to.equal(undefined);
        expect(lookupChar(function () { }, 0)).to.equal(undefined);
        expect(lookupChar({}, 0)).to.equal(undefined);
        expect(lookupChar([], 0)).to.equal(undefined);
    });
    it('Return undefined with second parameter is decimal number',()=>{
        expect(lookupChar('word',10.5)).to.undefined
        
    })
})