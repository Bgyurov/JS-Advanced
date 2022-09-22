const { expect } = require('chai');
const { flowerShop } = require('./flowerShop.js');


describe("Flower Shop", () => {

    describe('Test for calcPriceOfFlowers(flower, price, quantity) ', () => {
        it("Check for invalid parameters", () => {
            expect(() => flowerShop.calcPriceOfFlowers('string', 'string', 'string').to.equal('Invalid input!'))
            expect(() => flowerShop.calcPriceOfFlowers(3, 'string', 'string').to.equal('Invalid input!'))
            expect(() => flowerShop.calcPriceOfFlowers('string', 3, 'string').to.equal('Invalid input!'))
            expect(() => flowerShop.calcPriceOfFlowers('string', 'string', 3).to.equal('Invalid input!'))
            expect(() => flowerShop.calcPriceOfFlowers(3, 3, 3).to.equal('Invalid input!'))
        })
        it("Check for valid parameters", () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 1, 3)).to.equal('You need 3.00 to buy flower!')
            expect(flowerShop.calcPriceOfFlowers('flower', 3, 3)).to.equal('You need 9.00 to buy flower!')
            expect(flowerShop.calcPriceOfFlowers('flower', 5, 3)).to.equal('You need 15.00 to buy flower!')

        })

    })

    describe('Test for checkFlowersAvailable(flower, gardenArr) ', () => {
        it("Check for available flowers", () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Orch', 'Lily']).to.equal('The Rose are available!'))
            expect(flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Orch', 'Lily']).to.equal('The Lily are available!'))
            expect(flowerShop.checkFlowersAvailable('Orch', ['Rose', 'Orch', 'Lily']).to.equal('The Orch are available!'))

        })
        it("Check for sold flowers", () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Lily", "Orchid"])).to.equal('The Rose are sold! You need to purchase more!')
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Orchid"])).to.equal('The Lily are sold! You need to purchase more!')
            expect(flowerShop.checkFlowersAvailable('Orchid', ["Lily", "Rose"])).to.equal('The Orchid are sold! You need to purchase more!')

        })



        describe("Test for sellFlowers(gardenArr, space) ", () => {
            it("Check for valid parameters", () => {
                expect(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 0)).to.equal('Orch / Lily')
                expect(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 1)).to.equal('Rose / Lily')
                expect(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 2)).to.equal('Rose / Orch')
            })
            it("Check for invalid parameters", () => {
                expect(() => flowerShop.sellFlowers('string', 'string').to.equal('Invalid input!'))
                expect(() => flowerShop.sellFlowers(1, 1).to.equal('Invalid input!'))
                expect(() => flowerShop.sellFlowers(1, ['Rose', 'Orch', 'Lily']).to.equal('Invalid input!'))
                expect(() => flowerShop.sellFlowers('string', 1).to.equal('Invalid input!'))
                expect(() => flowerShop.sellFlowers(Object, 1).to.equal('Invalid input!'))
                expect(() => flowerShop.sellFlowers(false, 1).to.equal('Invalid input!'))

            })

        })

    })
})