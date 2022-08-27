function printDeckOfCards(input) {
    let result = []

    for (const el of input) {
        let face = el.slice(0, -1);
        let suit = el.slice(-1);

        try {
            let card = createCard(face, suit);
            result.push(card);
        } catch (error) {
            result = [`Invalid card: ${face}${suit}`];
        }

    }

    console.log(result.join(' '));

    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];

        if (validFaces.indexOf(face) == -1) {
            throw new Error('Invalid face!');
        }
        if (validSuits.indexOf(suit) == -1) {
            throw new Error('Invalid suit!');
        }

        let card = {
            face,
            suit,
            toString: () => {

                let convSuit = '';
                card.suit == 'S' ? convSuit = '\u2660' :
                    card.suit == 'H' ? convSuit = '\u2665' :
                    card.suit == 'D' ? convSuit = '\u2666' :
                    card.suit == 'C' ? convSuit = '\u2663' :
                    undefined;


                return `${card.face}${convSuit}`;
            }
        };

        return card;
    }

}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])