const { expect } = require('chai')
const { rgbToHexColor } = require('./rgb')

describe('RGBtoHexColor', () => {
    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    })

    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    })

    it('converts blue', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
    })
    it('return missing params', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined
        expect(rgbToHexColor(0)).to.be.undefined
        expect(rgbToHexColor()).to.be.undefined

    })

    it('unvalid params lower bound', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined

    })

    it('unvalid params of upper bound ', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined

    })
})