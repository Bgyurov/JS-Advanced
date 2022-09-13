const { expect } = require('chai')
const { bookSelection } = require('./solution')

describe("Test", () => {
    describe('isGenreSuitable', () => {
        it('happy path', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable('a', 20)).to.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable('a', 10)).to.equal(`Those books are suitable`)


        })
        it('inaappropriate genre for the age', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`)
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`)
        })

        it('inaappropriate genre for the age, edge case', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`)
        })
    })
    describe('isItAffordable', () => {
        it('happy path', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal('Book bought. You have 1$ left')
        })
        it('happy path, edge case', () => {
            expect(bookSelection.isItAffordable(1, 1)).to.equal(`Book bought. You have 0$ left`)
        })
        it('not enough money', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough money')
        })

        it('invalid input', () => {
            expect(() => bookSelection.isItAffordable('2', 1).to.throw('Invalid input'))
            expect(() => bookSelection.isItAffordable(2, '1').to.throw('Invalid input'))
            expect(() => bookSelection.isItAffordable('1', '2').to.throw('Invalid input'))

        })
    })
    describe('suitableTitles', () => {

        it('happy payh , signle match', () => {
            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            }], 'a')).to.deep.equal(['aa'])
        })
        it('happy payh , two matches', () => {
            expect(bookSelection.suitableTitles([{
                    title: 'aa',
                    genre: 'a'
                },
                {
                    title: 'ab',
                    genre: 'a'
                },
                {
                    title: 'bb',
                    genre: 'b'
                }
            ], 'a')).to.deep.equal(['aa', 'ab'])
        })
        it('no match', () => {
            expect(bookSelection.suitableTitles([{
                title: 'bb',
                genre: 'b'
            }], 'a')).to.deep.equal([])
        })
        it('invalid input', () => {
            expect(() => bookSelection.suitableTitles('adssad', 'a')).to.throw()
        })
    })
})