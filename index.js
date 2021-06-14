
// Function returns a sorted deck of cards
function generateDeckOfCards() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    // Initialise emty deck array.
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

// Function returns a ramdomised (shuffled) deck of cards.
// Based on Fisher-Yates shuffle
// https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
function shuffleDeck(deck) {
    // Create copy of cards.
    const shuffled = [...deck];

    // Shuffle deck
    for (let i = 0; i < deck.length; i++) {

        // Based on deck length, generate random floating number with Math.random. Math.floor returns the largest integer equal to the given number.
        const j = Math.floor(Math.random() * deck.length);
        const tmp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = tmp;
    }

    return shuffled;
}

// Function return Queen cards converted from Aces.
function convertAcesToQueens(deck) {
    // Create copy of cards.
    const convertedDeck = [...deck];

    for (let i = 0; i < convertedDeck.length; i++) {
        if (convertedDeck[i].startsWith("14")) {

            // Replace all Aces with Queens.
            convertedDeck[i] = convertedDeck[i].replace("14", "12");
        }
    }

    return convertedDeck;
}


// Function returns cards per value.
function countCardsPerValue(deck) {
    // Initialise emty object to store counted values.
    const countedValues = {};

    // Create deck of cards with value of 0.
    for (let i = 2; i <= 14; i++) {
        countedValues[i] = 0;
    }

    // Get first two digits and store value in countedValues obj. 
    for (const card of deck) {
        const value = card.split(" ")[0];
        countedValues[value] += 1;
    }

    return countedValues;
}

// Optimised mapped cards preferred over JS switch statement.
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
