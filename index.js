function generateDeckOfCards() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    const deck = [];

    for (let i = 2; i <= 14; i++) {
        for (let j = 0; j < 4; j++) {
            const suit = suits[j];
            const card = `${i} of ${suit}`;
            deck.push(card);
        }
    }

    return deck;
}

// Based on Fisher-Yates shuffle
// https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
function shuffleDeck(deck) {
    const shuffled = [...deck];

    for (let i = 0; i < deck.length; i++) {
        const j = Math.floor(Math.random() * deck.length);
        const tmp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = tmp;
    }

    return shuffled;
}

function convertAcesToQueens(deck) {
    const convertedDeck = [...deck];

    for (let i = 0; i < convertedDeck.length; i++) {
        if (convertedDeck[i].startsWith("14")) {
            convertedDeck[i] = convertedDeck[i].replace("14", "12");
        }
    }

    return convertedDeck;
}

function countCardsPerValue(deck) {
    const countedValues = {};

    for (let i = 2; i <= 14; i++) {
        countedValues[i] = 0;
    }

    for (const card of deck) {
        const value = card.split(" ")[0];
        countedValues[value] += 1;
    }

    return countedValues;
}

function getValueName(value) {
    const valueNameMap = {
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Jack",
        12: "Queen",
        13: "King",
        14: "Ace",
    };
    return valueNameMap[value];
}

const deckSorted = generateDeckOfCards();
const deckShuffled = shuffleDeck(generateDeckOfCards());

const deckConverted = convertAcesToQueens(generateDeckOfCards());
const countedValues = countCardsPerValue(deckConverted);

for (const value of Object.keys(countedValues)) {
    const count = countedValues[value];
    console.log(`${getValueName(value)}: ${count}`);
}
